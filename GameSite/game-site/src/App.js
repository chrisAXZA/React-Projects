import Login from "./components/Login.js";
import Header from "./components/Header.js";
import EditGame from "./components/EditGame.js";
import Register from "./components/Register.js";
import CreateGame from "./components/CreateGame.js";
import GameCatalog from "./components/GameCatalog.js";
import GameDetails from "./components/GameDetails.js";
import WelcomeWorld from "./components/WelcomeWorld.js";

function App() {
    return (
        <div id="box">

            <Header />

            <main id="main-content">
                <WelcomeWorld />

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
