import express from 'express';
import {getAllTokens} from '../controllers/Tokens.js'

const router = express.Router();

router.get('/gettokens' , getAllTokens)
export default router;