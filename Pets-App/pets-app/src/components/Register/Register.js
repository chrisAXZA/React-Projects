import React, { useContext } from 'react';
import { useNavigate } from 'react-router';

import { AuthContext } from '../../contexts/AuthContext.js';
import * as authService from '../../services/authService.js';

const Register = () => {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const registerSubmitHandler = (event) => {
        event.preventDefault();

        let { email, password, } = Object.fromEntries(new FormData(event.currentTarget))
        // console.log(formData);

        authService.register(email, password)
            .then((authData) => {
                login(authData);
                navigate('/dashboard');
            });
    };

    return (
        <section id="register-page" className="register">
            <form id="register-form" method="POST" onSubmit={registerSubmitHandler}>
                <fieldset>
                    <legend>Register Form</legend>
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
                    <p className="field">
                        <label htmlFor="repeat-pass">Repeat Password</label>
                        <span className="input">
                            <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password" />
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Register" />
                </fieldset>
            </form>
        </section>
    );
};

export default Register;