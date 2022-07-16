import { React, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

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
    // const [page, setPage] = useState('/home');

    // const navigationChangeHandler = (path) => {
    //     // console.log(path);
    //     setPage(path);
    // };

    // const router = (path) => {
    //     let pathNames = path.split('/');
    //     let [_, rootPath, argument] = pathNames;

    //     // console.log(rootPath, argument);

    //     const routes = {
    //         // returns React-Component () and not component object, createElement is executed on given component
    //         'home': <WelcomeWorld navigationChangeHandler={navigationChangeHandler} />,
    //         'games': <GameCatalog navigationChangeHandler={navigationChangeHandler} />,
    //         'create-game': <CreateGame />,
    //         'login': <Login />,
    //         'register': <Register />,
    //         'details': <GameDetails id={argument} />,
    //     };

    //     return routes[rootPath];
    // };

    return (
        <div id="box">

            <Header
            // navigationChangeHandler={navigationChangeHandler}
            />

            <main id="main-content">
                <Switch>
                    <Route path="/" exact component={WelcomeWorld} />
                    <Route path="/games" exact component={GameCatalog} />
                    <Route path="/create-game" component={CreateGame} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/games/:gameId" component={GameDetails} />
                    <Route path="/custom" >
                        <h2>Custom Page</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, eaque.</p>
                    </Route>
                    <Route path="/logout" render={(props) => { // can also be used component instead of render
                        console.log('logout');
                        // Alternative with history redirect
                        // return props.history.push('/');

                        return <Redirect to="/" />;
                    }}
                    />
                </Switch>

                {/* {router(page) || <ErrorPage />}  !!*/}
                {/* {routes[page] || <ErrorPage />} */}

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
