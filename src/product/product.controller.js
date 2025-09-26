import {
    createProduct,
    findAllProducts,
    deleteProduct,
} from "./product.service.js";


export const createProductController = async (req, res) => {
    try {
        const productData = req.body;
        const newProduct = await createProduct(productData);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getProductsController = async (req, res) => {
    const { page = 1, pageSize = 10 } = req.query;
    try {
        const products = await findAllProducts(page, pageSize);
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteProductController = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await deleteProduct(id);
        res.json({ message: "Product deleted", product: deletedProduct });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
