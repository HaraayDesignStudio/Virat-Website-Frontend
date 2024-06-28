import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import HomePage from "./pages/homePage";
import Footer from "./components/footer";
import Aboutus from "./pages/aboutus";
import ContactUs from "./pages/contactus";
import HumanSustainbility from "./pages/humanSustainbility";
import Serivce from "./pages/service";
import HouseKeeping from "./pages/services/houseKeeping";
import HorticultureLandscape from "./pages/services/horticultureLandscape";
import MechanicalServices from "./pages/services/mechanical";
import Plumbing from "./pages/services/plumbing";
import Eletrical from "./pages/services/eletrical";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/human-sustainability" element={<HumanSustainbility />} />
        <Route path="/services" element={<Serivce />} />
        <Route path="/services/house-keeping" element={<HouseKeeping />} />
        <Route path="/services/horticulture-landscaping" element={<HorticultureLandscape />} />
        <Route path="/services/mechanical" element={<MechanicalServices />} />
        <Route path="/services/plumbing" element={<Plumbing />} />
        <Route path="/services/eletrical" element={<Eletrical />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
