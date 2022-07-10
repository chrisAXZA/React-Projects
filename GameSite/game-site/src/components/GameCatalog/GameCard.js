const GameCard = (props) => {
    return (
        <div className="allGames">
            <div className="allGames-info">
                <img src={props.imageUrl} />
                <h6>{props.category}</h6>
                <h2>{props.title}</h2>
                <a href="http://localhost:3030/data/games/{props._id}" className="details-button">Details</a>
            </div>
        </div>
    );
};

export default GameCard;