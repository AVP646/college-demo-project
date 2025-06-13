import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import leaf1 from '../assets/img/leaf-1.png';
import leaf2 from '../assets/img/leaf-2.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScrollOrClick = () => {
      setIsMenuOpen(false);
    };

    window.addEventListener('scroll', handleScrollOrClick);
    return () => window.removeEventListener('scroll', handleScrollOrClick);
  }, []);

  return (
    <header id="navbar" className="bg-green-950 shadow-md fixed w-full top-0 left-0 z-50">
      <nav className="flex justify-between items-center container h-16 sm:h-20">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">Plants.</div>

        {/* Navigation Menu */}
        <div
          className={`absolute top-0 ${isMenuOpen ? 'left-0' : 'left-[-100%]'} min-h-[80vh] w-full bg-green-950/80 backdrop-blur-sm flex 
          items-center justify-center duration-300 overflow-hidden lg:static lg:min-h-fit
          lg:bg-transparent lg:w-auto`}
        >
          <ul className="flex flex-col items-center gap-8 lg:flex-row">
            <li>
              <ScrollLink to="home" smooth={true} duration={500} offset={-60} className="nav-link cursor-pointer">
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="about" smooth={true} duration={500} offset={-60} className="nav-link cursor-pointer">
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="popular" smooth={true} duration={500} offset={-60} className="nav-link cursor-pointer">
                Popular
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="review" smooth={true} duration={500} offset={-60} className="nav-link cursor-pointer">
                Review
              </ScrollLink>
            </li>
          </ul>

          {/* Leaf Images */}
          <div>
            <img src={leaf1} alt="Leaf 1" className="w-56 absolute bottom-0 -right-14 opacity-90 lg:hidden" />
            <img src={leaf2} alt="Leaf 2" className="w-56 absolute -top-5 -left-5 rotate-90 opacity-90 lg:hidden" />
          </div>
        </div>

        {/* Hamburger Icon */}
        <div className="text-2xl z-50 cursor-pointer lg:hidden" onClick={toggleMenu}>
          <i className={isMenuOpen ? "ri-close-large-line" : "ri-menu-4-line"}></i>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
