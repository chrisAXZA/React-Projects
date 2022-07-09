const Header = () => {
    const onHeaderClick = (event) => {
        event.preventDefault();

        if(event.target.tagName === 'A'){
            let url = new URL(event.target.href);
            console.log(url.pathname);
        }
    };

    return (
        <header onClick={onHeaderClick}>
            <h1><a className="home" href="/home">GamesPlay</a></h1>
            <nav>
                <a href="/games">All games</a>
                <div id="user">
                    <a href="/create-game">Create Game</a>
                    <a href="/logout">Logout</a>
                </div>
                <div id="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
            </nav>
        </header>
    );
};

export default Header;

