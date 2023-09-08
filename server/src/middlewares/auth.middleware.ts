import {Request, Response, NextFunction} from 'express'
import { User } from '../models/user.model'
import { Model } from 'sequelize'

export type TypedUser = {
  username: string,
  email: string,
  password: string,
  role: string
}
export interface TypedRequestBodyUser<T> extends Request {
  body: T
}

export const checkDuplicateUsernameOrEmail = async(req: TypedRequestBodyUser<TypedUser>, res: Response, next: NextFunction) => {
  try {
    const { username, email } = req.body
    let user: Model|null
    // Find username
    user = await User.findOne({
      where: {
        username: username
      }
    })
    // Send error if user exist
    if (user) {
      return res.status(403).json({ success: false, msg: 'Username already used'})
    }
    // Find user by email
    user = await User.findOne({
      where: {
        email: email
      }
    })
    // Send error if user exist
    if (user) {
      return res.status(403).json({ success: false, msg: 'Email already used'})
    }
    // Continue if no problem
    next()
  } catch (err) {
    console.log(err);
  }
}