import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-reudx';
import { changeField, initializeForm, register } from '../modules/auth';
import Authform from './AuthForm';
import {check} from '../modules/user'
import {withRouter} from 'react-router-dom'

const RegisterForm = ({history}) => {
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user
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
    const {username, password, passwordConfirm} = form;
    if(password !== passwordConfirm) {
      //error func
      return;
    }
    dispatch(register({username, password}))
  };
  
  //form initializing
  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  //회원가입 실패/ 성공
  useEffect(() => {
    if(authError) {
      console.log('Error')
      console.log(authError)
      return
    }
    if(auth) {
      console.log('Success')
      console.log(auth)
      dispatch(check())
    }
  }, [auth, authError, dispatch])

  //설정값 확인
  useEffect(() => {
    if(user) {
      history.push('/')
    }
  }, [user])

  return (
    <Authform
      type="SIGN UP"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default withRouter(RegisterForm)
