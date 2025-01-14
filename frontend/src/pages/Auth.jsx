import React from "react";
import { useLocation } from "react-router-dom";
import LoginForm from "../component/Auth/LoginForm";
import SignupForm from "../component/Auth/SignupForm";

const Auth = () => {
  const location = useLocation();

  const form = new URLSearchParams(location.search).get("form");
  return <>{form === "login" ? <LoginForm /> : <SignupForm />}</>;
};

export default Auth;
