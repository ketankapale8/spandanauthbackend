import express from 'express';
import { CreateOrder, allOrders, findOrder } from '../controllers/orderController.js';
const router = express.Router();

router.post('/neworder', CreateOrder);
router.get('/myorder', findOrder);
router.get('/allorders', allOrders)

export default router;