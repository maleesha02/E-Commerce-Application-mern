import Product from "../models/product.js";
import { isAdmin } from "./userController.js";

export async function getProduct(req,res){
    
    try{
        if(isAdmin(req)){
            const products = await Product.find();
        res.json(products);
        }else{
            const products = await Product.find({isAvailable : true});
            res.json(products);
        }
        
    }catch(err){
        res.json({
            message : "Failed to retrieve products",
            error : err
        })
    }
}

export function saveProduct(req,res){

    if(!isAdmin(req)){
        res.status(403).json({
            message : "You are not authorized to add product"
        })
        return
    }

    const product = new Product(
        req.body
    );

    product.save().then(()=>{
        res.json({message : 'Product added Successfully'});
    }).catch(()=>{
        res.json({message : 'Failed to add Product'});
    })
}

export async function delectProduct(req,res){
    if(!isAdmin(req)){
        res.status(403).json({
            message : "You are not authorized to delete product"
        })
        return
    }
    try{
        await Product.deleteOne({productID : req.params.productId});
        res.json({
            message : "Product deleted successfully"
        });
    }catch(err){
        res.status(500).json({
            message : "Failed to delete product",
            error : err
        });
    }
} 