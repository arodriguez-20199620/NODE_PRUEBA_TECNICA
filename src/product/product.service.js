import Product from "./product.schema.js";

export const createProduct = async (productData) => {
  const newProduct = new Product(productData);
  await newProduct.save();
  return newProduct;
};

export const findAllProducts = async (page = 1, pageSize = 10) => {
  const skip = (page - 1) * pageSize;

  const [products, totalProducts] = await Promise.all([
    Product.find({ status: true }).skip(Number(skip)).limit(Number(pageSize)),
    Product.countDocuments({ status: true }),
  ]);
  const totalPages = Math.ceil(totalProducts / pageSize);
  return {
    products,
    totalProducts,
    pageSize,
    totalPages,
    currentPage: Number(page),
  };
};

export const deleteProduct = async (productId) => {
  const deletedProduct = await Product.findOneAndUpdate(
    { _id: productId, status: true },
    { status: false },
    { new: true }
  );

  if (!deletedProduct) {
    throw new Error("Product not found or already deleted");
  }

  return deletedProduct;
};
