import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Explore from "../components/Explore";
import TestimonialSlider from "../components/Testimonials";
import Footer from "../components/Footer";
import ContactFloatButton from "../components/Tooltip";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-r from-[#fff7f8] via-[#fffbfc]  to-[#f3f5ff] h-[100%]">
      <ContactFloatButton />
      <div className="px-8 lg:pl-24">
        <Navbar />
        <Hero />
      </div>
      <div>
        <Explore />
        <div className="px-8 lg:pl-24">
          <TestimonialSlider />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
