import { register, login } from '@controllers/userController'
import { getUser } from '@services/userService';
import express from 'express'
import { body } from 'express-validator'

export const authRouter = express.Router()

const validEmailChain = () => body('email').notEmpty().trim().isEmail().withMessage("Not a valid Email");
const emailInUse = async (value:string) => {
    const user = await getUser(value);
    if (user) {
        throw new Error('Email is already in use.')
    }
}
const userNameInUse = async (value:string) => {
    const user = await getUser(value);
    if (user) {
        throw new Error('Username is already in use.')
    }
}
const validUsernameChain = () => body('username').notEmpty().trim()
    .isLength({ min: 6, max: 10 }).withMessage("username length should be in 6 to 10")
    .matches(/^[a-zA-Z0-9]*$/).withMessage("Username cannot contains special characters or whitespaces")

const loginUserNameChain = () => body('username').notEmpty().trim()

const passwordCahin = () => body('password').notEmpty().withMessage("Password cannot be empty")
.isLength({min:6, max:10}).withMessage("Password length should be in 6 to 10")

authRouter.route("/register").post(
    validEmailChain().custom(emailInUse),
    validUsernameChain().custom(userNameInUse),
    passwordCahin(),
    register)

authRouter.route("/login").post(
    loginUserNameChain(),
    passwordCahin(),
    login)

