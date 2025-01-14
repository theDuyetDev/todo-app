import React, { useRef, useState } from "react";
import "./Form.css";

const LoginForm = () => {
  const [isFormValid, setIsFormValid] = useState(false);

  const emailInput = useRef();
  const passwordInput = useRef();

  const checkFormValidHandler = () => {
    if (
      emailInput.current.value === "" ||
      passwordInput.current.value === "" ||
      passwordInput.current.value.length < 6
    ) {
      setIsFormValid(false);
      return;
    }
    setIsFormValid(true);
  };

  const submitHanlder = (e) => {
    e.preventDefault();
    if (!isFormValid) {
      return;
    }
    const loginAPI = "http://localhost:3000/api/auth/login";
    const loginData = {
      email: emailInput.current.value,
      password: passwordInput.current.value,
    };
    fetch(loginAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.status === 200) {
          alert("Login successfully");
        } else {
          alert("Login error");
        }
      })
      .catch((error) => {
        console.log(error.message);
        ó;
      });
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h1>Login</h1>
        <form onSubmit={submitHanlder}>
          <div className="input-group">
            <input
              type="email"
              id="email"
              placeholder="Email"
              ref={emailInput}
              onChange={checkFormValidHandler}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-group">
            <input
              type="password"
              id="password"
              placeholder="Password"
              minLength={6}
              ref={passwordInput}
              onChange={checkFormValidHandler}
            />
            <label htmlFor="password">Password</label>
          </div>
          <button type="submit" className="button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
