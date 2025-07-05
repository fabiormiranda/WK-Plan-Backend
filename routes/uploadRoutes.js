const express = require("express");
const router = express.Router();
const multer = require("multer");
const cloudinary = require("../config/cloudinaryConfig");

const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "exercises",
    });

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
