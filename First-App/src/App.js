import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Search from "./components/Search.js";
import AboutUs from "./components/AboutUs.js";
import Mission from "./components/Mission.js";
import LatestNews from "./components/LatestNews.js";
import TopServices from "./components/TopServices.js";
import OurServices from "./components/OurServices.js";
import PricingPlans from "./components/PricingPlans.js";

function App() {
  return (
    <div>
      <div className="back-to-top"></div>

      <Header />

      <TopServices />

      <AboutUs />

      <OurServices />

      <Search />

      <PricingPlans />

      <Mission />

      <LatestNews />

      <Footer />
    </div>
  );
}

export default App;
