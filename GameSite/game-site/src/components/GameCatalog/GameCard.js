// const GameCard = (props) => {
const GameCard = ({
    game,
    navigationChangeHandler,
}) => {
    const onDetailsClick = (event) => {
        event.preventDefault();
        navigationChangeHandler(`/details/${game._id}`);
    };

    return (
        <div className="allGames">
            <div className="allGames-info">
                <img src={game.imageUrl} />
                <h6>{game.category}</h6>
                <h2>{game.title}</h2>
                {/* <a href="http://localhost:3030/data/games/{game._id}" className="details-button">Details</a> */}
                <a href={`/details/${game._id}`} onClick={onDetailsClick} className="details-button">Details</a>
            </div>
        </div>
    );
};

export default GameCard;