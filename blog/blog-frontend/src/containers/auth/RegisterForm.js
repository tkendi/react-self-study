import React, { useEffect, useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { check } from '../../modules/user';
import { withRouter } from 'react-router-dom';

const RegisterForm = ({ history }) => {
  const [error, setError] = useState(null)
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  //input handler
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'register',
        key: name,
        value,
      }),
    );
  };

  //form handler
  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password, passwordConfirm } = form;
    //하나라도 비어있을 시
    if([username, password, passwordConfirm].includes('')) {
      setError('빈 칸을 모두 입력하세요')
      return
    }

    //비밀번호 일치 하지 않을시
    if (passowrd !== passwordConfirm) {
      setError('비밀번호가 일치 하지 않습니다')
      changeField({form: 'register', key: 'password', value: ''})
      changeField({form: 'register', key: 'passwordConfirm', value: ''});
      return;
    }
    dispatch(register({ username, password }));
  };

  useEffect(() => {
    if (authError) {

      //계정명이 여러개 존재시
      if(authError.response.status === 409) {
        setError('이미 존재하는 계정입니다')
        return;
      }
      //다른 이유
      setError('회원가입 실패')
      return;
    }
    if (auth) {
      console.log('회원가입 성공');
      console.log(auth);
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  //user값이 잘 설정되었는지 확인
  useEffect(() => {
    if (user) {
      history.pushState('/');
    }
  }, [history, user]);
  return (
    <AuthForm
      type="register"
      onChange={onChange}
      form={form}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default withRouter(RegisterForm);
