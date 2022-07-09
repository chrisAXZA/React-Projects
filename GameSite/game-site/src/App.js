import CreateGame from "./components/CreateGame.js";
import EditGame from "./components/EditGame.js";
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
            </main>






            <section id="catalog-page">
                <h1>All Games</h1>
                <div className="allGames">
                    <div className="allGames-info">
                        <img src="/images/avatar-1.jpg" />
                        <h6>Action</h6>
                        <h2>Cover Fire</h2>
                        <a href="#" className="details-button">Details</a>
                    </div>

                </div>
                <div className="allGames">
                    <div className="allGames-info">
                        <img src="/images/avatar-1.jpg" />
                        <h6>Action</h6>
                        <h2>Zombie lang</h2>
                        <a href="#" className="details-button">Details</a>
                    </div>

                </div>
                <div className="allGames">
                    <div className="allGames-info">
                        <img src="/images/avatar-1.jpg" />
                        <h6>Action</h6>
                        <h2>MineCraft</h2>
                        <a href="#" className="details-button">Details</a>
                    </div>
                </div>

                <h3 className="no-articles">No articles yet</h3>
            </section>
        </div>
    );
}

export default App;
