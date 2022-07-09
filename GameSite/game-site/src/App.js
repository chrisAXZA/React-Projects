import { createElement, useState } from 'react';

import Login from "./components/Login.js";
import Header from "./components/Header.js";
import EditGame from "./components/EditGame.js";
import Register from "./components/Register.js";
import CreateGame from "./components/CreateGame.js";
import GameCatalog from "./components/GameCatalog.js";
import GameDetails from "./components/GameDetails.js";
import WelcomeWorld from "./components/WelcomeWorld.js";

function App() {
    const [page, setPage] = useState('/home');

    const routes = {
        '/home': <WelcomeWorld />,
        '/games': <GameCatalog />,
        '/create-game': <CreateGame />,
    };

    const navigationChangeHandler = (path) => {
        // console.log(path);
        setPage(path);
    };

    return (
        <div id="box">

            <Header
                navigationChangeHandler={navigationChangeHandler}
            />

            <main id="main-content">
                {routes[page] || <h2>Page Not Found!</h2>}
                {/* {createElement(routes[page]) || <h2>Page Not Found!</h2>} */}

                {/* <WelcomeWorld /> */}

                {/* <Login /> */}

                {/* <Register /> */}

                {/* <CreateGame /> */}

                {/* <EditGame /> */}

                {/* <GameDetails /> */}

                {/* <GameCatalog /> */}
            </main>

        </div>
    );
}

export default App;
