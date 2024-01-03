import React from 'react'

const Login = () => {
  return (
    <div className='login-area'>
        <div className='login-wrapper'>
            <img className='login-logo' width={180} src='/images/logo/logo-main.png'/>
            <form method='post' action='' id='login-form'>
                <input type='text' name='userName' placeholder='Email' className='login-input'/>
                <input type='password' name="userPassword" placeholder='Password' className='login-input'/>
                <label for="remember-check">
                    <input type='checkbox' id='remember-check' value='아이디 저장하기'/>
                </label>
                <input type='submit' value="Login"/>
            </form>
        </div>
    </div>
  )
}

export default Login
