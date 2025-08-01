import { Router } from 'express';
import authController from '../controllers/authController';

const router = Router();

// Route to initiate the LINE login flow
router.get('/login', authController.login);

// Callback URL for LINE to redirect to after authentication
router.get('/callback', authController.handleSuccess);

// An endpoint to handle login errors
router.get('/error', authController.handleError);

// Route for user registration
router.post('/register', authController.register);

// Route to get a user by their ID
router.get('/user/:id', authController.getUserById);

export default router;