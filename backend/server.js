import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";

dotenv.config();

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Static Upload Folder
app.use(
  "/uploads",
  express.static("uploads")
);

// Routes
app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/upload",
  uploadRoutes
);

// Test Route
app.get("/", (req, res) => {
  res.send("OralScan AI Backend Running");
});

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});