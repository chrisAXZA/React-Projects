import AboutUs from "./components/AboutUs.js";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import LatestNews from "./components/LatestNews.js";
import OurServices from "./components/OurServices.js";
import OurServices2 from "./components/OurServices2.js";
import PricingPlans from "./components/PricingPlans.js";
import Search from "./components/Search.js";

function App() {
  return (
    <div>
      <div className="back-to-top"></div>

      <Header />

      <OurServices />

      <AboutUs />

      <OurServices2 />

      <Search />

      <PricingPlans />

      <Mission />

      <LatestNews />

      <Footer />
    </div>
  );
}

export default App;
