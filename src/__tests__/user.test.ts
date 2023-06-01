import request from 'supertest';
import app from '../server';
import User, { IUser } from '../models/userModel';
import mongoose from 'mongoose';

describe('User Endpoints', () => {
  let createdUser: IUser;

  beforeAll(async () => {
    // Connect to the test database or set up a test database
    // before running the tests
    // ...
  });

  afterAll(async () => {
    // Clean up the test database or close the database connection
    // after running the tests
    // Close the mongoose connection
    await mongoose.connection.close();
    // ...
  });

  beforeEach(async () => {
    // Create a test user before each test
    const user: IUser = await User.create({
      name: 'John Doe',
      email: 'john@example.com',
      password: 'p@ssw0rd123',
      role: 'customer',
      address: '123 Main Street',
      phone: '555-123-4567',
      dob: new Date('1985-08-15'),
    });
    createdUser = user;
  });

  afterEach(async () => {
    // Remove the test user after each test
    await User.findByIdAndDelete(createdUser._id);
  });

  it('should create a new user', async () => {
    const newUser = {
      name: 'Jane Smith',
      email: 'jane@example.com',
      password: 'p@ssw0rd456',
      role: 'customer',
      address: '456 Elm Street',
      phone: '555-987-6543',
      dob: new Date('1990-05-20'),
    };

    const response = await request(app)
      .post('/api/users')
      .send(newUser)
      .expect(201);

    expect(response.body.user).toBeDefined();
    expect(response.body.user.name).toBe(newUser.name);
    expect(response.body.user.email).toBe(newUser.email);
    // Add assertions for other fields

    // Save the created user for further testing
    createdUser = response.body.user;
  });

  it('should get a user by ID', async () => {
    const response = await request(app)
      .get(`/api/users/${createdUser._id}`)
      .expect(200);

    expect(response.body.user).toBeDefined();
    expect(response.body.user.name).toBe(createdUser.name);
    expect(response.body.user.email).toBe(createdUser.email);
    // Add assertions for other fields
  });

  it('should update a user', async () => {
    const updatedUser = {
      name: 'John Doe',
      email: 'john@example.com',
      password: 'newpassword123',
      role: 'customer',
      address: '123 Main Street',
      phone: '555-123-4567',
      dob: new Date('1985-08-15'),
    };

    const response = await request(app)
      .put(`/api/users/${createdUser._id}`)
      .send(updatedUser)
      .expect(200);

    expect(response.body.user).toBeDefined();
    expect(response.body.user.name).toBe(updatedUser.name);
    expect(response.body.user.email).toBe(updatedUser.email);
    // Add assertions for other fields
  });

  it('should delete a user', async () => {
    await request(app)
      .delete(`/api/users/${createdUser._id}`)
      .expect(200);

    const deletedUser = await User.findById(createdUser._id);
    expect(deletedUser).toBeNull();
  });
});
