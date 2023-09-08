import express from 'express'
import { signOut } from '../controllers/auth.controller'

const router = express.Router()

router.post('/', signOut)

export default router