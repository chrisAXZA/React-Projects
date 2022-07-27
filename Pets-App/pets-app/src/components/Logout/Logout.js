import React from 'react';

import { Navigate } from 'react-router-dom';

import * as authService from '../../services/authService.js';

const Logout = ({
    onLogout
}) => {
    authService.logout(); // clears localStorage of current user data
    
    onLogout();

    return <Navigate to="/login" />;
};

export default Logout;