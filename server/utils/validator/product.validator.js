import Joi from "joi";

export const productSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.string().required(),
  stock: Joi.string().required(),
  // imageUrl: Joi.string().required(),
  category: Joi.string().required()
})

export const updateProductSchema = Joi.object({
  name: Joi.string().optional(),
  price: Joi.string().optional(),
  stock: Joi.string().optional(),
  imageUrl: Joi.string().optional(),
  category: Joi.string().optional(),
});
