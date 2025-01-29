import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from 'multer'

// Configure Cloudinary
    cloudinary.config({
      cloud_name: "dn6ryqcjx",
      api_key: "353375837138299",
      api_secret: "nRyTArdIcYpK4tkoNdchEXYhyUI", // Click 'View API Keys' above to copy your API secret
    });

// Set up storage engine for Multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "uploads", // Specify the folder in Cloudinary
    allowed_formats: ["jpeg", "png", "jpg", 'pdf'], // Restrict file formats
  },
});

const upload = multer({storage: storage})

export default upload


