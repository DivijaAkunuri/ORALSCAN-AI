import express from "express";
import upload from "../middleware/multer.js";
import { uploadImage } from "../controllers/uploadController.js";

const router = express.Router();

// ⚠️ MUST MATCH FRONTEND ENDPOINT
router.post(
  "/image",
  upload.single("image"),
  uploadImage
);

export default router;