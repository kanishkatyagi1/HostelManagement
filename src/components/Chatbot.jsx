import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ sender: "bot", text: "Hello! How can I help you?" }]);
  const [input, setInput] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");
    
    // Simulating bot response (You can replace this with an API call)
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: "I'm just a bot! Ask me anything about the hostel." }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Icon */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chatbox */}
      {isOpen && (
        <div className="w-80 bg-white shadow-lg rounded-lg border border-gray-300">
          <div className="flex items-center justify-between bg-blue-500 text-white p-3 rounded-t-lg">
            <span>Hostel Chatbot</span>
            <button onClick={toggleChat}>
              <X size={20} />
            </button>
          </div>
          <div className="h-64 p-3 overflow-y-auto space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg max-w-[75%] ${
                  msg.sender === "user" ? "ml-auto bg-blue-200" : "bg-gray-200"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="p-3 border-t flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-2 border rounded-l-lg focus:outline-none"
              placeholder="Type a message..."
            />
            <button
              onClick={sendMessage}
              className="bg-blue-500 text-white px-4 py-2 rounded-r-lg"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
