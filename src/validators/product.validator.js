import { body, param } from "express-validator";
import Product from "../product/product.schema.js";

export const idExists = async (id) => {
  const product = await Product.findById(id);
  if (!product) {
    throw new Error(`The product does not exist`);
  }
  return true;
};

export const createProductValidation = [
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .isString()
    .withMessage("Name must be a string")
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 characters long"),

  body("description")
    .optional()
    .isString()
    .withMessage("Description must be a string"),

  body("price")
    .notEmpty()
    .withMessage("Price is required")
    .isFloat({ gt: 0 })
    .withMessage("Price must be a number greater than 0"),

  body("category")
    .notEmpty()
    .withMessage("Category is required")
    .isString()
    .withMessage("Category must be a string"),

  body("status")
    .optional()
    .isBoolean()
    .withMessage("Status must be true or false"),
];

export const deleteProductValidation = [
  param("id").isMongoId().withMessage("Invalid ID format"),
  param("id").custom(idExists),
];
