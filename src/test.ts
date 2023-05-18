import mongoose from 'mongoose';
import User from './models/userModel';
import Transaction from './models/transactionModel';
import Account from './models/accountModel';
import express from 'express';
import userRoutes from './routes/userRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const uri = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(uri)
  .then(() => {
    console.log('Connected to MongoDB');

    // Create test data

    // Create users
    const users = [
      {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password1',
        role: 'customer',
        address: '123 Street, City',
        phone: '123-456-7890',
      },
      {
        name: 'Jane Smith',
        email: 'jane@example.com',
        password: 'password2',
        role: 'customer',
        address: '456 Avenue, Town',
        phone: '987-654-3210',
      },
      // Add more user objects as needed
    ];

    // Insert users into the database
    User.insertMany(users)
      .then((createdUsers) => {
        console.log('Created users:', createdUsers);

        // Create accounts
        const accounts = [
          {
            userId: createdUsers[0]._id,
            accountNumber: '123456789',
            balance: 1000,
            accountType: 'savings',
            accountStatus: 'active',
          },
          {
            userId: createdUsers[1]._id,
            accountNumber: '987654321',
            balance: 5000,
            accountType: 'current',
            accountStatus: 'active',
          },
          // Add more account objects as needed
        ];

        // Insert accounts into the database
        Account.insertMany(accounts)
          .then((createdAccounts) => {
            console.log('Created accounts:', createdAccounts);

            // Create transactions
            const transactions = [
              {
                sourceAccountId: createdAccounts[0]._id,
                destinationAccountId: createdAccounts[1]._id,
                amount: 500,
                timestamp: new Date(),
                transactionStatus: 'completed',
              },
              // Add more transaction objects as needed
            ];

            // Insert transactions into the database
            Transaction.insertMany(transactions)
              .then((createdTransactions) => {
                console.log('Created transactions:', createdTransactions);

                // Close the MongoDB connection
                mongoose.connection.close()
                  .then(() => {
                    console.log('MongoDB connection closed');
                  })
                  .catch((error) => {
                    console.error('Error closing MongoDB connection:', error);
                  });
              })
              .catch((error) => {
                console.error('Error creating transactions:', error);
              });
          })
          .catch((error) => {
            console.error('Error creating accounts:', error);
          });
      })
      .catch((error) => {
        console.error('Error creating users:', error);
      });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
