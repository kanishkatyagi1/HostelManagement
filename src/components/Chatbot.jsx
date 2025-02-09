import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = message;
    setChatHistory([...chatHistory, { sender: "user", message: userMessage }]);

    try {
      // Send the message to your backend API
      const response = await axios.post("http://localhost:5000/chat", { message });

      const botMessage = response.data.reply;
      setChatHistory([...chatHistory, { sender: "user", message: userMessage }, { sender: "bot", message: botMessage }]);
    } catch (error) {
      console.error("Error sending message:", error);
      setChatHistory([...chatHistory, { sender: "bot", message: "Something went wrong. Please try again!" }]);
    }

    // Clear the input field
    setMessage("");
  };

  return (
    <div>
      <div>
        <h2>Chat with us!</h2>
        <div>
          {chatHistory.map((chat, index) => (
            <div key={index} style={{ textAlign: chat.sender === "user" ? "right" : "left" }}>
              <p><strong>{chat.sender === "user" ? "You" : "Bot"}:</strong> {chat.message}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <input
          type="text"
          value={message}
          onChange={handleMessageChange}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
