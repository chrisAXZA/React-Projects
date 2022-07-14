import React from 'react';

import { Link } from 'react-router-dom';

const LatestGameCard = ({
    game,
    // navigationChangeHandler,
}) => {
    // const onDetailsClick = (event) => {
    //     event.preventDefault();
    //     navigationChangeHandler(`/details/${game._id}`);
    // };

    return (
        <div className="game">
            <div className="image-wrap">
                <img src={game.imageUrl} />
            </div>
            <h3>{game.title}</h3>
            <div className="rating">
                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
            </div>
            <div className="data-buttons">
                <Link
                    to={`/games/${game._id}`}
                    // onClick={onDetailsClick}
                    className="btn details-btn"
                >
                    Details
                </Link>
            </div>
        </div>
    );
}

export default LatestGameCard;