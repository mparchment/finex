import express from 'express';
import * as sessionController from '../controllers/sessionController';

const router = express.Router();

router.post('/sessions', sessionController.createUserSessionHandler);
router.get('/sessions', sessionController.getAllUserSessionsHandler);
router.get('/sessions/:sessionId', sessionController.getUserSessionHandler);
router.put('/sessions/:sessionId', sessionController.updateUserSessionHandler);
router.delete('/sessions/:sessionId', sessionController.deleteUserSessionHandler);

export default router;
