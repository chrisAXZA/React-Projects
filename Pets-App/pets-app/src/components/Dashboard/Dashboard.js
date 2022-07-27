import React, { useState, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

// import * as petService from '../../services/petService.js';

// import PetCard from './PetCard';
import PetList from '../PetList';

const Dashboard = () => {
    // const [pets, setPets] = useState([]);

    // useEffect(() => {
    //     petService.getAll()
    //         .then((result) => {
    //             setPets(result);
    //         });
    // }, []);

    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>

            {/* nested Routes */}
            <nav>
                <Link to="types">Types +++ </Link>
            </nav>

            <section>
                <Routes>
                    <Route path="/" element={<PetList />} />
                    <Route path="/types" element={<p>Types ... </p>} />
                </Routes>
            </section>

        </section>
    );
};

export default Dashboard;