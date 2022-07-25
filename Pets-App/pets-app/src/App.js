import Create from "./components/Create/Create.js";
import Dashboard from "./components/Dashboard/Dashboard.js";
import Details from "./components/Details/Details.js";
import Edit from "./components/Edit/Edit.js";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register/Register.js";

function App() {
    return (
        <div id="container">

            {<Header />}

            <main id="site-content"></main>

            {<Login />}

            {<Register />}

            {<Dashboard />}

            {<Details />}

            {<Create />}

            {<Edit />}

            <section id="my-pets-page" className="my-pets">
                <h1>My Pets</h1>
                <ul className="my-pets-list">
                    <li className="otherPet">
                        <h3>Name: Milo</h3>
                        <p>Type: dog</p>
                        <p className="img"><img src="/images/dog.png" /></p>
                        <a className="button" href="#">Details</a>
                    </li>
                    <li className="otherPet">
                        <h3>Name: Tom</h3>
                        <p>Type: cat</p>
                        <p className="img"><img src="/images/cat1.png" /></p>
                        <a className="button" href="#">Details</a>
                    </li>
                </ul>

                <p className="no-pets">No pets in database!</p>
            </section>

            <footer id="site-footer">
                <p>@PetMyPet</p>
            </footer>

        </div>
    );
}

export default App;
