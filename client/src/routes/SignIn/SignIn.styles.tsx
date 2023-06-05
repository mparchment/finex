import styled from 'styled-components';
import SignInImage from '../../assets/sign-in.jpg';

export const SignInContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const LeftPanel = styled.div`
  flex: 1;
  background-color: #f1f1f1;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 0;

  &::before {
    content: '';
    background-image: url(${SignInImage});
    background-size: cover;
    background-position: center;
    opacity: 0.90;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const RightPanel = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`;