// import { Images } from "../models/Images.js";

// export const AddImages = async (req ,res) => {
//     const {base64} = req.body;
//     try{
//         Images.create({image:base64})

//         res.send({Status:'ok'})
//     }catch(err){
//         res.status(500).json({ success: false, data:err});
//     }
// }