import React, { useContext } from "react";

import AuthContext from "../contexts/authContext.js";

const Character = ({
    name,
}) => {
    const { addHobby } = useContext(AuthContext);

    return (
        <li onClick={() => addHobby(name)}>Add Hobby: {name}</li>
        // <button onClick={() => addHobby(name)}>Add Hobby: {name}</button>
    );
};

export default Character;