import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-r from-[#fff7f8] via-[#fffbfc]  to-[#f3f5ff] h-[100%]">
      <div className="px-8 lg:pl-24">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default HomePage;
