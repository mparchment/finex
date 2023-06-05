import { SignInContainer, LeftPanel, RightPanel } from './SignIn.styles.tsx';
import SignInForm from '../../components/SignInForm/SignInForm.tsx';

const SignIn = () => {

  return (
    <SignInContainer>
      <LeftPanel>
      </LeftPanel>
      <RightPanel>
        <SignInForm/>
      </RightPanel>
    </SignInContainer>
  );
};

export default SignIn;
