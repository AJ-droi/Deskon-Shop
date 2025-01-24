import Category from "../models/category.model.js";
import Product from "../models/product.model.js";
import { categorySchema } from "../utils/validator/category.validator.js";
import { productSchema, updateProductSchema } from "../utils/validator/product.validator.js";

export const createCategory= async(req, res) => {
  try{
     const { error, value } = categorySchema.validate(req.body, {
       abortEarly: false,
     });

       if (error) {
         const errorMessages = error.details.map((detail) => detail.message);
         throw new Error(errorMessages.join(", "));
       }

       const category = await Category.create({
        ...value
       })

         return res.status(200).json({
           category
         });

  }catch(error){
    return res.status(500).json({
      message: error.message,
    })
  }
}
export const addProduct = async(req, res) => {
  try{
    const {error, value} = productSchema.validate(req.body, {abortEarly: false})

     if (error) {
       const errorMessages = error.details.map((detail) => detail.message);
       throw new Error(errorMessages.join(", "));
     }

     const {name, price, stock, imageUrl, category} = value

     const product = await Product.create({
       name,
       price,
       stock,
       imageUrl,
       category
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

export const getAllProducts = async(req, res) => {
  try{
    // console.log('rrrfdfsd', req.user)
    const products = await Product.find().populate("category");

      return res.status(200).json({
        products,
      });

  }catch(error){
    return res.status(500).json({
      message: error.message,
    });
  }
}

export const updateProduct = async(req,res) =>{
  try{
    const {id} = req.params

     const { error, value } = updateProductSchema.validate(req.body, {
       abortEarly: false,
     });

     if (error) {
       const errorMessages = error.details.map((detail) => detail.message);
       throw new Error(errorMessages.join(", "));
     }

    const updatedProduct = await Product.findByIdAndUpdate(id, {
     ...value
    }, {new : true});

      return res.status(200).json({
        updatedProduct
      });


    }catch(error){
    return res.status(500).json({
      message: error.message,
    });
  }
}