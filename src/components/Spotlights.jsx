import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

const Spotlights = () => {
  return (
    <div className="w-full flex flex-col items-center mt-10 px-6">
      {/* Buttons Section */}
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {[
          { title: "Online Hostel Management System", subtitle: "(OHMS)" },
          { title: "Primary Hostel Exemption Interface", subtitle: "(PHI)" },
          { title: "Tablet/Smartphone Application Form", subtitle: "(DigiForms)", isNew: true },
        ].map((item, index) => (
          <button
            key={index}
            className="relative bg-white shadow-lg border rounded-xl p-6 text-center hover:shadow-2xl transition transform hover:scale-105 flex flex-col items-center"
          >
            <p className="text-black font-bold text-xl">{item.title}</p>
            <p className="text-gray-600 text-md mt-1">{item.subtitle}</p>
            {item.isNew && (
              <span className="absolute top-3 right-3 bg-red-600 text-white text-sm px-3 py-1 rounded-full shadow-md">
                New
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Moving Spotlights Section */}
      <div className="w-full max-w-5xl bg-gradient-to-r from-purple-700 to-purple-500 text-white py-5 px-6 rounded-xl shadow-lg overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full flex items-center">
          {/* Spotlights Icon */}
          <span className="bg-yellow-500 text-black px-6 py-3 rounded-md font-bold flex items-center text-lg z-10 shadow-md">
            <FaExclamationTriangle className="mr-3 text-2xl" /> Spotlights
          </span>

          {/* Marquee Section */}
          <div className="ml-5 w-full overflow-hidden whitespace-nowrap">
            <div className="marquee text-lg font-semibold flex items-center">
              <p className="mr-16">
                Aadhaar Verification Deadline (05-02-2025)
                <span className="bg-red-500 text-white px-3 py-1 text-sm rounded-md ml-3">New</span>
              </p>
              <p className="mr-16">Deadline Extension of Online Application Form for Tablet</p>
              <p className="mr-16">Hostel Allotment Phase 2 Announced</p>
              <p className="mr-16">New Rules for Hostel Entry - Effective Immediately</p>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for the marquee effect */}
      <style jsx>{`
        .marquee {
          display: flex;
          animation: marquee-scroll 12s linear infinite;
          min-width: 100%;
        }
        @keyframes marquee-scroll {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default Spotlights;
