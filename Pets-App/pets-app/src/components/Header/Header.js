import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext.js';

const Header = () => {
    const { user } = useContext(AuthContext);

    let guestNavigation = (
        <div id="guest">
            <Link className="button" to="/login">Login</Link>
            <Link className="button" to="/register">Register</Link>
        </div>
    );

    let userNavigation = (
        <div id="user">
            <span>Welcome, {user.email}</span>
            <Link className="button" to="/my-pets">My Pets</Link>
            <Link className="button" to="/create">Add Pet</Link>
            <Link className="button" to="/logout">Logout</Link>
        </div>
    );

    return (
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                    <Link to="/dashboard">Dashboard</Link>

                    {user.email
                        ? userNavigation
                        : guestNavigation
                    }

                </section>
            </nav>
        </header>
    );
};

export default Header;