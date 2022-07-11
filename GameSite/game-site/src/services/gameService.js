const baseUrl = 'http://localhost:3030/data';

export function getAllGames() {
    return fetch(`${baseUrl}/games?sortBy=_createdOn%20desc`)
        .then((res) => {
            // console.log(res);
            return res.json()
        });
}

// Alternative arrow function
// export const getGameById = (id) => fetch(`${baseUrl}/games/${id}`).then((res) => res.json());
export function getGameById(id) {
    return fetch(`${baseUrl}/games/${id}`)
        .then((res) => res.json());
}

export const getLatestGames = () => {
    return fetch(`${baseUrl}/games?sortBy=_createdOn%20desc&distinct=category`)
    .then((res) => res.json());
}