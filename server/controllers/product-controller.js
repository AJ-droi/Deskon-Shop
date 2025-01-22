import Product from "../models/product.model.js";
import { productSchema } from "../utils/validator/product.validator.js";

export const addProduct = async(req, res) => {
  try{
    const {error, value} = productSchema.validate(req.body, {abortEarly: false})

     if (error) {
       const errorMessages = error.details.map((detail) => detail.message);
       throw new Error(errorMessages.join(", "));
     }

     const {name, price, stock, imageUrl} = value

     const product = await Product.create({
       name,
       price,
       stock,
       imageUrl,
     });

     return res.status(200).json({
      product
     })

  }catch(error){
    return res.status(500).json({
      message: error.message,
    });
  }
}