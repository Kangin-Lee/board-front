import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signup-area">
      <div className="signup-wrapper">
        <Link to="/login">
          <img
            className="signup-logo"
            width={200}
            src="/images/logo/logo-main.png"
          />
        </Link>

        <div>
          <h2>SignUp</h2>
          <form method="post" action="/signup" id="signup-form" onSubmit={onSubmit}>
            <h5>Your Name</h5>
            <input
              type="text"
              name="createName"
              placeholder="Your Name"
              className="signup-input"
            />
            <h5>Email</h5>
            <input
              type="text"
              name="createEmail"
              placeholder="Email"
              className="signup-input"
            />
            <button className="signup-email-confirm">Confirm</button>
            <h5>Password</h5>
            <input
              type="password"
              name="createPassword"
              placeholder="Password"
              className="signup-input"
            />
            <h5>Confirm Password</h5>
            <input
              type="password"
              name="createPassword"
              placeholder="Password"
              className="signup-input"
            />
            <input type="submit" value="SignUp" className="signup-submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
