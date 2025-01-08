import { getAllUsers } from '@controllers/usersController'
import express from 'express'

export const userRouter = express.Router()

userRouter.route("/getAll").get(getAllUsers)


