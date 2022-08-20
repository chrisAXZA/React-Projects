import React, { useContext, useState } from "react";

import useFetch from "../hooks/useFetch.js";
import AuthContext from "../contexts/authContext.js";
import Character from "./Character.js";

const CharacterList = () => {
    // const count = useContext(AuthContext);
    const { count } = useContext(AuthContext);
    const [url, setUrl] = useState('https://swapi.dev/api/people');
    const { state: characters, isLoading, error } = useFetch(url);

    // const [characters, setCharacters] = useState([]);

    // useEffect(() => {
    //     fetch('https://swapi.dev/api/people')
    //         .then((response) => response.json())
    //         // .then((data) => {
    //         .then(({results}) => {
    //             // console.log(results);
    //             setCharacters(results);
    //         });
    // }, []);

    return (
        <>
            <h3>Count inside CharacterList Component = {count}</h3>
            <ul>
                {/* {characters.map((c) => <li key={c.name}>{c.name}</li>)} */}
                {characters.map((c) => <Character key={c.name} name={c.name} />)}
            </ul>
            <button onClick={() => setUrl('https://swapi.dev/api/planets')}>Load Planets</button>
            <Character />
        </>
    );
};

export default CharacterList;