import React, { useContext, useEffect, useState } from 'react';

// useParams for params, useMatch for url
import { useNavigate, useParams } from 'react-router-dom';

import * as petService from '../../services/petService.js';
import { AuthContext } from '../../contexts/AuthContext.js';

const Details = () => {
    const { petId } = useParams();
    const [pet, setPet] = useState({});
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            let petResult = await petService.getOne(petId);
            setPet(petResult);
        }

        fetchData();
    }, []);

    const editHandler = () => {

    };

    const deleteHandler = (event) => {
        event.preventDefault();
        petService.deletePet(petId, user.accessToken)
            .then(() => {
                navigate('/dashboard');
            });;
    };

    const ownerButtons =
        (<>
            <a className="button" onClick={editHandler}>Edit</a>
            <a className="button" onClick={deleteHandler}>Delete</a>
        </>);

    const userButtons =
        (
            <a className="button" href="#">Like</a>
        );

    return (
        <section id="details-page" className="details">
            <div className="pet-information">
                <h3>Name: {pet.name}</h3>
                <p className="type">Type: {pet.type}</p>
                <p className="img"><img src={pet.imageUrl} alt="pet-image" /></p>
                <div className="actions">

                    {user._id && (user._id === pet._ownerId
                        ? ownerButtons
                        : userButtons
                    )}

                    <div className="likes">
                        <img className="hearts" src="/images/heart.png" />
                        <span id="total-likes">Likes: {pet?.likes?.length}</span>
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