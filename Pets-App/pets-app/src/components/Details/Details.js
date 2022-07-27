import React, { useEffect, useState } from 'react';

// useParams for params, useMatch for url
import { useParams } from 'react-router-dom';

import * as petService from '../../services/petService.js';

const Details = () => {
    const { petId } = useParams();
    // let params = useParams();

    // by default empty object, otherwise will return undefined in HTML template
    const [pet, setPet] = useState({});

    // useEffect(async () => {
    //     let petResult = await petService.getOne(petId);

    //     setPet(petResult);
    // }, []);
    useEffect(() => {
        async function fetchData() {
            let petResult = await petService.getOne(petId);

            setPet(petResult);
        }
    }, []);

    return (
        <section id="details-page" className="details">
            <div className="pet-information">
                <h3>Name: {pet.name}</h3>
                <p className="type">Type: {pet.type}</p>
                <p className="img"><img src={pet.imageUrl} /></p>
                <div className="actions">
                    <a className="button" href="#">Edit</a>
                    <a className="button" href="#">Delete</a>

                    <a className="button" href="#">Like</a>

                    <div className="likes">
                        <img className="hearts" src="/images/heart.png" />
                        <span id="total-likes">Likes: {pet.likes}</span>
                    </div>
                </div>
            </div>
            <div className="pet-description">
                <h3>Description:</h3>
                <p>{pet.description}</p>
            </div>
        </section>
    );
};

export default Details;