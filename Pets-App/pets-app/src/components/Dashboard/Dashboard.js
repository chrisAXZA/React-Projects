import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

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
                <Routes>
                    <Route path="/" element={<PetList />} />
                </Routes>
            </nav>

        </section>
    );
};

export default Dashboard;