import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatBot from "react-chatbotify";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const faqOptions = [
    "Admission Process", 
    "Eligibility Criteria", 
    "Fee Structure", 
    "Important Dates", 
    "Hostel Facilities"
];

const flow = {
    start: {
        message: "Hello! Welcome to GBU Admissions FAQ Chatbot. How can I help you today?",
        transition: { duration: 1000 },
        path: "show_options"
    },
    show_options: {
        message: "Please select one of the topics below:",
        options: faqOptions,
        path: "process_options"
    },
    process_options: {
        transition: { duration: 0 },
        chatDisabled: true,
        path: async (params) => {
            let response = "";
            switch (params.userInput) {
                case "Admission Process":
                    response = "The admission process involves filling an online form, appearing for an entrance exam, and going through counseling. For more details, visit our admission page.";
                    break;
                case "Eligibility Criteria":
                    response = "Eligibility varies by program. For undergraduate courses, a minimum of 50% in 12th grade is required. For postgraduate programs, a relevant bachelor's degree is needed.";
                    break;
                case "Fee Structure":
                    response = "The fee structure differs based on the program. Undergraduate fees start from INR 50,000 per year. Please visit our website for a detailed breakdown.";
                    break;
                case "Important Dates":
                    response = "The last date to apply is June 30, 2024. Entrance exams are scheduled for July 10, 2024. Check the official site for the complete schedule.";
                    break;
                case "Hostel Facilities":
                    response = "We provide separate hostels for boys and girls with WiFi, mess, and security. Hostel fees start from INR 30,000 per year.";
                    break;
                default:
                    return "unknown_input";
            }
            await params.injectMessage(response);
            return "repeat";
        },
    },
    repeat: {
        transition: { duration: 3000 },
        path: "prompt_again"
    },
    prompt_again: {
        message: "Do you need help with anything else?",
        options: faqOptions,
        path: "process_options"
    },
    unknown_input: {
        message: "Sorry, I do not understand your message. Please select one of the given options.",
        options: faqOptions,
        path: "process_options"
    }
};

function App() {
    return (
        <>
            <ChatBot 
    settings={{
        general: { floating: true },
        styles: { zIndex: 9999 },
        footer: false,
        header: { title: "GBU Assistant" } 
    }} 
    flow={flow} 
/>


            
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
