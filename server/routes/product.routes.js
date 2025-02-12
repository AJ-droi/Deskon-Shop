import express from "express";
import * as Product from "../controllers/product-controller.js";
import { isAdmin } from "../middleware/auth.middleware.js";
import upload from "../utils/cloudinary/multer.js";

const router = express.Router();

router.post("/add-product", upload.single('imageUrl'), Product.addProduct);
router.post("/add-category", Product.createCategory);
router.post("/update-category", Product.updateCategory);
router.get("/all", Product.getAllProducts);
router.patch("/update/:id", Product.updateProduct);
router.delete("/delete/:id", Product.deleteProduct);

export default router;
