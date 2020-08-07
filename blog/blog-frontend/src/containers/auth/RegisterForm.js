import React, { useEffect, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { check } from '../../modules/user';
import { withRouter } from 'react-router-dom';

const RegisterForm = ({ history }) => {
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
    if (passowrd !== passwordConfirm) {
      return;
    }
    dispatch(register({ username, password }));
  };

  useEffect(() => {
    if (authError) {
      console.log('오류발생');
      console.log(authError);
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
    />
  );
};

export default withRouter(RegisterForm);
