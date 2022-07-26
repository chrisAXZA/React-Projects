export const login = (username) => {
    localStorage.setItem('username', username);
};

export const isAuthenticated = () => {
    let username = localStorage.getItem('username');
    return { username };
};