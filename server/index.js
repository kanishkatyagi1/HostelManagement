import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const HF_API_URL = "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct";
const HF_API_KEY = process.env.HUGGINGFACE_API_KEY; 

app.post("/chat", async (req, res) => {
    try {
      const { message } = req.body;
      console.log("Received message:", message); // Log the received message
  
      const response = await fetch(HF_API_URL, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${HF_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ inputs: message })
      });
  
      const data = await response.json();
      console.log("Hugging Face API Response:", data);  // Log the raw API response
  
      // Check if the response is in the expected format and reply
      if (data && data[0] && data[0].generated_text) {
        res.json({ reply: data[0].generated_text });
      } else {
        res.json({ reply: "I couldn't understand that." });
      }
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Something went wrong!" });
    }
  });
  