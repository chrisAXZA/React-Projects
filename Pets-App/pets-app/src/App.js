import { Routes, Route } from 'react-router-dom';

import Login from "./components/Login";
import Header from "./components/Header";
import Edit from "./components/Edit/Edit.js";
import Create from "./components/Create/Create.js";
import MyPets from "./components/MyPets/MyPets.js";
import Details from "./components/Details/Details.js";
import Register from "./components/Register/Register.js";
import Dashboard from "./components/Dashboard/Dashboard.js";

function App() {
    return (
        <div id="container">

            {<Header />}

            <main id="site-content">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/my-pets" element={<MyPets />} />
                    <Route path="/create" element={<Create />} />
                </Routes>
            </main>

            {/* {<Login />} */}

            {/* {<Register />} */}

            {/* {<Dashboard />} */}

            {/* {<Details />} */}

            {/* {<Create />} */}

            {/* {<Edit />} */}

            {/* {<MyPets />} */}

            <footer id="site-footer">
                <p>@PetMyPet</p>
            </footer>

        </div>
    );
}

export default App;
