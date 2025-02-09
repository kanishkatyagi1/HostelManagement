import React from "react";
import yogijiImage from "../assets/yogi-ji.jpg";
import vcImage from "../assets/vc.jpg";

const HostelInfo = () => {
  return (
    <div className="bg-[#fde8d9] px-10 py-10 flex flex-col gap-16 mt-10 md:mt-16">
      {/* About Hostels Section */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left Section - Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold uppercase">
            About <span className="text-red-600">Hostels</span>
          </h2>
          <div className="h-1 w-28 bg-gray-300 mt-2 mb-4">
            <div className="h-1 w-14 bg-red-500"></div>
          </div>
          <p className="text-gray-800 text-lg leading-relaxed">
            Gautam Buddha University, located in Greater Noida, India, stands as a beacon of higher education, 
            known for its academic excellence and comfortable hostels. The university provides a supportive 
            living environment with modern amenities for both male and female students.
          </p>
          <button className="mt-5 px-6 py-3 border-2 border-black text-black font-semibold uppercase hover:bg-black hover:text-white transition-all">
            Read More
          </button>
        </div>

        {/* Right Section - Video */}
        <div className="w-full md:w-1/2 flex justify-center">
          <iframe
            width="500"
            height="300"
            src="https://www.youtube.com/embed/INSERT_VIDEO_ID_HERE"
            title="GBU Campus View"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>

      {/* Chancellor & Vice-Chancellor Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Chancellor Section */}
        <div className="flex flex-col items-center text-center md:text-left md:flex-row gap-6 bg-white p-6 rounded-lg shadow-md">
          <img
            src={yogijiImage}
            alt="Chancellor"
            className="w-40 h-40 md:w-48 md:h-48 rounded-lg shadow-lg object-cover"
          />
          <div>
            <h2 className="text-3xl font-bold uppercase">
              Chancellor's <span className="text-red-600">Profile</span>
            </h2>
            <div className="h-1 w-28 bg-gray-300 mt-2 mb-4">
              <div className="h-1 w-14 bg-red-500"></div>
            </div>
            <p className="text-gray-800 text-lg">
              <strong>Sh. Yogi Adityanath</strong> is an Indian Hindu monk and politician from the 
              Bharatiya Janata Party, serving as the 21st and current Chief Minister of Uttar Pradesh since 2017...
            </p>
            <button className="mt-4 px-6 py-3 border-2 border-black text-black font-semibold uppercase hover:bg-black hover:text-white transition-all">
              Read More
            </button>
          </div>
        </div>

        {/* Vice-Chancellor Section */}
        <div className="flex flex-col items-center text-center md:text-left md:flex-row gap-6 bg-white p-6 rounded-lg shadow-md">
          <img
            src={vcImage}
            alt="Vice-Chancellor"
            className="w-40 h-40 md:w-48 md:h-48 rounded-lg shadow-lg object-cover"
          />
          <div>
            <h2 className="text-3xl font-bold uppercase">
              Vice-Chancellor's <span className="text-red-600">Profile</span>
            </h2>
            <div className="h-1 w-28 bg-gray-300 mt-2 mb-4">
              <div className="h-1 w-14 bg-red-500"></div>
            </div>
            <p className="text-gray-800 text-lg">
              <strong>Prof. R. K. Sinha</strong> is an expert in Fiber Optics and Optical Communication, 
              having served as Director of CSIR-Central Scientific Instruments Organisation...
            </p>
            <button className="mt-4 px-6 py-3 border-2 border-black text-black font-semibold uppercase hover:bg-black hover:text-white transition-all">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostelInfo;
