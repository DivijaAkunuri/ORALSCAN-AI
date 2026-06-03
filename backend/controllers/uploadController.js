import Scan from "../models/Scan.js";
import axios from "axios";
import FormData from "form-data";
import fs from "fs";

export const uploadImage = async (req, res) => {
  try {
    console.log("📦 FILE RECEIVED:", req.file);

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No image uploaded",
      });
    }

    const formData = new FormData();
    formData.append(
      "image",
      fs.createReadStream(req.file.path)
    );

    console.log("🚀 Sending to AI...");

    const aiResponse = await axios.post(
      "http://localhost:5001/predict",
      formData,
      {
        headers: formData.getHeaders(),
      }
    );

    console.log("🤖 AI RESPONSE:", aiResponse.data);

    const { prediction, confidence } = aiResponse.data;

    const scan = await Scan.create({
      patientName: req.body.patientName || "Unknown",
      email: req.body.email || "unknown@gmail.com",
      imageUrl: `/uploads/${req.file.filename}`,
      prediction,
      confidence,
    });

    return res.status(201).json({
      success: true,
      scan,
    });

  } catch (error) {
    console.log("❌ ERROR:", error.message);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};