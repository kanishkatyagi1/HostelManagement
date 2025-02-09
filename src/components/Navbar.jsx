import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaCaretDown } from "react-icons/fa";
import Logo from "../assets/GBUlogo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [morePopupOpen, setMorePopupOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);

  const popupRef = useRef(null);
  const morePopupRef = useRef(null);
  const navRef = useRef(null);
  
  const togglePopup = () => {
    setPopupOpen(!popupOpen);
    setMorePopupOpen(false); 
  };
  
  const toggleMorePopup = () => {
    setMorePopupOpen(!morePopupOpen);
    setPopupOpen(false); 
  };
  
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleMobileMore = () => setMobileMoreOpen(!mobileMoreOpen);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setPopupOpen(false);
      }
      if (morePopupRef.current && !morePopupRef.current.contains(event.target)) {
        setMorePopupOpen(false);
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  
  

  const boysHostels = [
    "Sant Ravidas", "Sant Kabir Das", "Birsa Munda", "Ram Sharan Das",
    "Shri Narayan Guru", "Tulsidas", "Guru Ghasi Das", "Malik Mohammad Jaysi",
    "Munshi Premchand", "Raheem", "Maharshi Valmiki"
  ];

  const girlsHostels = [
    "Savitri Bai Phule", "Rani Laxmi Bai", "Ramabai Ambedkar",
    "Mahamaya", "Mahadevi Verma", "Ismat Chughtai"
  ];

  const marriedHostels = ["Married Research Scholars Hostel"];
  const moreOptions = ["About Hostels", "Officials", "Office Staff", "Student Utilities", "Student Welfare", "Do's and Dont's", "Contact"];
  const firstBoysColumn = boysHostels.slice(0, 6);
  const secondBoysColumn = boysHostels.slice(6);


  return (
    <nav  className="bg-white text-black shadow-md border-b sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
        <img src={Logo} alt="GBU Logo" className="h-12" />
        <span className="text-lg font-semibold text-gray-700">GBU Hostels</span>
        </Link>

        {/* Desktop Navigation Centered */}
        <div className="hidden md:flex items-center space-x-6 font-medium text-gray-700 mx-auto">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          
          {/* Hostels Dropdown */}
          <div className="relative" ref={popupRef}>
            <button className="flex items-center space-x-2 hover:text-blue-600 transition" onClick={togglePopup}>
              <span>Hostels</span>
              <FaCaretDown />
            </button>
            {popupOpen && (
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 bg-white shadow-xl rounded-lg p-6 border border-gray-200 w-[80vw] z-50">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div>
                    <div className="px-4 py-2 font-semibold bg-gray-100 text-gray-800">Boys' Hostels</div>
                    <ul className="list-decimal pl-6">
                      {firstBoysColumn.map((hostel, index) => (
                        <li key={index} className="py-1">
                          <Link to="#" className="text-gray-600 hover:text-blue-600">{hostel} Boys Hostel</Link>
                        </li>
                      ))}
                    </ul>
                    </div>
                  <div>
                    <div className="px-4 py-2 font-semibold bg-gray-100 text-gray-800">Boys' Hostels</div>
                      <ul className="list-decimal pl-6">
                        {secondBoysColumn.map((hostel, index) => (
                          <li key={index} className="py-1">
                            <Link to="#" className="text-gray-600 hover:text-blue-600">{hostel} Boys Hostel</Link>
                          </li>
                        ))}
                      </ul>
                      </div>
                  <div>
                    <div className="px-4 py-2 font-semibold bg-gray-100 text-gray-800">Girls' Hostels</div>
                    <ul className="list-decimal pl-6">
                      {girlsHostels.map((hostel, index) => (
                        <li key={index} className="py-1">
                          <Link to="#" className="text-gray-600 hover:text-blue-600">{hostel} Girls Hostel</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="px-4 py-2 font-semibold bg-gray-100 text-gray-800">Married Hostel</div>
                    <ul className="list-decimal pl-6">
                      {marriedHostels.map((hostel, index) => (
                        <li key={index} className="py-1">
                          <Link to="#" className="text-gray-600 hover:text-blue-600">{hostel}</Link>
                        </li>
                      ))}
                    </ul>
                </div>
                </div>
              </div>
            )}
          </div>

          

          <Link to="#" className="hover:text-blue-600 transition">Notices</Link>
          <Link to="#" className="hover:text-blue-600 transition">Events</Link>
          <Link to="#" className="hover:text-blue-600 transition">Mess/Dining</Link>
          {/* More Dropdown */}
          <div className="relative" ref={morePopupRef}>
            <button className="flex items-center space-x-2 hover:text-blue-600 transition" onClick={toggleMorePopup}>
              <span>More</span>
              <FaCaretDown />
            </button>
            {morePopupOpen && (
              <div className="absolute mt-4 bg-white shadow-xl rounded-lg p-4 border border-gray-200 w-52 z-50">
                <ul className="list-none">
                  {moreOptions.map((option, index) => (
                    <li key={index} className="py-1">
                      <Link to="#" className="text-gray-600 hover:text-blue-600">{option}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl text-gray-700" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg p-4">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="hover:text-blue-600 transition">Home</Link>
            <button className="flex items-center space-x-2 hover:text-blue-600 transition" onClick={togglePopup}>
              <span>Hostels</span> <FaCaretDown />
            </button>

            {popupOpen && (
              <div className="bg-gray-100 p-4 rounded-md max-h-60 overflow-y-auto [&::-webkit-scrollbar]:hidden">
                <div className="font-semibold">Boys' Hostels</div>
                <ul className="pl-4">
                  {boysHostels.map((hostel, index) => (
                    <li key={index} className="py-1"><Link to="#" className="text-gray-600 hover:text-blue-600">{hostel} Boys Hostel</Link></li>
                  ))}
                </ul>

                <div className="font-semibold mt-3">Girls' Hostels</div>
                <ul className="pl-4">
                  {girlsHostels.map((hostel, index) => (
                    <li key={index} className="py-1"><Link to="#" className="text-gray-600 hover:text-blue-600">{hostel} Girls Hostel</Link></li>
                  ))}
                </ul>

                <div className="font-semibold mt-3">Married Hostel</div>
                <ul className="pl-4">
                  {marriedHostels.map((hostel, index) => (
                    <li key={index} className="py-1"><Link to="#" className="text-gray-600 hover:text-blue-600">{hostel}</Link></li>
                  ))}
                </ul>
              </div>
            )}
            
            <Link to="#" className="hover:text-blue-600 transition">Notices</Link>
            <Link to="#" className="hover:text-blue-600 transition">Events</Link>
            <Link to="#" className="hover:text-blue-600 transition">Mess/Dining</Link>
            <button className="flex items-center space-x-2 hover:text-blue-600 transition" onClick={toggleMobileMore}>
              <span>More</span> <FaCaretDown />
            </button>
            {mobileMoreOpen && (
              <div className="bg-gray-100 p-4 rounded-md max-h-60 overflow-y-auto [&::-webkit-scrollbar]:hidden">
                <ul className="list-none">
                  {moreOptions.map((option, index) => (
                    <li key={index} className="py-1">
                      <Link to="#" className="text-gray-600 hover:text-blue-600">{option}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
