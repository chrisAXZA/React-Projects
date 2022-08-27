// export const login = (username) => {
//     localStorage.setItem('username', username);
// };

const baseUrl = 'http://localhost:3030';

export const login = async (email, password) => {
    let response = await fetch(`${baseUrl}/users/login`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });
    // .then((res) => {
    //     console.log(res);

    //     if (res.ok) {
    //         return res.json();
    //     }

    //     throw res.json();
    // });

    let jsonResult = await response.json();

    if (response.ok) {
        return jsonResult;
    } else {
        throw jsonResult.message;
    }
};

export const logout = () => {
    fetch(`${baseUrl}/users/logout`)
        .then()

};

export const getUser = () => {
    let username = localStorage.getItem('username');
    return username;
};

export const isAuthenticated = () => {
    return Boolean(getUser());
};
