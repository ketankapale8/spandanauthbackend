import { Service } from "../models/Service.js";
import { User } from "../models/users.js";
import { sendMail } from "../utils/sendMail.js";

// Create Services //
export const CreateService = async (req , res) => {
    try{
        const {email, user_id, ServicePlan , ServiceVal , payOptions, startDate, total, selectedOption} = req.body;
        const service = await Service.create({
            email : req.body.email,
            user_id : req.body.user_id,
            ServicePlan : req.body.ServicePlan, 
            ServiceVal : req.body.ServiceVal,
            payOptions : req.body.payOptions , 
                    startDate : req.body.startDate, 
                    total : req.body.total ,
                     selectedOption : req.body.selectedOption
        })

        await service.save()
        // let user = await User.findById(req.user._id);
        // console.log(user)
        // const { ServicePlan, ServiceVal, payOptions , startDate , total , selectedOption} = req.body;
        // if(user){
        //     plan = await Service.create({
        //         ServicePlan,
        //         ServiceVal, 
        //         payOptions , 
        //         startDate , 
        //         total ,
        //          selectedOption
        //     })

        //     await plan.save()
        // }

        await sendMail(
            email,
            "Credimotion's Portal Update",
            `Below are your Service Plan for your vehicle is updated on Credimotion's Portal
                ReferenceId : ${user_id},
                Service Plan Name : ${ServicePlan},
                Extra Services : ${selectedOption},
                Plan Amount : ${ServiceVal} $,
                Payment Option Selected : ${payOptions},
                Plan Start Date : ${startDate},
                Total Amount : ${total},

            
            `,
          );
        res.send({json: "Updated"})

    }catch(err){
        res.status(500).json({ success: false, msg: err.message });
    }
}

//Update Services // 

// export const UpdateServices= async (req , res) => {
//     try{
//         let user = await User.findById(req.user._id);
//         let plan = awa
//         const { ServicePlan, ServiceVal, payOptions , startDate , total , selectedOption} = req.body;
//         if(user){
            

//             plan.save()
//         }

//         await sendMail(
//             user.email,
//             `Service Plan for your vehicle is updated on Credimotion's Portal for ${user.name}`,
//           );

//     }catch(err){
//         res.status(500).json({ success: false, msg: err.message });
//     }
// }

