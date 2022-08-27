import { Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import { AuthContext } from './contexts/AuthContext.js'

import Login from "./components/Login";
import Header from "./components/Header";
// import Edit from "./components/Edit/Edit.js";
import Create from "./components/Create/Create.js";
import MyPets from "./components/MyPets/MyPets.js";
import Logout from './components/Logout/Logout.js';
import Details from "./components/Details/Details.js";
import Register from "./components/Register/Register.js";
import Dashboard from "./components/Dashboard/Dashboard.js";

function App() {
    const [user, setUser] = useState({
        _id: '',
        email: '',
        accessToken: '',
    });

    const onLogin = (authData) => {
        setUser(authData);
    };

    const onLogout = () => {

    };

    return (
        <AuthContext.Provider value={true}>
            <div id="container">
                {/* <Header {...user} /> */}
                <Header email={user.email} />

                <main id="site-content">
                    <Routes>
                        <Route path="/dashboard/*" element={<Dashboard />} />
                        <Route path="/login" element={<Login onLogin={onLogin} />} />
                        <Route path="/logout" element={<Logout onLogout={onLogout} />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/my-pets" element={<MyPets />} />
                        <Route path="/create" element={<Create />} />
                        <Route path="/details/:petId" element={<Details />} />
                    </Routes>
                </main>

                <footer id="site-footer">
                    <p>@PetMyPet</p>
                </footer>

            </div>
        </AuthContext.Provider>
    );
}

export default App;
