import {createTransport} from 'nodemailer';

export const sendMail = async (email , subject , text) =>{
    const transport = createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        // secure: false,
        logger: true,
  debug: true,
  ignoreTLS: true, // add this ,
        auth : {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }, 
        tls : {
            rejectUnauthorized : true
        }
    })
    await transport.sendMail({
        from: process.env.SMTP_USER,
        to: email,
        subject,
        text
    })
}