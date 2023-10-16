import { User } from "../models/users.js";

export const getAllTokens = async (req , res) =>{
    try{
        const allUsers = await User.find()
        // const tokens = allUsers.map(item=>item.token);
        res.status(200).json(allUsers)

    }catch(err){
        console.log(err)
    }
    // const userToken = User.find({email});
    // if(email){
    //    let token =  userToken.token
    // }
}