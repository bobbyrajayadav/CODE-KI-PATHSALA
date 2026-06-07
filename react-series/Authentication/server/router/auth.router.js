import express, { Router } from "express"
import { SignUp, login } from "../controller/auth.controller.js"

const authRouter = Router()

authRouter.post('/signup', SignUp)
authRouter.post('/login', login)

export default authRouter