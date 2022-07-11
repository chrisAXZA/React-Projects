import './ErrorPage.css';

const ErrorPage = ({
    children
}) => {
    // console.log(children);
    return (
        // <section className="error-page">
        <section id="catalog-page" className="error-page">
            <h1>Page Not Found</h1>

            {/* children will be rendered if passed on */}
            {children && <p className="no-articles">{children}</p>}
        </section>
    );
};

export default ErrorPage;