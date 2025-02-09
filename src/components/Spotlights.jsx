import React from "react";

const Spotlights = () => {
  return (
    <div className="w-full flex flex-col items-center mt-6">
      {/* Buttons Section */}
      <div className="w-[90%] flex justify-center gap-6 mb-4">
        <button className="bg-white shadow-md border rounded-lg p-4 text-center hover:shadow-lg transition">
          <p className="text-black font-semibold">Online Hostel Management System</p>
          <p className="text-gray-500 text-sm">(OHMS)</p>
        </button>

        <button className="bg-white shadow-md border rounded-lg p-4 text-center hover:shadow-lg transition">
          <p className="text-black font-semibold">Primary Hostel Exemption Interface</p>
          <p className="text-gray-500 text-sm">(PHI)</p>
        </button>

        <button className="bg-white shadow-md border rounded-lg p-4 text-center hover:shadow-lg transition relative">
          <p className="text-black font-semibold">Tablet/Smartphone Application Form</p>
          <p className="text-gray-500 text-sm">(DigiForms)</p>
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-md">
            New
          </span>
        </button>
      </div>

      {/* Spotlights Section */}
      <div className="w-[90%] bg-purple-700 text-white p-3 rounded-lg flex items-center">
        <span className="bg-yellow-500 text-black px-3 py-1 rounded-l-md font-bold">
          Spotlights
        </span>
        <p className="ml-3 text-sm">
          Aadhaar Verification (05-02-2025){" "}
          <span className="bg-red-500 text-white px-2 py-1 text-xs rounded-md">
            New
          </span>{" "}
          Deadline Extension of Online Application Form for Tablet
        </p>
      </div>
    </div>
  );
};

export default Spotlights;
