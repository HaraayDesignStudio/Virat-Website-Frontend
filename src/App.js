import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import HomePage from "./pages/homePage";
import Footer from "./components/footer";
import Aboutus from "./pages/aboutus";
import ContactUs from "./pages/contactus";
import HumanSustainbility from "./pages/humanSustainbility";
// import Serivce from "./pages/service";
import Serivce from "./pages/service1";
import HouseKeeping from "./pages/services/houseKeeping";
import HorticultureLandscape from "./pages/services/horticultureLandscape";
import MechanicalServices from "./pages/services/mechanical";
import Plumbing from "./pages/services/plumbing";
import Eletrical from "./pages/services/eletrical"; 
import Casestudyhorticulture from "./pages/casestudy/CasestudyhorticultureLandscape"; 
import Casestudyhousekeeping from "./pages/casestudy/Casestudyhousekeeping";
import Casestudymechanical from "./pages/casestudy/Casestudymechanical";
import Casestudyplumbing from "./pages/casestudy/Casestudyplumbing"; 
import Casestudyelectrical from "./pages/casestudy/Casestudyelectrical"; 
import ScrollToTop from "./components/ScrollToTop"; 
import whatsapp from "./assets/whatsapp.png";
import List from "./pages/List.jsx";
import { HelmetProvider } from "react-helmet-async";
function App() {
  return (
    <HelmetProvider>
    <BrowserRouter>      <ScrollToTop/>
      <Navbar />
<div className="whatsapp-icon">
    <a href="https://wa.me/+919930233901" target="_blank">
        <img src={whatsapp} alt="WhatsApp" />
    </a>
</div>
      <Routes>     
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<List />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/human-sustainability" element={<HumanSustainbility />} />
        <Route path="/services" element={<Serivce />} />
        
        <Route path="/services/house-keeping" element={<HouseKeeping />} />
        <Route
          path="/services/horticulture-landscaping"
          element={<HorticultureLandscape />}
        />
        <Route path="/services/mechanical" element={<MechanicalServices />} />
        <Route path="/services/plumbing" element={<Plumbing />} />
        <Route path="/services/electrical" element={<Eletrical />} />
        {/* case study */}
        <Route
          path="/casestudy/horticulture-landscaping"
          element={<Casestudyhorticulture />}
        /> <Route
        path="/casestudy/housekeeping"
        element={<Casestudyhousekeeping />}
      /><Route
      path="/casestudy/mechanical"
      element={<Casestudymechanical />}
    /><Route
    path="/casestudy/electrical"
    element={<Casestudyelectrical />}
  /><Route
  path="/casestudy/plumbing"
  element={<Casestudyplumbing />}
/>
      </Routes>
      <Footer />
    </BrowserRouter> </HelmetProvider>
  );
}

export default App;
