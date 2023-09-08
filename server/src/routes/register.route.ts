import express from 'express'
import { checkDuplicateUsernameOrEmail } from '../middlewares/auth.middleware'
import { signUp } from '../controllers/auth.controller'

const router = express.Router()

router.post('/', checkDuplicateUsernameOrEmail, signUp)

export default router