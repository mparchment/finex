import express from 'express';
import * as accountController from '../controllers/accountController';

const router = express.Router();

router.post('/accounts', accountController.createAccountHandler);
router.get('/accounts', accountController.getAllAccountsHandler);
router.get('/accounts/:id', accountController.getAccountHandler);
router.put('/accounts/:id', accountController.updateAccountHandler);
router.delete('/accounts/:id', accountController.deleteAccountHandler);

export default router;
