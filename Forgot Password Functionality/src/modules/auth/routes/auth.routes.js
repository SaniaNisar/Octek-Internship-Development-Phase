import express from 'express';
import { AuthController } from '../controllers/index.js';
import { AsyncMiddleware } from '../../../common/middlewares/index.js';

const router = express.Router();
router.post('/forgotPassword',AsyncMiddleware(AuthController.forgotPassword));

export default router;