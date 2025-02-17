import mongoose from "mongoose";

// Define the User Schema
const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique:true,
    },
    description: {
      type: String,
      required: false,
      trim: true,
    },
    imageUrl: {
      type: String,
      required: false,
      trim: true,
    }
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

const Category = mongoose.model("Category", categorySchema);

export default Category;
