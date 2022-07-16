import React from 'react';

import { NavLink, Link } from 'react-router-dom';

import './Header.css';

const Header = ({
    // navigationChangeHandler,
}) => {
    // const onHeaderClick = (event) => {
    //     event.preventDefault();

    //     if (event.target.tagName === 'A') {
    //         let url = new URL(event.target.href);
    //         // console.log(url.pathname);
    //         navigationChangeHandler(url.pathname);
    //     }
    // };

    let activeLinkStyles = {
        backgroundColor: 'yellowgreen',
        textDecoration: 'underline',
    };

    return (
        // NavLink tag
        <header>
            {/* <h1 style={{ color: true && 'indianred' }}><NavLink className="home" to="/">GamesPlay</NavLink></h1> */}
            <h1><NavLink className="home" to="/">GamesPlay</NavLink></h1>
            <nav>
                {/* <NavLink activeStyle={activeLinkStyles} to="/games">All games</NavLink> */}
                <NavLink activeClassName="active-navigation-link" to="/games">All games</NavLink>
                <div id="user">
                    <NavLink activeStyle={activeLinkStyles} to="/create-game">Create Game</NavLink>
                    <NavLink activeStyle={activeLinkStyles} to="/logout">Logout</NavLink>
                </div>
                <div id="guest">
                    <NavLink activeStyle={activeLinkStyles} to="/login">Login</NavLink>
                    <NavLink activeStyle={activeLinkStyles} to="/register">Register</NavLink>
                </div>
            </nav>
        </header>

        // Link tag
        // <header>
        //     <h1><Link className="home" to="/">GamesPlay</Link></h1>
        //     <nav>
        //         <Link to="/games">All games</Link>
        //         <div id="user">
        //             <Link to="/create-game">Create Game</Link>
        //             <Link to="/logout">Logout</Link>
        //         </div>
        //         <div id="guest">
        //             <Link to="/login">Login</Link>
        //             <Link to="/register">Register</Link>
        //         </div>
        //     </nav>
        // </header>

        // anchor tag
        // <header onClick={onHeaderClick}>
        //     <h1><a className="home" href="/home">GamesPlay</a></h1>
        //     <nav>
        //         <a href="/games">All games</a>
        //         <div id="user">
        //             <a href="/create-game">Create Game</a>
        //             <a href="/logout">Logout</a>
        //         </div>
        //         <div id="guest">
        //             <a href="/login">Login</a>
        //             <a href="/register">Register</a>
        //         </div>
        //     </nav>
        // </header>
    );
};

export default Header;

