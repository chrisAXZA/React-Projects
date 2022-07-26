import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import * as authService from '../../services/authService.js';

const Login = ({
    onLogin,
}) => {
    const navigate = useNavigate();

    const onLoginHandler = (event) => {
        event.preventDefault();

        let formData = new FormData(event.currentTarget);
        // console.log(formData.get('email'));
        // console.log(formData.get('password'));
        let email = formData.get('email');

        authService.login(email);

        onLogin(email);

        // history.push() is replaced by Navigate in React Router 6
        navigate('/');
    };

    return (
        <section id="login-page" className="login">
            <form id="login-form" onSubmit={onLoginHandler}>
                <fieldset>
                    <legend>Login Form</legend>
                    <p className="field">
                        <label htmlFor="email">Email</label>
                        <span className="input">
                            <input type="text" name="email" id="email" placeholder="Email" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="password">Password</label>
                        <span className="input">
                            <input type="password" name="password" id="password" placeholder="Password" />
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Login" />
                </fieldset>
            </form>
        </section>
    );
}

export default Login;