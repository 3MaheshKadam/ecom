import React from "react";
import "./Login.css";

const LoginPage = () => {
  return (
    <div className="login">
      <div className="login-conainer">
        <h1>Sign-up</h1>
        <div className="login-fields">
          <input type="text" placeholder="name" />
          <input type="email" placeholder="email@address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="Flogin">
          Already have an account ?<span>Login</span>
        </p>
        <div className="login-agree">
          <input type="checkbox" name="" id=" " />
          <p>By continuing , I agree the terms of use & privacy policy </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
