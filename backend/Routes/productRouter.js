import express from 'express';
import { mongo } from 'mongoose';
import { delectProduct, getProduct, getProductById, saveProduct, updateProduct } from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.get("/" , getProduct);
productRouter.post("/" , saveProduct);
productRouter.delete("/:productId" , delectProduct);
productRouter.put("/:productId" , updateProduct);
productRouter.get("/:productId" , getProductById);

export default productRouter;