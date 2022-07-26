const baseUrl = 'http://localhost:3030/jsonstore';

export const getAll = async () => {
    let response = await fetch(`${baseUrl}/pets`);

    // console.log(response);

    let pets = await response.json();

    // console.log(pets);

    let result = Object.values(pets);

    return result;
};