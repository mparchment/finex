import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { SignInContainer, LeftPanel, RightPanel, SignInForm } from './SignInStyles';
import UserContext from '../../contexts/userContext';

const SignIn = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {
        email,
        password,
      });
    
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token); // updated this line
        userContext?.setUser(response.data.user); // updated this line
        navigate('/portal');
      } else {
        console.log('Login failed');
      }
    } catch (error) {
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
