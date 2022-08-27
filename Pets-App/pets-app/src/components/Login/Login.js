import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext.js';
import * as authService from '../../services/authService.js';

const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const onLoginHandler = (event) => {
        event.preventDefault();

        let formData = new FormData(event.currentTarget);
        let email = formData.get('email');
        let password = formData.get('password');

        authService.login(email, password)
            .then((authData) => {
                // console.log(`Login Data >>> ${authData}`);
                // onLogin(authData);
                
                login(authData);
                navigate('/dashboard');
            })
            .catch((err) => {
                console.log(err);
            });

        // onLogin(email);
        // history.push() is replaced by Navigate in React Router 6
        // navigate('/dashboard');
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