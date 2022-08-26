import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import './Dashboard.css';

import PetList from '../PetList';

// Variant 1
// import logo from '../../logo.svg';

// Variant 2, named import, bundler will transform into React Component
// import { ReactComponent as Logo } from '../../logo.svg';

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
                {/* nested Routes DEMO */}
                <Routes>
                    <Route path="/" element={<PetList />} />
                    <Route path="/types" element={<p>Types ... </p>} />
                </Routes>
            </section>

            {/* Variant 1 with img container */}
            {/* <img src={logo} alt="logoImage" title="Logo" /> */}

            {/* Variant 2 with ReactComponent*/}
            {/* <Logo className="logo"/> */}

        </section>
    );
};

export default Dashboard;