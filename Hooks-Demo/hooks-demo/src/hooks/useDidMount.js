import { useEffect } from "react";

// abstract implementation
const useDidMount = (func) => {
    useEffect(() => {
        func();
    }, [func]);
};

export default useDidMount;