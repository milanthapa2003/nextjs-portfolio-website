"use client"; // Make sure to add this for Client Component


import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa"; // Hamburger & Close Icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
 



    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" passHref>
          <h1 className="text-3xl font-bold text-gold-800 mr-80  hover:text-cyan-400 cursor-pointer transition-all">
            Milan
          </h1>
        </Link>

        {/* Hamburger Icon (visible on small screens) */}
        <div className="lg:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaTimes size={30} className="text-white cursor-pointer" />
          ) : (
            <FaBars size={30} className="text-white cursor-pointer" />
          )}
        </div>

        {/* Nav Links */}
        <ul
          className={`lg:flex lg:space-x-8 text-lg flex-col lg:flex-row items-center absolute lg:static bg-gray-900 lg:bg-transparent w-full left-0 ${
            isMenuOpen ? "top-20" : "-top-full"
          } lg:top-auto transition-all duration-300`}
        >
          <li className="px-4 py-2 hover:bg-gray-700 rounded-lg transition-all">
            <Link href="/" className="hover:text-cyan-400 transition-colors">
              Home
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700 rounded-lg transition-all">
            <Link href="/about" className="hover:text-cyan-400 transition-colors">
              About
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700 rounded-lg transition-all">
            <Link
              href="/portfolio"
              className="hover:text-cyan-400 transition-colors"
            >
              Portfolio
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700 rounded-lg transition-all">
            <Link
              href="/contact"
              className="hover:text-cyan-400 transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>

  
  );
};

export default Navbar;
