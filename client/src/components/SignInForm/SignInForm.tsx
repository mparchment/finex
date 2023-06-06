import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { SignInFormBox, LogoContainer, SignUpButton, SignUpFields, HalfWidth, TwoThirdsWidth, OneThirdWidth } from './SignInForm.styles';
import UserContext from '../../contexts/userContext';

const SignInForm = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [dob, setDob] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [isSigningUp, setIsSigningUp] = React.useState(false);
  const [shouldSubmit, setShouldSubmit] = React.useState(false);
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  const clearFields = () => {    
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setAddress('');
    setPhone('');
    setDob('');
    setFirstName('');
    setLastName('');
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!shouldSubmit) {
      return; 
    }

    try {
      let response;
      
      if (isSigningUp) {
        const name = `${firstName} ${lastName}`;
        response = await axios.post('http://localhost:5000/api/users/register', {
          email,
          password,
          name,
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
        navigate('/portal/accounts');
      } else {
        console.log('Login failed');
      }
    } catch (error) {
      console.error('An error occurred', error);
    }
    setShouldSubmit(false);
  };

  const handleSignUpClick = () => {
    setIsSigningUp(!isSigningUp);
    clearFields();
    setShouldSubmit(false);
  };

  return (
    <SignInFormBox onSubmit={handleSubmit}>
      <h1>
        {isSigningUp ? "Create" : "Sign Into"}
        <br />
        Your Account
      </h1>
      <LogoContainer>Finex</LogoContainer>
      {!isSigningUp && (
        <>
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
        </>
      )}
      {isSigningUp && (
        <SignUpFields>
          <HalfWidth>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </HalfWidth>
          <HalfWidth>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </HalfWidth>
          <TwoThirdsWidth>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </TwoThirdsWidth>
          <OneThirdWidth>
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              id="dob"
              value={dob}
              onChange={(event) => setDob(event.target.value)}
            />
          </OneThirdWidth>
          <TwoThirdsWidth>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            />
          </TwoThirdsWidth>
          <OneThirdWidth>
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </OneThirdWidth>
          <HalfWidth>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </HalfWidth>
          <HalfWidth>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </HalfWidth>
        </SignUpFields>
      )}
      <button
        type="submit"
        onClick={() => setShouldSubmit(true)}
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