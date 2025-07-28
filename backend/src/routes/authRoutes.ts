import { Router } from 'express';
import AuthController from '../controllers/authController';

const router = Router();
const authController = new AuthController();

// Route for LINE login
router.get('/login', authController.login);

// Callback route for LINE after authentication
router.get('/callback', authController.handleSuccess);

// Route for handling errors
router.get('/error', authController.handleError);

export default router;