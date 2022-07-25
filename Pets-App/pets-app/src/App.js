import Create from "./components/Create/Create.js";
import Dashboard from "./components/Dashboard/Dashboard.js";
import Details from "./components/Details/Details.js";
import Edit from "./components/Edit/Edit.js";
import Header from "./components/Header";
import Login from "./components/Login";
import MyPets from "./components/MyPets/MyPets.js";
import Register from "./components/Register/Register.js";

function App() {
    return (
        <div id="container">

            {<Header />}

            <main id="site-content">
                
            </main>

            {<Login />}

            {<Register />}

            {<Dashboard />}

            {<Details />}

            {<Create />}

            {<Edit />}

            {<MyPets />}

            <footer id="site-footer">
                <p>@PetMyPet</p>
            </footer>

        </div>
    );
}

export default App;
