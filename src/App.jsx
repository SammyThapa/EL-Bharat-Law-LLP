import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import People from "./pages/People";
import FamilyLaw from "./capabilitiesPages/FamilyLaw";
import Mari from "./capabilitiesPages/Mari";
import Coll from "./capabilitiesPages/Coll";
import Civil from "./capabilitiesPages/Civil";
import Criminal from "./capabilitiesPages/Criminal";
import Inter from "./capabilitiesPages/inter";
import Corp from "./capabilitiesPages/Corp";
import Legal from "./capabilitiesPages/Legal";
import Labour from "./capabilitiesPages/Labour";
import Draft from "./capabilitiesPages/draft";
import News from "./pages/News";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import NewsDetails from "./pages/NewsDetails";
import ScrollTop from "./pages/ScrollTop";
import { FloatingWhatsApp } from "react-floating-whatsapp";

import CapabilitiesDetails from "./pages/CapabilitiesDetails";
import PeopleDetails from "./pages/PeopleDetails";
import Liaisoning from "./capabilitiesPages/Liaisoning";
import Taxation from "./capabilitiesPages/Taxation";
import NRI from "./capabilitiesPages/NRi";
import Intellectual from "./capabilitiesPages/Intellectual";
import Visa from "./capabilitiesPages/Visa";
import Out from "./capabilitiesPages/Out";
import Pre from "./capabilitiesPages/Pre";

function App() {
  return (
    <BrowserRouter>
      <ScrollTop />

      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/people" element={<People />} />
        <Route path="/family" element={<FamilyLaw />} />
        <Route path="/mari" element={<Mari />} />
        <Route path="/coll" element={<Coll />} />
        <Route path="/civil" element={<Civil />} />
        <Route path="/criminal" element={<Criminal />} />
        <Route path="/inter" element={<Inter />} />
        <Route path="/corp" element={<Corp />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/labour" element={<Labour />} />
        <Route path="/liaisoning" element={<Liaisoning />} />
        <Route path="/tax" element={<Taxation />} />
        <Route path="/nri" element={<NRI />} />

        <Route path="/intellectual" element={<Intellectual />} />
        <Route path="/visa" element={<Visa />} />
        <Route path="/out" element={<Out />} />
        <Route path="/pre" element={<Pre />} />

        <Route path="/draft" element={<Draft />} />
        <Route path="/news" element={<News />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogdetails/:slug" element={<BlogDetails />} />
        <Route path="/newsdetails/:slug" element={<NewsDetails />} />
        <Route path="/capabilities/:slug" element={<CapabilitiesDetails />} />
        <Route path="/people/:id" element={<PeopleDetails />} />
      </Routes>
      <FloatingWhatsApp
        phoneNumber="917982350083"
        accountName="EL Bharat Law LLP"
        statusMessage="Typically replies within 1 hour"
        chatMessage="Hello! 👋 How can we help you?"
        placeholder="Type a message..."
        allowClickAway={true}
        allowEsc={true}
      />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
