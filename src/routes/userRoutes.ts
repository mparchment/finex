import express from 'express';
import * as userController from '../controllers/userController';

// Express Router (https://expressjs.com/en/guide/routing.html)
// The router object defines the endpoints that the app will run requests through.
// Each endpoint is mapped to a controller function that will handle the request and return the response.
// The router object is then exported so that it can be used in the app.ts file. 

const router = express.Router();

// These routes map the HTTP methods (GET, POST, PUT, DELETE) to the corresponding controller functions, which will handle the logic and interact with the database.

router.get('/users', userController.getAllUsersHandler); // Get all users [READ]

router.post('/users', userController.createUserHandler); // Create a new user [CREATE]
router.get('/users/:id', userController.getUserHandler); // Get a single user by their id [READ]
router.put('/users/:id', userController.updateUserHandler); // Update a user by their id [UPDATE]
router.delete('/users/:id', userController.deleteUserHandler); // Delete a user by their id [DELETE]

router.post('/users/login', userController.loginUserHandler); // Login a user

export default router;