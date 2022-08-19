import React, { useEffect, useState } from 'react';

import './App.css';
import Counter from './components/Counter.js';
import useDidMount from './hooks/useDidMount.js';
import CharacterList from './components/CharacterList.js';

function App() {
    // const stateResult = useState('');

    // const name = stateResult[0];
    // const setName = stateResult[1];

    const [name, setName] = useState('Pesho');
    const [count, setCount] = useState(1);
    const [info, setInfo] = useState({
        name: 'Pesho',
        age: 30,
        hobbies: ['first', 'second', 'third',],
    });

    // ComponentDidMount, without dependency array will 
    // be exectuted with each new component rerender. In this case even
    // infinite loop since function will be executed indefinitely with each
    // rerender after 1500ms
    useEffect(() => {
        setTimeout(() => {
            setName((oldState) => oldState + 'o');
            // setName('Pesho');
            // console.log('Pehso1');

            setInfo((oldState) => ({
                ...oldState,
                age: 31,
                // hobbies: [...oldState.hobbies, 'Tennis'],
                hobbies: oldState.hobbies.concat('Tennis'),
            }));
        }, 1500);
    }, [count]); // ComponentDidUpdate

    // useDidMount custom hook
    // useDidMount(() => {
    //     setTimeout(() => {
    //         setName((oldState) => oldState + 'o');
    //         // setName('Pesho');
    //         // console.log('Pehso1');

    //         setInfo((oldState) => ({
    //             ...oldState,
    //             age: 31,
    //             // hobbies: [...oldState.hobbies, 'Tennis'],
    //             hobbies: oldState.hobbies.concat('Tennis'),
    //         }));
    //     }, 1500);
    // });

    return (
        <div className="App">
            <h2>{name || 'Loading...'}</h2>
            {/* <h2>{!name ? 'Loading...' : name}</h2> */}
            {count < 10
                ? <Counter key="counter" count={count} />
                : <h3>No Counter</h3>}
            <button onClick={() => setCount((c) => c + 1)}>+</button>

            <CharacterList />
        </div>
    );
}

export default App;
