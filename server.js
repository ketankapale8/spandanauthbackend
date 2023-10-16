import {app} from './app.js';
import dotenv from 'dotenv';
import { connectDatabase } from './config/database.js';
// import cloudinary from 'cloudinary';


// app.use(cors());
dotenv.config({
    path:'./config/config.env'
});

// cloudinary.config({
//     cloud_name : process.env.CLOUD_NAME,
//     api_key: process.env.CLOUD_API_KEY,
//     api_secret:process.env.CLOUD_API_SECRET
// });
connectDatabase();



app.listen(process.env.PORT , ()=>{
    console.log(`Server running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`)
})