import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";
import axios from "axios";

const Login = () => {
  const [inputId, setInputId] = useState("");
  const [inputPwd, setInputPwd]= useState("");

  //----------------서버로 보내는 부분------------------
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputId, inputPwd);

    //axios
    axios.post("http://localhost:8080/api/login",{
      email: inputId,
      password: inputPwd,
    })
    .then((res)=>{
      console.log(res.data.inputId, res.data.inputPwd);
      if(res.data.email === undefined){
        alert("아이디가 옳지 않습니다.");
      }else if(res.data.email === null){
        //id는 있지만, pwd는 다른 경우 userId - null
        alert("입력하신 비밀번호가 일치하지 않습니다.")
      }else if(res.data.email === inputId){
        console.log("로그인 성공!")
        sessionStorage.setItem("user_id", inputId); // sessionStorage에 id를 user_id라는 key 값으로 저장
        sessionStorage.setItem("name",res.data.name); 
      }
      //작업이 완료되면 페이지 이동(새로고침)
      document.location.href="/";
    })
    .catch();
  };
  //---------------------------------------------------

  const handleInputId = (e) =>{
    setInputId(e.target.value);
  }

  const handleInputPwd = (e) =>{
    setInputPwd(e.target.value);
  }

  return (
    <div className="login-area">
      <div className="login-wrapper">
        <Link to="/login">
          <img
            className="login-logo"
            width={200}
            src="/images/logo/logo-main.png"
          />
        </Link>
        <div>
          <h2>Login</h2>
          <form id="login-form" onSubmit={onSubmit}>
            <h5>Email</h5>
            <input
              type="text"
              name="userEmail"
              placeholder="Email"
              className="login-input"
              onChange={handleInputId}
              value={inputId}
            />
            <h5>Password</h5>
            <input
              type="password"
              name="userPassword"
              placeholder="Password"
              className="login-input"
              onChange={handleInputPwd}
              value={inputPwd}
            />
            <input type="submit" value="Login" className="login-submit" />
          </form>
          <p className="go-to-sign-up">
            아직 회원이 아니신가요? <Link to="/signup">회원가입</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
