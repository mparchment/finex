import express from 'express';
import * as transactionController from '../controllers/transactionController';

const router = express.Router();

router.post('/accounts', transactionController.createTransactionHandler);
router.get('/accounts', transactionController.getAllTransactionsHandler);
router.get('/accounts/:id', transactionController.getTransactionHandler);
router.put('/accounts/:id', transactionController.updateTransactionHandler);
router.delete('/accounts/:id', transactionController.deleteTransactionHandler);

export default router;
