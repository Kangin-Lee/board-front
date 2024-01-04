import React from 'react'
import { Link } from 'react-router-dom';
import SignUp from './SignUp';

const Login = () => {
  const onSubmit = (e) =>{
    e.preventDefault();
  }


  return (
    <div className='login-area'>
        <div className='login-wrapper'>
            <img className='login-logo' width={200} src='/images/logo/logo-main.png'/>
            <div>
              <h2>Login</h2>
              <form method='post' action='' id='login-form' onSubmit={onSubmit}>
                <h5>Email</h5>
                <input type='text' name='userEmail' placeholder='Email' className='login-input'/>
                <h5>Password</h5>
                <input type='password' name="userPassword" placeholder='Password' className='login-input'/>
                <input type='submit' value="Login" className='login-submit'/>
              </form>
              <p className='go-to-sign-up'>아직 회원이 아니신가요? <Link to="/signup">회원가입</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Login
