import React from "react";
import { motion } from "framer-motion";
import GBUImage from "../assets/GBU.jpg";

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

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const Hostels = () => {
  return (
    <section className="py-14 bg-white from-gray-50 to-gray-200 mb-0">
      {/* Heading */}
      <motion.h2
        className="text-4xl font-extrabold text-center text-gray-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        Student Accommodation
      </motion.h2>
      <div className="w-20 h-1 bg-black mx-auto mt-2"></div>

      {/* Hostel Sections */}
      {[
        { title: "GIRLS' HOSTELS", color: "red-600", data: girlsHostels },
        { title: "BOYS' HOSTELS", color: "blue-600", data: boysHostels },
        { title: "MARRIED HOSTELS", color: "green-600", data: marriedHostels },
      ].map((section, index) => (
        <motion.div
          key={index}
          className="mt-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          {/* Section Title */}
          <h3 className="text-3xl font-bold">
            {section.title.split(" ")[0]}{" "}
            <span className={`text-${section.color}`}>{section.title.split(" ")[1]}</span>
          </h3>
          <div className="w-28 h-1 bg-gray-400 mx-auto mt-1"></div>

          {/* Hostel Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 px-6">
            {section.data.map((hostel, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 text-center hover:shadow-xl transition duration-300 border border-gray-200"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-gray-800">{hostel}</h4>
                <button
                  className={`mt-3 px-4 py-2 text-sm font-medium text-white rounded-full shadow-md hover:bg-opacity-90 transition ${
                    section.color === "red-600"
                      ? "bg-red-600 hover:bg-red-700"
                      : section.color === "blue-600"
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-green-600 hover:bg-green-700"
                  }`}
                >
                  View Details
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}

      {/* Hostel Image at the End */}
      <motion.div
        className="relative mt-6 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        {/* Image */}
        <img
          src={GBUImage}
          alt="Hostel View"
          className="w-full h-[500px] object-cover grayscale transition duration-500 hover:grayscale-0"
        />

        {/* Gradient Overlay (Blending Sky into Background) */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-transparent h-1/4 pointer-events-none"></div>
      </motion.div>
    </section>
  );
};

export default Hostels;
