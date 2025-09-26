import { Router } from "express";
import {
  createProductController,
  getProductsController,
  deleteProductController,
} from "./product.controller.js";
import {
  createProductValidation,
  deleteProductValidation,
} from "../validators/product.validator.js";
import { validate } from "../middlewares/validate.js";

const router = Router();

router.post("/", createProductValidation, validate, createProductController);
router.get("/", getProductsController);
router.delete(
  "/:id",
  deleteProductValidation,
  validate,
  deleteProductController
);
export default router;
