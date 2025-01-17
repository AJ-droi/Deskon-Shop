import Joi from "joi";

export const userSchema = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
})

export const loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});
