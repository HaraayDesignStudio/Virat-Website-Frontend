import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import HomePage from "./pages/homePage";
import Footer from "./components/footer";
import Aboutus from "./pages/aboutus";
import ContactUs from "./pages/contactus";
import HumanSustainbility from "./pages/humanSustainbility";
import Serivce from "./pages/service";

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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
