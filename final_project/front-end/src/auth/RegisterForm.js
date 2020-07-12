import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-reudx';
import { changeField, initializeForm } from '../modules/auth';
import Authform from './AuthForm';

const RegisterForm = () => {
  const dispath = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth.register,
  }));

  //input change handler
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatchEvent(
      changeField({
        form: 'register',
        key: name,
        value,
      })
    );
  };

  //form event handler
  const onSubmit = (e) => {
    e.preventDefault();
  };

  //form initializing
  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  return (
    <Authform
      type="SIGN UP"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default RegisterForm