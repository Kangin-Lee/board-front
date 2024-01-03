import React from 'react'

const Login = () => {
  return (
    <div className='login-area'>
        <div className='login-wrapper'>
            <img className='login-logo' width={130} src='/images/logo/logo-main.png'/>
            <h2>Login</h2>
            <form method='post' action='' id='login-form'>
                <input type='text' name='userName' placeholder='Email' className='login-input'/>
                <input type='password' name="userPassword" placeholder='Password' className='login-input'/>
                <input type='submit' value="Login" className='login-submit'/>
            </form>
        </div>
    </div>
  )
}

export default Login
