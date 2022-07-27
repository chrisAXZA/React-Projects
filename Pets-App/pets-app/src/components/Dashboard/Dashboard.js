import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

// import * as petService from '../../services/petService.js';

// import PetCard from './PetCard';

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
                <Route path="all" />
            </nav>

        </section>
    );
};

export default Dashboard;