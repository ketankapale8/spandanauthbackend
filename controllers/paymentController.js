// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);



export const ProcessPayment = async (req, res) => {
    const myPayment = await stripe.paymentIntents.create({
        amount : req.body.amount,
        currency: "inr"
    })

    res
    .status(200)
    .json({ success: true, client_secret: myPayment.client_secret });
};
    // const {total, email , user_id , servicePlan , serviceVal , startDate } = req.body;

    // const lineItems = [{currency: 'inr', total : total * 100 , email , user_id , servicePlan , serviceVal , startDate}]

    // const session = await stripe.checkout.sessions.create({
    //     payment_method_types:["card"],
    //     line_items: lineItems,
    //     mode:"payment",
    //     success_url:"https://credimotion.netlify.app/sucess",
    //     cancel_url:"https://credimotion.netlify.app/failure",
    // });

    // res.json({id:session.id})



export const sendStripeApiKey = async (req, res) => {
    res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEY });
  };

