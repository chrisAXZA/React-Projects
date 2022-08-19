import React, { useEffect } from "react";

const Counter = ({
    count,
}) => {
    useEffect(() => {
        console.log('Counter Component was re-rendered!');

        // Clean-up function, will be returned when ComponentWillUnmount event was triggered
        return () => {
            console.log('Counter Component was un-mounted!');
        };
    }, []);

    return (
        <h3>{count}</h3>
    );
};

export default Counter;