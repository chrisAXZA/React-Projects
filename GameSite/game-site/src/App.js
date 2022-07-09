import CreateGame from "./components/CreateGame.js";
import EditGame from "./components/EditGame.js";
import GameCatalog from "./components/GameCatalog.js";
import GameDetails from "./components/GameDetails.js";
import Header from "./components/Header.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import WelcomeWorld from "./components/WelcomeWorld.js";

function App() {
    return (
        <div id="box">

            <Header />

            <main id="main-content">
                <WelcomeWorld />

                <Login />

                <Register />

                <CreateGame />

                <EditGame />

                <GameDetails />

                <GameCatalog />
            </main>

        </div>
    );
}

export default App;
