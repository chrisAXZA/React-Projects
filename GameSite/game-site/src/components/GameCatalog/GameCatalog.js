import { React, useEffect, useState } from 'react';

import * as gameService from '../../services/gameService.js';

import GameCard from './GameCard.js';

const GameCatalog = ({
    navigationChangeHandler,
}) => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(false);

    // setTimeout(() => {
    // // useEffect here for delayed loading
    // useEffect(() => {
    //     setLoading(true);
    //     fetch('http://localhost:3030/data/games?sortBy=_createdOn%20desc')
    //         .then((res) => {
    //             // console.log(res);
    //             return res.json()
    //         })
    //         .then((result) => {
    //             // set all games present on backend unto local games-state
    //             setGames(result);
    //             setLoading(false);
    //         });
    // }, []);
    // }, 1000);

    useEffect(() => {
        gameService.getAllGames()
            .then((result) => {
                // set all games present on backend unto local games-state
                setGames(result);
                setLoading(false);
            });
    }, []);

    return (
        <section id="catalog-page">
            <h1>All Games</h1>

            {
                games.length > 0
                    ? games.map((game) => <GameCard key={game._id} game={game} navigationChangeHandler={navigationChangeHandler} />)
                    : <h3 className="no-articles">No games yet</h3>
            }

            {/* { loading ? <h1>Loading...</h1> : games.length > 0 ? games.map((game) => <GameCard key={game._id} game={game} />) : <h3 className="no-articles">No games yet</h3> } */}

        </section>
    );
};

export default GameCatalog;