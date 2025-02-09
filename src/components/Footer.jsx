import GBUlogo from "../assets/GBUlogo.png";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold flex items-center">
            <span className="text-orange-500 mr-2">📍</span> Locate us
          </h3>
          <p>Administrative Building, Gautam Buddha University</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold flex items-center">
            <span className="text-green-500 mr-2">📞</span> Call us
          </h3>
          <p>0120-234 6175</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold flex items-center">
            <span className="text-yellow-500 mr-2">✉️</span> Mail us
          </h3>
          <p>hostels@gbu.ac.in</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 pt-6 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* University Description */}
        <div>
          <img src={GBUlogo} alt="GBU Logo" className="w-16 mb-3" />
          <p>
            <strong className="text-white">Gautam Buddha University</strong>, located in Greater Noida, India, 
            is a beacon of higher education, known for its academic excellence and well-structured hostels.
          </p>
          <a href="#" className="text-orange-500 font-semibold">Read More</a>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Useful Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-orange-400">Home</a></li>
            <li><a href="#" className="hover:text-orange-400">All Notices</a></li>
            <li><a href="#" className="hover:text-orange-400">Officials</a></li>
            <li><a href="#" className="hover:text-orange-400">Do's And Don'ts</a></li>
            <li><a href="#" className="hover:text-orange-400">University Website</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white">Follow us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-blue-500 text-2xl">🔵</a>
            <a href="#" className="text-sky-400 text-2xl">🔷</a>
            <a href="#" className="text-pink-500 text-2xl">🟣</a>
            <a href="#" className="text-red-500 text-2xl">🔴</a>
          </div>
        </div>
      </div>

      <div className="text-center mt-6 text-gray-400 border-t border-gray-700 pt-4">
        &copy; 2025 GBU Hostel Management. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
