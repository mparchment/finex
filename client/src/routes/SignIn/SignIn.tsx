import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SignInContainer, LeftPanel, RightPanel, SignInForm } from './SignInStyles';

const SignIn = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      navigate('/portal');
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
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
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
