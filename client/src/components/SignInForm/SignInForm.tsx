import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { SignInFormBox, LogoContainer, SignUpButton, SignUpFields } from './SignInForm.styles';
import UserContext from '../../contexts/userContext';

const SignInForm = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [dob, setDob] = React.useState('');
  const [isSigningUp, setIsSigningUp] = React.useState(false);
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      let response;
      
      if (isSigningUp) {
        response = await axios.post('http://localhost:5000/api/users/register', {
          email,
          password,
          username: 'Placeholder',
          role: 'customer',
          address,
          phone,
          dob,
        });
      } else {
        response = await axios.post('http://localhost:5000/api/users/login', {
          email,
          password,
        });
      }

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

  const handleSignUpClick = () => {
    setIsSigningUp(!isSigningUp);
  };

  return (
    <SignInFormBox onSubmit={handleSubmit}>
      <h1>
        {isSigningUp ? "Create" : "Sign Into"}
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
      {isSigningUp && (
        <SignUpFields>
          <div>
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              id="dob"
              value={dob}
              onChange={(event) => setDob(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
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
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
        </SignUpFields>
      )}
      {!isSigningUp && (
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
      )}
      <button
        type="submit"
        style={{ width: '100%', backgroundColor: 'rgb(37, 150, 190)', color: '#fff' }}
      >
        {isSigningUp ? "Sign Up" : "Sign In"}
      </button>
      <div style={{ marginTop: '8px', textAlign: 'left' }}>
        <SignUpButton onClick={handleSignUpClick}>
          {isSigningUp ? "Already have an account? Sign In." : "Not registered? Sign up."}
        </SignUpButton>
      </div>
    </SignInFormBox>
  );
};

export default SignInForm;