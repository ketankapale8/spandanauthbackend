import express from 'express';
import { ProcessPayment , sendStripeApiKey} from "../controllers/paymentController.js";

// const stripe = require("stripe")(process.env.STRIPE_SECRET);

const router = express.Router();

router.post('/processpayments', ProcessPayment);
router.get('/stripeapikey',sendStripeApiKey)

export default router;
