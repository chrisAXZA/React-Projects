import ServiceCard1 from "./ServiceCard1.js";
import ServiceCard2 from "./ServiceCard2.js";
import ServiceCard3 from "./ServiceCard3.js";

function OurServices() {
    return (
        <div className="page-section">
            <div className="container">
                <div className="row">
                    
                    <ServiceCard1 />

                    <ServiceCard2 />
               
                    <ServiceCard3 />
                    
                </div>
            </div>
        </div>
    );
}

export default OurServices;