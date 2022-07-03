const API_URL = 'http://localhost:3030/data';

export const createTodo = async (todo) => {
    let response = await fetch(`${API_URL}/todos`, {
        method: 'POST',
        headers: {
            'content-type': 'application.json',
        },
        body: JSON.stringify(body),
    });

    let result = await response.json();

    return result;
};

// Promise variant
// export const createTodo = (todo) => {
//     return fetch(`${API_URL}/todos`, {
//         method: 'POST',
//         headers: {
//             'content-type': 'application.json',
//         },
//         body: JSON.stringify(body),
//     })
//         .then((res) => res.json());
// };