import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';

import { AuthContext } from './contexts/AuthContext.js'
import useLocalStorage from './hooks/useLocalStorage.js';

import Login from "./components/Login";
import Header from "./components/Header";
// import Edit from "./components/Edit/Edit.js";
import Create from "./components/Create/Create.js";
import MyPets from "./components/MyPets/MyPets.js";
import Logout from './components/Logout/Logout.js';
import Details from "./components/Details/Details.js";
import Register from "./components/Register/Register.js";
import Dashboard from "./components/Dashboard/Dashboard.js";

const initialAuthState = {
    _id: '',
    email: '',
    accessToken: '',
};

function App() {
    // const [user, setUser] = useState({
    const [user, setUser] = useLocalStorage('user', initialAuthState);

    const login = (authData) => {
        setUser(authData);
    };

    const logout = () => {
        setUser(initialAuthState);
        // setUser will call upon setItem, which will override current 
        // user with initialAuthState
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            <div id="container">
                {/* <Header {...user} /> */}
                <Header />

                <main id="site-content">
                    <Routes>
                        <Route path="/dashboard/*" element={<Dashboard />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/logout" element={<Logout />} />
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
