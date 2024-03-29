import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import * as petService from '../../services/petService.js';

const Create = () => {
    const navigate = useNavigate();

    const [types, setTypes] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/types')
            .then((res) => res.json())
            .then((res) => {
                let typesResult = Object.values(res);

                let categories = typesResult.reduce((acc, curr) => {
                    // if (!acc.includes(curr.category)) {
                    //     acc.push(curr.category);
                    // }

                    if (!acc[curr.category]) {
                        acc[curr.category] = [];
                    }

                    acc[curr.category].push(curr);

                    return acc;
                }, {});

                setCategories(categories);
                setTypes(typesResult);
                // setTypes(Object.values(res));
            });
    }, []);

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
        })
            .then((result) => {
                navigate('/dashboard');
            });
    };

    const onCategoryChange = (event) => {
        // console.log(event.target.value);
        const category = event.target.value;

        // setTypes((state) => state.filter((t) => t.category === category));
        setTypes(categories[category]);
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
                        <label htmlFor="category">Category</label>
                        <span className="input">
                            <select id="category" name="category" onChange={onCategoryChange}>
                                {/* {types.reduce((acc, curr) => {
                                    return acc.add(curr.category);
                                 }, new Set()) */}
                                {/* {types.reduce((acc, curr) => {
                                    if (!acc.includes(curr.category)) {
                                        acc.push(curr.category);
                                    }

                                    return acc;
                                    // return acc[curr.category] = true;
                                }, [])
                                    .map((t) => <option
                                        key={t}
                                        value={t} >
                                        {t}
                                    </option>)} */}

                                {/* {categories.map((t) =>
                                    <option
                                        key={t}
                                        value={t} >
                                        {t}
                                    </option>)} */}
                                {Object.keys(categories).map((t) =>
                                    <option
                                        key={t}
                                        value={t} >
                                        {t}
                                    </option>)}
                            </select>
                        </span>
                    </p>

                    <p className="field">
                        <label htmlFor="type">Type</label>
                        <span className="input">
                            <select id="type" name="type">
                                {types.map((t) => <option
                                    key={t._id}
                                    value={t._id} >
                                    {t.name}
                                </option>)}
                                {/* <option value="cat">Cat</option> */}
                                {/* <option value="dog">Dog</option> */}
                                {/* <option value="parrot">Parrot</option> */}
                                {/* <option value="reptile">Reptile</option> */}
                                {/* <option value="other">Other</option> */}
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