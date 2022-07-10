import { useState } from 'react';

import Login from "./components/Login.js";
import Header from "./components/Header.js";
import EditGame from "./components/EditGame.js";
import Register from "./components/Register.js";
import ErrorPage from './components/ErrorPage.js';
import CreateGame from "./components/CreateGame.js";
import GameDetails from "./components/GameDetails.js";
import WelcomeWorld from "./components/WelcomeWorld.js";
import GameCatalog from "./components/GameCatalog/GameCatalog.js";

function App() {
    const [page, setPage] = useState('/home');

    const routes = {
        // returns React-Component () and not component object, createElement is executed on given component
        '/home': <WelcomeWorld />,
        '/games': <GameCatalog />,
        '/create-game': <CreateGame />,
        '/login': <Login />,
        '/register': <Register />,
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
                {routes[page] || <ErrorPage />}
                {/* {routes[page] || <ErrorPage >Some Additional Info</ErrorPage>} */}
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
