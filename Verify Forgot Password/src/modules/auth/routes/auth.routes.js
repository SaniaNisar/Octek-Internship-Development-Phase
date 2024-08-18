import express from 'express';
import { AuthController } from '../controllers/index.js';
import { AsyncMiddleware } from '../../../common/middlewares/index.js';

const router = express.Router();

/**
 * @openapi
 * /api/auth/register:
 *      post:
 *          tags: 
 *              - auth
 *          description: User registration
 *          requestBody:
 *              required: true,
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              name: 
 *                                  type: string
 *                                  description: User's full name
 *                              email:
 *                                  type: email
 *                                  description: User's email
 *                              password:
 *                                  type: string
 *                                  description: User's password
 *          responses:
 *              201:
 *                  description: Returns a token that will be used in /register/verify   
 */
router.post('/forgotPassword/verify', AsyncMiddleware(AuthController.verifyForgotPassword));
export default router;