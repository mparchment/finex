import styled from 'styled-components';

export const SignInFormBox = styled.form`
  position: relative;
  width: 500px;
  padding: 60px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  h1 {
    display: inline-block;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 35px;
    font-size: 36px;
    color: #333;
  }

  div {
    margin-bottom: 25px;
  }

  label {
    display: block;
    margin-bottom: 10px;
    color: #555;
  }

  input {
    width: calc(100% - 36px);
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f2f2f2;
    transition: border-color 0.3s ease;
  }

  input:focus {
    outline: none;
    border-color: dodgerblue;
  }

  button[type='submit'] {
    display: block;
    width: 100%;
    padding: 18px;
    border: none;
    border-radius: 8px;
    background-color: rgb(37, 150, 190);
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button[type='submit']:hover {
    background-color: #3388ff;
  }
`;

export const LogoContainer = styled.div`
  position: absolute;
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  transform: translate(750%, -525%);
  font-variant: small-caps;
  user-select: none;
`;
