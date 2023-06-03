import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { SignInContainer, LeftPanel, RightPanel, SignInForm } from './SignInStyles';

const SignIn = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {
        email,
        password,
      });

      // Assuming the login was successful and you received a response with a success status code (e.g., 200)
      if (response.status === 200) {
        // Perform any necessary actions upon successful login
        navigate('/portal');
      } else {
        // Handle unsuccessful login, e.g., show an error message
        console.log('Login failed');
      }
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error('An error occurred', error);
    }
  };

  return (
    <SignInContainer>
      <LeftPanel>
        {/* Add your graphic content here */}
      </LeftPanel>
      <RightPanel>
        <SignInForm onSubmit={handleSubmit}>
          <h1>Sign In</h1>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button type="submit">Sign In</button>
        </SignInForm>
      </RightPanel>
    </SignInContainer>
  );
};

export default SignIn;
