import React from 'react';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';

const Login = () => {
  return (
    <div>
      <h1 className='title'>Login page</h1>
      <form>
        <MyInput type='text' placeholder='Name' />
        <MyInput type='password' placeholder='Password' />
        <MyButton>Log in</MyButton>
      </form>
    </div>
  );
};

export default Login;
