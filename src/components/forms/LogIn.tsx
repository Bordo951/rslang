import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { userlogIn } from '../../redux/authSlice';
import styled from 'styled-components';

const Form = styled.form`
  padding: 10px;
  input {
    width: 100%;
    margin-bottom: 10px;
    padding: 6px 4px;
  }
  button {
    background-color: #17a2b8;
    border-color: #17a2b8;
    width: 60%;
    margin: 0 auto;
    display: block;
    padding: 6px 0;
    border-radius: 4px;
  }
`;
const ErrorContainer = styled.div`
  font-size: 12px;
  color: red;
  margin-bottom: 5px;
`;
interface PageInterface {
  setLogInOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}
//{Gfhjkm_123asd", email: "FarrukhTest@blablmail.com"}
const LogIn: React.FC<PageInterface> = ({ setLogInOpen }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorEmail, setErrorEmail] = useState<string>('');
  const [errorPass, setErrorPass] = useState<string>('');
  const dispatch = useDispatch();
  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let passwordRegex = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/;
    e.preventDefault();
    if (email && password) {
      if (
        email.length > 8 &&
        password.length > 8 &&
        emailRegex.test(email) &&
        passwordRegex.test(password)
      ) {
        setErrorEmail('');
        setErrorPass('');
        dispatch(userlogIn({ email, password }));
        setLogInOpen(false);
      } else {
        setErrorEmail('');
        setErrorPass('');
        setErrorEmail('please enter valid email');
        setErrorPass('please enter valid password');
      }
    } else if (!email && !password) {
      setErrorEmail('please enter your email');
      setErrorPass('please enter your password');
    } else if (!password) {
      setErrorPass('please enter your password');
      setErrorEmail('');
    } else if (!email) {
      setErrorEmail('please enter your email');
      setErrorPass('');
    }
  };

  return (
    <div>
      <Form onSubmit={(e) => handleSignUp(e)}>
        <h4>Login</h4>
        <label htmlFor='mail'>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='text'
          name='mail'
        />
        <ErrorContainer>{errorEmail}</ErrorContainer>
        <label htmlFor='password'>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          name='password'
        />
        <ErrorContainer>{errorPass}</ErrorContainer>
        <button>Sign Up</button>
      </Form>
    </div>
  );
};

export default LogIn;
