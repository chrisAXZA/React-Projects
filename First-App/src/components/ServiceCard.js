function ServiceCard(props) {
    return (
        <div className="col-lg-4">
            <div className="card-service wow fadeInUp">
                <div className="header">
                    <img src={props.imageUrl} alt="icon" />
                </div>
                <div className="body">
                    <h5 className="text-secondary">{props.title}</h5>
                    <p>{props.description}</p>
                    <a href="service.html" className="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
    );
}

export default ServiceCard;