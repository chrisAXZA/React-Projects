import React from 'react';
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

            {/* Sub-Navigation */}
            <nav>
                <Link to="types">Types +++ </Link>
            </nav>

            <section>
                {/* nested Routes */}
                <Routes>
                    <Route path="/" element={<PetList />} />
                    <Route path="/types" element={<p>Types ... </p>} />
                </Routes>
            </section>

        </section>
    );
};

export default Dashboard;