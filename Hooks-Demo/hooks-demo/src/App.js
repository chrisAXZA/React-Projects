import React, { useEffect, useState } from 'react';

import './App.css';

function App() {
    // const stateResult = useState('');

    // const name = stateResult[0];
    // const setName = stateResult[1];

    const [name, setName] = useState('');
    const [count, setCount] = useState(1);
    const [info, setInfo] = useState({
        name: 'Pesho',
        age: 30,
        hobbies: ['first', 'second', 'third',],
    });

    useEffect(() => {
        setTimeout(() => {
            setName('Pesho');
            setInfo((oldState) => ({ ...oldState, age: 31, }));
        }, 1500);
    }, []);


    return (
        <div className="App">
            <h2>{name || 'Loading...'}</h2>
            {/* <h2>{!name ? 'Loading...' : name}</h2> */}
            <h3>{count}</h3>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
        </div>
    );
}

export default App;
