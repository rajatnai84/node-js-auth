import { register, login } from '@controllers/userController'
import express from 'express'

export const authRouter = express.Router()

authRouter.route("/register").post(register)
authRouter.route("/login").post(login)

