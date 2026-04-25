import express from 'express';
import { mongo } from 'mongoose';
import { getProduct, saveProduct } from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.get("/" , getProduct);
productRouter.post("/" , saveProduct);

export default productRouter;