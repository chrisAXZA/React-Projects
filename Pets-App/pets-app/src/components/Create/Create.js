import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import * as petService from '../../services/petService.js';
import { AuthContext } from '../../contexts/AuthContext.js';

const Create = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const onPetCreate = (event) => {
        event.preventDefault();

        let formData = new FormData(event.currentTarget);
        let name = formData.get('name');
        let description = formData.get('description');
        let imageUrl = formData.get('imageUrl');
        let type = formData.get('type');

        petService.create({
            name,
            description,
            imageUrl,
            type,
        }, user.accessToken)
            .then((result) => {
                navigate('/dashboard');
            });
    };

    return (
        <section id="create-page" className="create">
            <form id="create-form" onSubmit={onPetCreate} method="POST">
                <fieldset>
                    <legend>Add new Pet</legend>
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input">
                            <input type="text" name="name" id="name" placeholder="Name" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea name="description" id="description" placeholder="Description"></textarea>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="image" placeholder="Image" />
                        </span>
                    </p>

                    <p className="field">
                        <label htmlFor="type">Type</label>
                        <span className="input">
                            <select id="type" name="type">
                                <option value="cats"> Cats </option>)
                                <option value="dogs"> Dogs </option>)
                                <option value="other"> Other </option>)
                            </select>
                        </span>
                    </p>

                    <input className="button submit" type="submit" value="Add Pet" />
                </fieldset>
            </form>
        </section>
    );
};

export default Create;