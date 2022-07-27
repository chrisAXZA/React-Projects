const baseUrl = 'http://localhost:3030/jsonstore';

export const getAll = async () => {
    let response = await fetch(`${baseUrl}/pets`);

    // console.log(response);

    let pets = await response.json();

    // console.log(pets);

    let result = Object.values(pets);

    return result;
};

export const create = async (petData) => {
    let response = await fetch(`${baseUrl}/pets`, {
        method: 'POST',
        headers: { 'content-type': 'application/json', },
        body: JSON.stringify(petData),
    });

    let result = await response.json();

    return result;
};