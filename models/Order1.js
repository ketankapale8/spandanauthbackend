import mongoose from 'mongoose';
// const Schema = mongoose.Schema
// const ObjectId = Schema.Types.ObjectId

const OrderSchema = new mongoose.Schema(
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

        servicePlan : {
            type : String,
            required : true

        },

        serviceVal : {
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




        // Fast : {
        //     type : mongoose.Schema.Types.ObjectId,
        //     ref : 'User',  
        //     type: Number,
        //     required : false,
        //     defaultFees: 0, 
        // },
        // Radial : {
        //     type : mongoose.Schema.Types.ObjectId,
        //     ref : 'User', 
        //     type: Number,
        //     required : false,
        //     defaultFees: 38.99
        // },
        // Performance : {
        //     type : mongoose.Schema.Types.ObjectId,
        //     ref : 'User', 
        //     type: Number,
        //     required : false,
        //     default: 78.99

        // },
        // STS : {
        //     type : mongoose.Schema.Types.ObjectId,
        //     ref : 'User', 
        //     type: Number,
        //     required : false,
        //     default: 197.99
        // }
    }
)

export const Order = mongoose.model('Order', OrderSchema)