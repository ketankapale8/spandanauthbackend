import mongoose, { Schema } from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'; 
// const PlansArr = mongoose.model('plansarr',Plans)

const userSchema = new mongoose.Schema({
    // user_id : {type : mongoose.Schema.Types.ObjectId, ref: 'user'},
    name :{
        type : String,
        required: true,
    },
    email :{
        type : String,
        required : true,
        unique:true
    },
   
    password :{
        type : String,
        required: true,
        minlength: [8 , "Password must be atleast 8 characters long"],
        select: false
    },
    occupation : {
        type : String,
        required: false,
    }, 
    date : {
        type : Date,
        required : false
    },


    createdAt: {
        type: Date,
        default : Date.now,
    },

    
    Adhaar : {
        type: Number,
        required: false
    },
    mob : {
        type: Number,
        required: false
    },
    alt_mob : {
        type: Number,
        required: false
    },
    verified : {
        type: Boolean,
        default: false
    },
    token :{
        type : String,
        required : false
    },

   

    SpandanFees : {
        type : Number,
        default : 0
    },
    
   



    // from old paperless model //
    otp: Number,
    otp_expiry:Date,
    resetPasswordOTP : Number,
    resetPasswordOTPExpiry: Date,

})

userSchema.pre("save" ,async function(next){
    if(!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password ,salt);
    next()
});



userSchema.methods.getJWTToken = function() {
    return jwt.sign({
        _id : this._id
    }, process.env.JWT_SECRET , {
    expiresIn : process.env.JWT_COOKIE_EXPIRES *24 * 60 * 60 * 1000

    })
    
};

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };


userSchema.index({otp_expiry:1}, {expireAfterSeconds: 0})

export const User = mongoose.model('User', userSchema)