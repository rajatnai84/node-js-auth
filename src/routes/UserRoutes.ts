import { getAllUser, signup } from '@controllers/UserControllers'
import express from 'express'

export const router = express.Router()

router.route("/users").post(signup)
router.route("/users").get(getAllUser)

