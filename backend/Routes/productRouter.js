import express from 'express';
import { mongo } from 'mongoose';
import { delectProduct, getProduct, saveProduct } from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.get("/" , getProduct);
productRouter.post("/" , saveProduct);
productRouter.delete("/" , delectProduct);

export default productRouter;