import Joi from "joi";

export const productSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.string().required(),
  stock: Joi.string().required(),
  imageUrl: Joi.string().required()
})
