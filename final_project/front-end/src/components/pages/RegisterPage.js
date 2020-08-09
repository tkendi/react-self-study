import React from "react";
import AuthTemplate from "../auth/AuthTemplate";
import RegisterForm from "../../containers/auth/RegisterForm";

const RegisterPage = () => {
  return (
    <AuthTemplate page="Register">
      <RegisterForm />
    </AuthTemplate>
  );
};

export default RegisterPage;
