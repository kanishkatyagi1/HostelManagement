import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "../assets/GBUlogo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHostelsDropdownOpen, setIsHostelsDropdownOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);

  return (
    <nav className="bg-white text-black shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={Image} alt="GBU Logo" className="h-12" />
          <span className="text-xl font-semibold">Gautam Buddha University Hostels</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 font-medium">
          <Link to="/" className="hover:text-blue-600">Home</Link>

          {/* Hostels Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsHostelsDropdownOpen(true)}
            onMouseLeave={() => setIsHostelsDropdownOpen(false)}
          >
            <button className="hover:text-blue-600">Hostels ▼</button>
            {isHostelsDropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-56">
                <Link to="/hostel/boys1" className="block px-4 py-2 hover:bg-gray-200">Boys Hostel 1</Link>
                <Link to="/hostel/boys2" className="block px-4 py-2 hover:bg-gray-200">Boys Hostel 2</Link>
                <Link to="/hostel/boys3" className="block px-4 py-2 hover:bg-gray-200">Boys Hostel 3</Link>
                <Link to="/hostel/boys4" className="block px-4 py-2 hover:bg-gray-200">Boys Hostel 4</Link>
                <Link to="/hostel/boys5" className="block px-4 py-2 hover:bg-gray-200">Boys Hostel 5</Link>
                <Link to="/hostel/girls1" className="block px-4 py-2 hover:bg-gray-200">Girls Hostel 1</Link>
                <Link to="/hostel/girls2" className="block px-4 py-2 hover:bg-gray-200">Girls Hostel 2</Link>
                <Link to="/hostel/girls3" className="block px-4 py-2 hover:bg-gray-200">Girls Hostel 3</Link>
                <Link to="/hostel/girls4" className="block px-4 py-2 hover:bg-gray-200">Girls Hostel 4</Link>
                <Link to="/hostel/married" className="block px-4 py-2 hover:bg-gray-200">Married Hostel</Link>
              </div>
            )}
          </div>

          <Link to="/admission" className="hover:text-blue-600">Admission</Link>
          <Link to="/rules" className="hover:text-blue-600">Rules</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>

          {/* More Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsMoreDropdownOpen(true)}
            onMouseLeave={() => setIsMoreDropdownOpen(false)}
          >
            <button className="hover:text-blue-600">More ▼</button>
            {isMoreDropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-40">
                <Link to="/gallery" className="block px-4 py-2 hover:bg-gray-200">Gallery</Link>
                <Link to="/events" className="block px-4 py-2 hover:bg-gray-200">Events</Link>
                <Link to="/faq" className="block px-4 py-2 hover:bg-gray-200">FAQ</Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-100 p-4">
          <Link to="/" className="block py-2 border-b">Home</Link>
          <Link to="/admission" className="block py-2 border-b">Admission</Link>
          <Link to="/rules" className="block py-2 border-b">Rules</Link>
          <Link to="/contact" className="block py-2 border-b">Contact</Link>
          <Link to="/gallery" className="block py-2 border-b">Gallery</Link>
          <Link to="/events" className="block py-2 border-b">Events</Link>
          <Link to="/faq" className="block py-2">FAQ</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
