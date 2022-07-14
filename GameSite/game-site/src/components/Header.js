import React from 'react';

import { Link } from 'react-router-dom';

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

    return (
        <header>
            <h1><Link className="home" to="/">GamesPlay</Link></h1>
            <nav>
                <Link to="/games">All games</Link>
                <div id="user">
                    <Link to="/create-game">Create Game</Link>
                    <Link to="/logout">Logout</Link>
                </div>
                <div id="guest">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </nav>
        </header>

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

