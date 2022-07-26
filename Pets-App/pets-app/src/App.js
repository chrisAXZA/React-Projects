import { Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import * as authService from './services/authService.js';

import Login from "./components/Login";
import Header from "./components/Header";
import Edit from "./components/Edit/Edit.js";
import Create from "./components/Create/Create.js";
import MyPets from "./components/MyPets/MyPets.js";
import Details from "./components/Details/Details.js";
import Register from "./components/Register/Register.js";
import Dashboard from "./components/Dashboard/Dashboard.js";

function App() {
    const [userInfo, setUserInfo] = useState({ isAuthenticated: false, username: '', });

    useEffect(() => {
        let user = authService.getUser();

        setUserInfo({
            isAuthenticated: Boolean(user),
            user,
        })
    }, []);

    return (
        <div id="container">
            {/* react deconstruct of Object into separate params */}
            {<Header {...userInfo} />}
            {/* {<Header userInfo={userInfo} />} */}

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
