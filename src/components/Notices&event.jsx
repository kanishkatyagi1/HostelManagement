import { useEffect, useRef, useState } from "react";
import { CalendarDays, Newspaper } from "lucide-react";

const NoticesEvents = () => {
  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Notices Section */}
      <div className="border-2 border-blue-500 rounded-lg shadow-lg p-6 overflow-hidden">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
          <Newspaper className="w-6 h-6 text-blue-600" />
          Latest Notices
        </h2>
        <ScrollingList items={noticesData} />
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          View All
        </button>
      </div>

      {/* Events Section */}
      <div className="border-2 border-yellow-500 rounded-lg shadow-lg p-6 overflow-hidden">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-yellow-600">
          <CalendarDays className="w-6 h-6 text-yellow-600" />
          Latest Events
        </h2>
        <ScrollingList items={eventsData} />
        <button className="mt-4 w-full bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700">
          View All
        </button>
      </div>
    </div>
  );
};

// Component for Smooth Auto-Scrolling
const ScrollingList = ({ items }) => {
  const listRef = useRef(null);

  useEffect(() => {
    const list = listRef.current;
    let scrollAmount = 0;

    const scrollUp = () => {
      if (list) {
        list.scrollTop += 1; // Smooth scroll

        // Loop back when reaching the end
        if (list.scrollTop >= list.scrollHeight - list.clientHeight) {
          list.scrollTop = 0;
        }
      }
    };

    const interval = setInterval(scrollUp, 50); // Adjust speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={listRef}
      className="mt-4 space-y-4 max-h-60 overflow-hidden hover:overflow-y-auto scrollbar-hide [&::-webkit-scrollbar]:hidden"
    >
      {items.concat(items).map((item, index) => (
        <NoticeEventItem key={index} date={item.date} text={item.text} />
      ))}
    </div>
  );
};

// Reusable Item Component with Blinking "NEW" Badge
const NoticeEventItem = ({ date, text }) => {
  const isNew = checkIfNew(date);

  return (
    <div className="flex items-start gap-3 border-b pb-2" >
      <CalendarDays className="w-5 h-5 text-gray-500" />
      <div>
        <p className="font-semibold text-gray-800">{date}</p>
        <p className="text-gray-600">{text}</p>
      </div>
      
      {isNew && (
        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
        NEW
      </span>
      )}
    </div>
  );
};

// Function to Check if Date is within the Past 30 Days
const checkIfNew = (dateString) => {
  const today = new Date();
  const eventDate = new Date(dateString.split("-").reverse().join("-")); // Convert DD-MM-YYYY to YYYY-MM-DD
  const diffTime = Math.abs(today - eventDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert milliseconds to days

  return diffDays <= 30; // 1 month
};

// Notices & Events Data
const noticesData = [
  { date: "05-02-2025", text: "Deadline Extension of Hostel Exemption Form" },
  { date: "28-01-2025", text: "Hostel Exemption for Curriculum Based Dissertation" },
  { date: "23-01-2025", text: "Republic Day Program - 2025" },
];

const eventsData = [
  { date: "06-08-2024", text: "Orientation & Induction Programme" },
  { date: "23-05-2024", text: "Buddha Purnima Celebration" },
  { date: "18-01-2025", text: "Lohri Celebration in Girls Hostel" },
  { date: "24-12-2023", text: "GBU Convocation 2023" },
];

export default NoticesEvents;
