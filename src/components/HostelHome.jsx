import React from "react";

const girlsHostels = [
  "Savitri Bai Phule Girls Hostel",
  "Rani Laxmi Bai Girls Hostel",
  "Rama Bai Ambedkar Girls Hostel",
  "Mahamaya Girls Hostel",
  "Mahadevi Verma Girls Hostel",
  "Ismat Chughtai Girls Hostel",
];

const boysHostels = [
  "Sant Ravidas Boys Hostel",
  "Sant Kabir Das Boys Hostel",
  "Birsa Munda Boys Hostel",
  "Ram Sharan Das Boys Hostel",
  "Shri Narayan Guru Boys Hostel",
  "Tulsidas Boys Hostel",
  "Guru Ghasi Das Boys Hostel",
  "Malik Mohammad Jaysi Boys Hostel",
  "Munshi Premchand Boys Hostel",
  "Raheem Boys Hostel",
  "Maharshi Valmiki Boys Hostel",
];

const marriedHostels = ["Married Research Scholars Hostel"];

const Hostels = () => {
  return (
    <section className="text-center py-10">
      <h2 className="text-3xl font-semibold">Student Accommodation</h2>
      <div className="w-16 h-1 bg-black mx-auto mt-1"></div>

      {/* Girls' Hostels */}
      <h3 className="text-2xl font-bold mt-6">
        GIRLS' <span className="text-red-600">HOSTELS</span>
      </h3>
      <div className="w-24 h-1 bg-gray-300 mx-auto mt-1"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 px-6">
        {girlsHostels.map((hostel, index) => (
          <div
            key={index}
            className="border shadow-md p-6 rounded-lg bg-white text-center"
          >
            <h4 className="font-semibold">{hostel}</h4>
            <button className="mt-3 bg-orange-500 text-white text-sm px-4 py-2 rounded-md hover:bg-orange-600 transition">
              VIEW NOW !!
            </button>
          </div>
        ))}
      </div>

      {/* Boys' Hostels */}
      <h3 className="text-2xl font-bold mt-10">
        BOYS' <span className="text-blue-600">HOSTELS</span>
      </h3>
      <div className="w-24 h-1 bg-gray-300 mx-auto mt-1"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 px-6">
        {boysHostels.map((hostel, index) => (
          <div
            key={index}
            className="border shadow-md p-6 rounded-lg bg-white text-center"
          >
            <h4 className="font-semibold">{hostel}</h4>
            <button className="mt-3 bg-blue-500 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-600 transition">
              VIEW NOW !!
            </button>
          </div>
        ))}
      </div>

      {/* Married Hostels */}
      <h3 className="text-2xl font-bold mt-10">
        MARRIED <span className="text-green-600">HOSTELS</span>
      </h3>
      <div className="w-24 h-1 bg-gray-300 mx-auto mt-1"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 px-6">
        {marriedHostels.map((hostel, index) => (
          <div
            key={index}
            className="border shadow-md p-6 rounded-lg bg-white text-center"
          >
            <h4 className="font-semibold">{hostel}</h4>
            <button className="mt-3 bg-green-500 text-white text-sm px-4 py-2 rounded-md hover:bg-green-600 transition">
              VIEW NOW !!
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hostels;
