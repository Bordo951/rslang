import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const Form = styled.form`
  input {
    width: 90%;
    margin-bottom: 10px;
  }
`;

const SignUp: React.FC = () => {
  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div>
      <Form onSubmit={(e) => handleSignUp(e)}>
        <label htmlFor='mail'>Email</label>
        <input type='email' name='mail' />
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' />
        <button>Sign Up</button>
      </Form>
    </div>
  );
};

export default SignUp;
