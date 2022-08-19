import React, { useState, useEffect } from "react";

import useFetch from "../hooks/useFetch.js";

const CharacterList = () => {
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
            <ul>
                {characters.map((c) => <li key={c.name}>{c.name}</li>)}
            </ul>
            <button onClick={() => setUrl('https://swapi.dev/api/planets')}>Load Planets</button>
        </>
    );
};

export default CharacterList;