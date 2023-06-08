import React, { useContext, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { SignInFormBox, LogoContainer, SignUpButton, SignUpFields, HalfWidth, TwoThirdsWidth, OneThirdWidth } from './SignInForm.styles';
import UserContext from '../../contexts/userContext';

interface FormState {
  email: string;
  password: string;
  confirmPassword: string;
  address: string;
  phone: string;
  dob: string;
  firstName: string;
  lastName: string;
  isSigningUp: boolean;
  shouldSubmit: boolean;
  isRegistered: boolean;
}

const SignInForm = () => {
  const [formState, setFormState] = useState<FormState>({
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    phone: '',
    dob: '',
    firstName: '',
    lastName: '',
    isSigningUp: false,
    shouldSubmit: false,
    isRegistered: false,
  });
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  const clearFields = useCallback(() => {
    setFormState((prevState) => ({
      ...prevState,
      email: '',
      password: '',
      confirmPassword: '',
      address: '',
      phone: '',
      dob: '',
      firstName: '',
      lastName: '',
    }));
  }, []);

  const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    if (!formState.shouldSubmit) {
      return;
    }
  
    try {
      let response;
  
      if (formState.isSigningUp) {
        const name = `${formState.firstName} ${formState.lastName}`;
        response = await axios.post('http://localhost:5000/api/users/register', {
          email: formState.email,
          password: formState.password,
          name,
          role: 'customer',
          address: formState.address,
          phone: formState.phone,
          dob: formState.dob,
        });
  
        if (response.status === 201) {
          console.log('Registration successful');
          setFormState((prevState) => ({
            ...prevState,
            isSigningUp: false,
            isRegistered: true,
          }));
          clearFields();
        } else {
          console.log('Registration failed');
        }
      } else {
        response = await axios.post('http://localhost:5000/api/users/login', {
          email: formState.email,
          password: formState.password,
        });
  
        if (response.status === 200) {
          console.log('Login successful');
          localStorage.setItem('token', response.data.token);
          userContext?.setUser(response.data.user);
          navigate('/portal/accounts');
        } else {
          console.log('Login failed');
        }
      }
    } catch (error) {
      console.error('An error occurred', error);
    }
  
    setFormState((prevState) => ({
      ...prevState,
      shouldSubmit: false,
    }));
  }, [formState, navigate, userContext, clearFields]);

  const handleSignUpClick = useCallback(() => {
    setFormState((prevState) => ({
      ...prevState,
      isSigningUp: !prevState.isSigningUp,
    }));
    clearFields();
    setFormState((prevState) => ({
      ...prevState,
      shouldSubmit: false,
    }));
  }, [clearFields]);

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  }, []);

  return (
    <SignInFormBox onSubmit={handleSubmit}>
      <h1>
        {formState.isSigningUp ? "Create" : "Sign Into"}
        <br />
        Your Account
      </h1>
      <LogoContainer>Finex</LogoContainer>
      {!formState.isSigningUp && (
        <>
          {formState.isRegistered && (
            <div style={{ color: 'green', marginBottom: '16px' }}>
              Registration successful! Please sign in to continue.
            </div>
          )}
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={formState.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={formState.password}
              onChange={handleChange}
            />
          </div>
        </>
      )}
      {formState.isSigningUp && (
        <SignUpFields>
          <HalfWidth>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              value={formState.firstName}
              onChange={handleChange}
            />
          </HalfWidth>
          <HalfWidth>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={formState.lastName}
              onChange={handleChange}
            />
          </HalfWidth>
          <TwoThirdsWidth>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={formState.email}
              onChange={handleChange}
            />
          </TwoThirdsWidth>
          <OneThirdWidth>
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              id="dob"
              value={formState.dob}
              onChange={handleChange}
            />
          </OneThirdWidth>
          <TwoThirdsWidth>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              value={formState.address}
              onChange={handleChange}
            />
          </TwoThirdsWidth>
          <OneThirdWidth>
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              value={formState.phone}
              onChange={handleChange}
            />
          </OneThirdWidth>
          <HalfWidth>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={formState.password}
              onChange={handleChange}
            />
          </HalfWidth>
          <HalfWidth>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={formState.confirmPassword}
              onChange={handleChange}
            />
          </HalfWidth>
        </SignUpFields>
      )}
      <button
        type="submit"
        onClick={() => setFormState((prevState) => ({
          ...prevState,
          shouldSubmit: true,
        }))}
        style={{ width: '100%', backgroundColor: 'var(--primary-color)', color: '#fff' }}
      >
        {formState.isSigningUp ? "Sign Up" : "Sign In"}
      </button>
      <div style={{ marginTop: '8px', textAlign: 'left' }}>
        <SignUpButton onClick={handleSignUpClick}>
          {formState.isSigningUp ? "Already have an account? Sign In." : "Not registered? Sign up."}
        </SignUpButton>
      </div>
    </SignInFormBox>
  );
};

export default SignInForm;