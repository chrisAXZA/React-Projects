import { Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import * as authService from './services/authService.js';

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
    const [userInfo, setUserInfo] = useState({ isAuthenticated: false, username: '', });

    useEffect(() => {
        let user = authService.getUser();

        setUserInfo({
            isAuthenticated: Boolean(user),
            user,
        });
    }, []);

    // saving in localStorage is a slow process and might not be executed before 
    // onLogin is executed, thus better practise to pass on to Login component
    // In addition, React will not respond dynamically to any changes in localStorage, 
    // thus additional state changing logic is required (or with the use of context-API)
    const onLogin = (username) => {
        setUserInfo({
            isAuthenticated: true,
            user: username,
        });
    };

    const onLogout = () => {
        setUserInfo({
            isAuthenticated: false,
            user: null,
        });
    };

    return (
        <div id="container">
            {/* react deconstruct of Object into separate params */}
            {<Header {...userInfo} />}
            {/* {<Header userInfo={userInfo} />} */}

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
