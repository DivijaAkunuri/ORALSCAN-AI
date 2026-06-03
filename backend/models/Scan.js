import mongoose from "mongoose";

const scanSchema = new mongoose.Schema(
  {
    patientName: String,
    email: String,
    imageUrl: String,
    prediction: String,
    confidence: Number,
  },
  { timestamps: true }
);

export default mongoose.model("Scan", scanSchema);