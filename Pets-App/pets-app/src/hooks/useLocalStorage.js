import { useState } from 'react';

const useLocalStorage = (key, intialValue) => {
    const [state, setState] = useState(() => {
        try {
            // function will either return item from localStorage or InitialItem
            let item = localStorage.getItem(key);
            // item needs to be parsed to JSON format, since localStorage only stores in string format
            return item
                ? JSON.parse(item)
                : intialValue;
        } catch (error) {
            console.log(error);
            return intialValue;
        }
    });

    const setItem = (value) => {
        try {
            // save to localStorage
            localStorage.setItem(key, JSON.stringify(value));
            // save to state
            setState(value);
        } catch (error) {
            console.log(error);
        }
    };

    // returns state + setState functionality
    return [
        state,
        setItem,
    ];
};

export default useLocalStorage;