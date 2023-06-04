import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { SignInFormBox, LogoContainer } from './SignInForm.styles';
import UserContext from '../../contexts/userContext';

const SignInForm = () => {
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
        localStorage.setItem('token', response.data.token);
        userContext?.setUser(response.data.user);
        navigate('/portal');
      } else {
        console.log('Login failed');
      }
    } catch (error) {
      console.error('An error occurred', error);
    }
  };

  return (
    <SignInFormBox onSubmit={handleSubmit}>
      <h1>
        Sign Into
        <br />
        Your Account
      </h1>
      <LogoContainer>Finex</LogoContainer>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button
        type="submit"
        style={{ width: '100%', backgroundColor: 'rgb(37, 150, 190)', color: '#fff' }}
      >
        Sign In
      </button>
    </SignInFormBox>
  );
};

export default SignInForm;
