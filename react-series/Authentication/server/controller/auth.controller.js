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
