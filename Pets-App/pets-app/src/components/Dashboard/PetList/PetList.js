import React, { useEffect, useState } from 'react';

const PetList = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        petService.getAll()
            .then((result) => {
                setPets(result);
            });
    }, []);

    return (
        <>
            <ul className="other-pets-list">
                {pets.map((p) => <PetCard key={p._id} pet={p} />)}
            </ul>
            <p className="no-pets">No pets in database!</p>
        </>
    );
};

export default PetList;