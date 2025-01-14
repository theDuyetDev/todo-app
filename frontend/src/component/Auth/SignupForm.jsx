import React, { useRef, useState } from "react";
import "./Form.css";

const SignupForm = () => {
  const [isFormValid, setIsFormValid] = useState(false);

  const emailInput = useRef();
  const passwordInput = useRef();
  const usernameInput = useRef();

  const checkFormValidHandler = () => {
    if (
      emailInput.current.value === "" ||
      passwordInput.current.value === "" ||
      passwordInput.current.value < 6 ||
      usernameInput.current.value === ""
    ) {
      setIsFormValid(false);
      return;
    }
    setIsFormValid(true);
  };

  const submitHanlder = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      console.log("Invalid form");
      return;
    }

    console.log(usernameInput.current.value);
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h1>Signup</h1>
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
              ref={passwordInput}
              onChange={checkFormValidHandler}
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className="input-group">
            <input
              type="text"
              id="username"
              placeholder="Username"
              ref={usernameInput}
              onChange={checkFormValidHandler}
            />
            <label htmlFor="username">Username</label>
          </div>
          <button type="submit" className="button">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
