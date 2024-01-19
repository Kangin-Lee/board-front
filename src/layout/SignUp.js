import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const SignUp = () => {
  const [signUp,setSignUp] = useState({
    "email" :"",
    "name":"",
    "nickName":"",
    "password":"",
    "passwordCheck":""
  });
  
  const onSubmit = (e) => {
    e.preventDefault();
    
  };

  const onChange = e => {
    const nextForm = {
      ...signUp,
      [e.target.name]: e.target.value,
    }
    setSignUp(nextForm);
  }

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
          <form
            id="signup-form"
            onSubmit={onSubmit}
          >
            <h5>Your Name</h5>
            <input
              type="text"
              name="userName"
              placeholder="Your Name"
              className="signup-input"
              value={signUp.name}
              onChange={e => {
                onChange(e)
              }}
            />
            <h5>Email</h5>

            <div className="double-check-div">
              <input
                type="text"
                name="userEmail"
                placeholder="Email"
                className="signup-input-double"
                value={signUp.email}
              />
              <button className="signup-email-confirm">
                <FontAwesomeIcon icon={faCircleCheck} />
              </button>
            </div>

            <h5>NickName</h5>
            <div className="double-check-div">
              <input
                type="text"
                name="userNickName"
                placeholder="NickName"
                className="signup-input-double"
                value={signUp.nickName}
              />
              <button className="signup-nickname-confirm">
                <FontAwesomeIcon icon={faCircleCheck} />
              </button>
            </div>

            <h5>Password</h5>
            <input
              type="password"
              name="userPassword"
              placeholder="Password"
              className="signup-input"
              value={signUp.password}
            />
            <h5>Confirm Password</h5>
            <input
              type="password"
              name="userPasswordCheck"
              placeholder="Password"
              className="signup-input"
              value={signUp.passwordCheck}
            />
            <input type="submit" value="SignUp" className="signup-submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
