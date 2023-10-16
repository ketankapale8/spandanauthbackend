import mongoose from 'mongoose';
// const Schema = mongoose.Schema
// const ObjectId = Schema.Types.ObjectId

const servicesSchema = new mongoose.Schema(
    {
        email : {
            type:String,
            required: true
        },
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },

        ServicePlan : {
            type : String,
            required : true

        },

        ServiceVal : {
            type : String,
            required : true
        },

        payOptions : {
            type : String,
            required : true
        }
        ,
        startDate : {
            type : String,
            required : true
        },

        total : {
            type : Number,
            required : true
        }, 

        selectedOption : {
            type : String, 
            required : true
        }




      
    }
)

export const Service = mongoose.model('Service', servicesSchema)