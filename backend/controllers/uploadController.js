export const uploadImage = async (req, res) => {
  try {

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No image uploaded",
      });
    }

    res.status(200).json({
      success: true,
      filename: req.file.filename,
      imageUrl: `/uploads/${req.file.filename}`,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};