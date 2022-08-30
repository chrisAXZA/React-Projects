import React, { useContext, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext.js';
import * as authService from '../../services/authService.js';

const Logout = ({
    // onLogout, // passed by App.js
}) => {
    const navigate = useNavigate();
    const { user, logout } = useContext(AuthContext);
    useEffect(() => {
        // clears localStorage of current user data
        authService.logout(user.accessToken) // logs out from server
            .then(() => {
                logout(); // logs out locally
                navigate('/dashboard');
            });
    }, []);

    // onLogout();

    // will return template while logout process is ongoing
    return null;
    // return <Navigate to="/login" replace={true} />;
};

export default Logout;