const ErrorPage = ({
    children
}) => {
    // console.log(children);
    return (
        <section id="catalog-page">
            <h1>Page Not Found</h1>

            {/* children will be rendered if passed on */}
            {children && <h3 className="no-articles">{children}</h3>}
        </section>
    );
};

export default ErrorPage;