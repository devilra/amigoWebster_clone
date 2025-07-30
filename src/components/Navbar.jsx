import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuButon] = useState(false);

  const navItems = [
    "Home",
    "Our Service",
    "Portfolio",
    "Price",
    "About Us",
    "Contact",
  ];
  return (
    <nav className="pt-5">
      <div className=" flex  items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/logo/logo-1.png"
            alt="Logo"
            className="h-16 w-96 lg:h-12 lg:w-auto "
          />
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 pl-28">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer  text-gray-700 font-medium text-[16px]  transition-all hover:duration-300 ${
                index === 0
                  ? "text-[#ff4e63] border-b-2 border-[#ff4e63]"
                  : "hover:text-[#ff4e63] hover:border-b-2 border-[#ff4e63] "
              }`}>
              {item}
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <button className="bg-[#32b632] ml-14 text-white px-6 text-[15px] py-2 rounded hover:bg-green-600">
            Get Quote
          </button>
        </div>
        {/* Mobile Menu Button */}
      </div>
      <div className="flex justify-center my-12">
        <button
          onClick={() => setMobileMenuButon(!mobileMenuOpen)}
          className="md:hidden text-gray-800">
          {mobileMenuOpen ? (
            <X size={35} strokeWidth={2} />
          ) : (
            <Menu size={35} strokeWidth={2} />
          )}
        </button>
      </div>
      <div
        className={`md:hidden absolute  left-0 w-full bg-white shadow transition-all duration-300 ease-out origin-top transform ${
          mobileMenuOpen
            ? "scale-y-100 opacity-100"
            : "scale-y-0 opacity-0 pointer-events-none"
        } `}>
        <ul className="space-y-3 text-gray-700 font-medium ">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center">
              <li
                className={`cursor-pointer border-b border-neutral-200 text-center hover:text-white w-full py-3 hover:bg-[#ff0000]${
                  index === 0 ? " text-white bg-[#ff0000] w-full" : ""
                }`}>
                {item}
              </li>
            </div>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
