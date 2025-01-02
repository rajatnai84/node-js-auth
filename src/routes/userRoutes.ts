import { getAllUser } from '@controllers/userController'
import express from 'express'

export const userRouter = express.Router()

userRouter.route("/getAll").get(getAllUser)


