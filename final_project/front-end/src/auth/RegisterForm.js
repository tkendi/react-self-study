import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, register } from '../modules/auth';
import Authform from './AuthForm';
import {check} from '../modules/user'
import {withRouter} from 'react-router-dom'

const RegisterForm = ({history}) => {
  const [error, setError] = useState(null)

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
    //하나의 값이 들어있지 않을 시
    if([username, password, passwordConfirm].includes('')) {
      setError('빈 칸을 모두 입력해주세요')
      return;
    }

    //비밀번호 일치하지 않을 시
    if (password !== passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다')
      changeField({form: 'register', key: 'password', value: ''})
      changeField({form: 'register', key: 'passwordConfirmss', value: ''})
      return
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
      //계정이 이미 존재하는 경우
      if(authError.response.status === 409) {
        setError('계정이 이미 존재합니다')
        return
      } else {
        setError('회원가입에 실패 하였습니다')
        return
      }
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
