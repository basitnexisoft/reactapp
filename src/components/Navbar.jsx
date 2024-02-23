import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
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
          <button className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out">
            Contact Us
          </button>
        </div>

        <div className="lg:hidden flex items-center">
          {menuOpen ? (
            <AiOutlineClose size={28} onClick={toggleMenu} />
          ) : (
            <AiOutlineMenu size={28} onClick={toggleMenu} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${menuOpen ? "" : "hidden"} lg:hidden absolute bg-backgroundColor text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-auto transition-transform duration-300`}>
        <Link to="home" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer" onClick={closeMenu}>
          Home
        </Link>
        <Link to="about" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer" onClick={closeMenu}>
          About Us
        </Link>
        <Link to="services" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer" onClick={closeMenu}>
          Services
        </Link>
        <Link to="doctors" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer" onClick={closeMenu}>
          Doctors
        </Link>
        <Link to="blog" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer" onClick={closeMenu}>
          Blog
        </Link>
      </div>
    </div>
  );
};

export default Navbar;