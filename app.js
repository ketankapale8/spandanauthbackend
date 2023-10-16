import express from 'express';
import bodyParser from 'body-parser';
// import ImageRouter from './routes/Image.js'
import UserRouter from './routes/User.js';
import ServiceRouter from './routes/Service.js';
import OrderRouter from './routes/Order.js'
import PayRouter from './routes/Payment.js';
import NotificationRouter from './routes/Tokens.js';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import cors from 'cors'

export const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());
app.use(fileUpload({
    limits:{
        fileSize : 50 * 1024 * 1024
    },
    useTempFiles: true
}))

const corsOptions = {
    credentials : true , 
    allowedHeaders : 'X-Requested-With , Content-Type , Authorization'
}

app.use(cors({
    methods : ["GET" ,"POST" ,"PUT" ,"PATCH","DELETE"],
    allowedHeaders : 'X-Requested-With ,Content-Type ,Authorization , Authorization',
    origin: process.env.FRONT_END_URL,
    // origin : '*',
    credentials : true
}))

app.use('/api/v1', UserRouter);
app.use('/api/v1', NotificationRouter);
app.use('/api/v1', ServiceRouter);
// app.use('/api/v1', PayRouter);
app.use('/api/v1', OrderRouter);
// app.use('/api/v1', ImageRouter);


app.get('/', (req,res)=>{
    res.send('Running Spandan Backend..')
})

