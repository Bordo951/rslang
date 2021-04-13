import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { userlogIn } from '../../redux/authSlice';
import styled from 'styled-components';

const Form = styled.form`
  input {
    width: 90%;
    margin-bottom: 10px;
  }
`;
interface PageInterface {
  setLogInOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const LogIn: React.FC<PageInterface> = ({ setLogInOpen }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch();
  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(userlogIn({ email, password }));
    setLogInOpen(false);
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
        <label htmlFor='password'>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          name='password'
        />
        <button>Sign Up</button>
      </Form>
    </div>
  );
};

export default LogIn;
