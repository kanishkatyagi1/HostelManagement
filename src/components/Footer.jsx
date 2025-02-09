import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import GBUlogo from "../assets/GBUlogo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold flex items-center space-x-2 text-white">
            <MapPin className="text-cyan-400" size={20} />
            <span>Locate Us</span>
          </h3>
          <p className="mt-2">Administrative Building, Gautam Buddha University</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold flex items-center space-x-2 text-white">
            <Phone className="text-cyan-400" size={20} />
            <span>Call Us</span>
          </h3>
          <p className="mt-2">0120-234 6175</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold flex items-center space-x-2 text-white">
            <Mail className="text-cyan-400" size={20} />
            <span>Mail Us</span>
          </h3>
          <p className="mt-2">hostels@gbu.ac.in</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* University Description */}
        <div>
          <img src={GBUlogo} alt="GBU Logo" className="w-20 mb-4 opacity-90" />
          <p>
            <strong className="text-white">Gautam Buddha University</strong>, located in Greater Noida, is known for its academic excellence and well-structured hostels.
          </p>
          <a href="#" className="text-blue-400 font-semibold inline-block mt-3 hover:opacity-80 transition-opacity">Read More</a>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Useful Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400 transition-opacity hover:opacity-80">Home</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-opacity hover:opacity-80">All Notices</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-opacity hover:opacity-80">Officials</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-opacity hover:opacity-80">Do's And Don'ts</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-opacity hover:opacity-80">University Website</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-5 mt-2">
            <a href="#" className="text-blue-400 hover:opacity-80 transition-opacity">
              <Facebook size={26} />
            </a>
            <a href="#" className="text-cyan-400 hover:opacity-80 transition-opacity">
              <Twitter size={26} />
            </a>
            <a href="#" className="text-pink-400 hover:opacity-80 transition-opacity">
              <Instagram size={26} />
            </a>
            <a href="#" className="text-red-400 hover:opacity-80 transition-opacity">
              <Youtube size={26} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-12 text-gray-500 border-t border-gray-700 pt-6">
        &copy; 2025 GBU Hostel Management. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
