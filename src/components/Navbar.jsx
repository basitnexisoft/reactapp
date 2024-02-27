import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Contact from "../models/Contact";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);
 
  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };
  const openForm = () => {
    setShowForm(true);
    setMenu(false);
  };
  const clessForm = () => {
    setShowForm(false);
  };

  return (
    <div className="fixed w-full z-10 text-white">
      <div className="flex justify-between p-5 md:px-32 px-5 bg-backgroundColor shadow-[rgba(0,0,0,0.24) 0px 3px 8px]">
        <div className="flex items-center cursor-pointer">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer text-2xl font-semibold"
          >
            wellnessVista
          </Link>
        </div>

        <nav className="hidden lg:flex flex-row items-center text-lg font-medium gap-8">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-hoverColor transition-all cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-hoverColor transition-all cursor-pointer"
          >
            About Us
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-hoverColor transition-all cursor-pointer"
          >
            Services
          </Link>
          <Link
            to="doctors"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-hoverColor transition-all cursor-pointer"
          >
            Doctors
          </Link>
          <Link
            to="blog"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-hoverColor transition-all cursor-pointer"
          >
            Blog
          </Link>
        </nav>

        <div className="hidden lg:flex">
          <button onClick={openForm} className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out">
            Contact Us
          </button>
        </div>
         {showForm && <Contact closeform={clessForm} />}
        <div className="lg:hidden flex items-center">
          {menu ? (
            <AiOutlineClose size={28} onClick={handleChange} />
          ) : (
            <AiOutlineMenu size={28} onClick={handleChange} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden absolute bg-backgroundColor text-white left-0 top-16 font-semibold text-2xl text-left pl-5 pt-8 pb-4 gap-8 w-full h-screen transition-transform duration-300`}>
        <Link to="home" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer block py-3" onClick={closeMenu}>
          Home
        </Link>
        <Link to="about" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer block py-3" onClick={closeMenu}>
          About Us
        </Link>
        <Link to="services" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer block py-3" onClick={closeMenu}>
          Services
        </Link>
        <Link to="doctors" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer block py-3" onClick={closeMenu}>
          Doctors
        </Link>
        <Link to="blog" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer block py-3" onClick={closeMenu}>
          Blog
        </Link>

        <div className=" lg:hidden">
          <button onClick={openForm} className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;