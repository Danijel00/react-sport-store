import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HeroSection from "./components/HeroSection/HeroSection";
import Categories from "./components/Categories/Categories";
import Categories2 from "./components/Categories/Categories2";
import Products from "./components/Products/Products";
import Offer from "./components/Offer/Offer";
import Testimonial from "./components/Testimonial/Testimonial";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import Footer from "./components/Footer/Footer";
import Facility from "./components/Facility/Facility";
import SignInPage from "./pages/SingInPage";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function App() {
  return (
    <div className="App">
      <Router path="/">
        <Routes>
            <Route exact path="/" element={<Home />} />
        </Routes>
        <HeroSection />
        <Categories />
        <Products />
        {/*Offer*/}
        <Offer />
        <Facility />
        <Testimonial />
        <Categories2 />
        <SocialLinks />
        <Footer />   
        <Routes>
          <Route exact path="/signin" element={<SignInPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
