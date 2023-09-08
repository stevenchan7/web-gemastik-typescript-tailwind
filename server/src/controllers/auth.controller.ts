import {Request, Response} from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { User } from '../models/user.model'
import { Community } from '../models/community.model'
import { hashPassword } from '../utils/auth.util'
import { TypedRequestBodyUser, TypedUser } from '../middlewares/auth.middleware'

export const signUp = async(req: TypedRequestBodyUser<TypedUser>, res: Response) => {
  try {
    const {username, email, password, role} = req.body
    let user
    // Check user role
    if(role === 'volunteer') {
      user = await User.create({
        username: username,
        email: email,
        password: await hashPassword(password)
      })
    } else {
      user = await Community.create({
        username: username,
        email: email,
        password: await hashPassword(password)
      })
    }
    // Return response
    res.status(200).json({ success: true, data: user })
  } catch (err) {
    console.log(err);
  }
}

export const signIn = async(req: TypedRequestBodyUser<TypedUser>, res: Response) => {
  try {
    const {username, password, role} = req.body
    let user
    // Find user
    if(role === 'volunteer') {
      user = await User.findOne({
        where: {
          username: username
        }
      })
    } else {
      user = await Community.findOne({
        where: {
          username: username
        }
      })
    }
    if(user){
      // Check user password
      const isMatch = await bcrypt.compare(password, user.password)
      // If password wrong
      if(!isMatch){
        return res.status(400).json({ success: false, data: 'Password is incorrect'})
      }
      // Create token
      let token = jwt.sign({id: user.id}, process.env.JWT_SECRET!, { expiresIn: 3600})
      // Keep token on session
      if(req.session) {
        req.session.token = token
      }
      // Response
      return res.status(200).json({ success: true, data: token })
    }
  } catch (err) {
    console.log(err)
  }
}

export const signOut = (req: Request, res: Response) => {
  req.session = null;
}