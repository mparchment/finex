import express from 'express';
import * as sessionController from '../controllers/sessionController';

const router = express.Router();

router.post('/sessions', sessionController.createUserSessionHandler);

export default router;