const express = require("express");
const router = express.Router();
const multer = require("multer");
const cloudinary = require("../config/cloudinaryConfig");

// Configure multer to temporarily store uploads in the "uploads/" folder
const upload = multer({ dest: "uploads/" });

/**
 * POST /api/upload
 * Uploads a single image to Cloudinary and returns its URL and public_id.
 */
router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    // Upload the image from local storage to the "exercises" folder in Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "exercises",
    });

    // Return the secure URL and Cloudinary public_id to the client
    res.json({
      url: result.secure_url,
      public_id: result.public_id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Image upload error" });
  }
});

module.exports = router;
