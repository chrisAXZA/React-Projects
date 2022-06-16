import ServiceCard1 from "./ServiceCard1.js";
import ServiceCard2 from "./ServiceCard2.js";
import ServiceCard3 from "./ServiceCard3.js";
import ServiceCard from "./ServiceCard.js";

function TopServices() {
    return (
        <div className="page-section">
            <div className="container">
                <div className="row">

                    <ServiceCard
                        title="SEO Consultancy"
                        description="We help you define your SEO objective & develop a realistic strategy with you"
                        imageUrl="/img/services/service-1.svg"
                    />
                    <ServiceCard
                        title="Content Marketing"
                        description="We help you define your SEO objective & develop a realistic strategy with you"
                        imageUrl="/img/services/service-2.svg"
                    />
                    <ServiceCard
                        title="Keyword Research"
                        description="We help you define your SEO objective & develop a realistic strategy with you"
                        imageUrl="/img/services/service-3.svg"
                    />

                    {/* <ServiceCard1 /> */}
                    {/* <ServiceCard2 /> */}
                    {/* <ServiceCard3 /> */}
                </div>
            </div>
        </div>
    );
}

export default TopServices;