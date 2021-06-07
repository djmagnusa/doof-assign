import React from 'react'

const LoginForm = (props) => (
    <div className="loginForm">
        <p class="login__title">Login</p>
        <p class="login__credentials">Email</p>
        <input placeholder="Email"></input>
        <p class="login__credentials">Password</p>
        <input placeholder="Password"></input>
        <a class="login__forgotpassword">Forgot Password</a>
        <button class="login__button">Login</button> 
        <p class="login__forgot">Don't have an account yet? <span>Signup</span></p>
    </div>
);

export default LoginForm;