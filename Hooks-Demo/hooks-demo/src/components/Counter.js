import React, { useContext, useEffect } from "react";

import AuthContext from "../contexts/authContext.js";

const Counter = ({
    count,
}) => {
    // const countContext = useContext(AuthContext);
    const { countContext } = useContext(AuthContext);

    useEffect(() => {
        console.log('Counter Component was re-rendered!');

        // Clean-up function, will be returned when ComponentWillUnmount event was triggered
        return () => {
            console.log('Counter Component was un-mounted!');
        };
    }, []);

    return (
        <h3>{countContext} inside Counter Component</h3>
    );
};

export default Counter;