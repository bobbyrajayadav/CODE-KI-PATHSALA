import generateToken from "../config/token.js"
import User from "../model/user.model.js"
import bcrypt from 'bcryptjs'

export const SignUp = async(req, res) => {
    try {
        const {firstName, lastName, email, password, userName} = req.body

        if(!firstName || !lastName || !email || !password || !userName){
            return res.status(400).json({message:"send all details"})
        }
        
        
        let existUser = await User.findOne({email})// {email:email} -> both name are same so we write it as {email}

        if(existUser) {
            return res.status(400).json({message:"User already exists"})
        }

        //step 2 hashing
        const hassedPassword = await bcrypt.hash(password, 10)

        //step 3 create new user 
        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hassedPassword,
            userName
        })  


        // step 4 jwt token 
        let token
        try {
            token = generateToken(user._id)
        } catch (error) {
            console.log(error);
            
        }

        res.cookie("token", token, { // these are all security features
            httpOnly:true,   //js ke access ko prevent karta hai when true 
            secure:process.env.NODE_ENVIRONMENT == "production",             // when in development it is false else when in production it true
            sameSite: "strict",
            maxAge: 7*24*60*60*1000
        })



        return res.status(201).json({user: {
            firstName,
            lastName,
            email,
            userName
        }})

        
    } catch (error) {
        return res.status(500).json({message: " server error"})
    }
}


export const login = async(req, res) => {
    try {
        const {email, password} = req.body
        const existUser = await User.findOne({email})
        if(!existUser){
            return res.status(400).json({message: " user does not exist"})
        }

        let match = await bcrypt.compare(password, existUser.password)
        if(!match){
            return res.status(400).json({message:'Incorrect Password'})
        }


        let token
        try {
            token = generateToken(existUser._id)
        } catch (error) {
            console.log(error);
            
        }

        res.cookie("token", token, { // these are all security features
            httpOnly:true,   //js ke access ko prevent karta hai when true 
            secure:process.env.NODE_ENVIRONMENT == "production",             // when in development it is false else when in production it true
            sameSite: "strict",
            maxAge: 7*24*60*60*1000
        })

        return res.status(200).json({user: {
            firstName: existUser.firstName,
            lastName: existUser.lastName,
            email: existUser.email,
            userName: existUser.userName
        }})

        

    } catch (error) {
        return res.status(500).json(error) 
    }
}
