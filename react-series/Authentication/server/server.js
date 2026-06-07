import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import authRouter from "./router/auth.router.js"
import cookieParser from "cookie-parser"
dotenv.config()
import cors from 'cors'

const app = express()
const port = process.env.PORT || 4000

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// middleware api 
app.use('/api', authRouter)

app.listen(port, ()=>{
    connectDB()
    console.log(`server started at ${port}`)
})