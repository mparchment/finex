import express from 'express';
import * as userController from '../controllers/userController';

const router = express.Router();

router.get('/users', userController.getAllUsers); // Get all users [READ]

router.post('/users', userController.createUser); // Create a new user [CREATE]
router.get('/users/:id', userController.getUserById); // Get a single user by their id [READ]
router.put('/users/:id', userController.updateUser); // Update a user by their id [UPDATE]
router.delete('/users/:id', userController.deleteUser); // Delete a user by their id [DELETE]

export default router;