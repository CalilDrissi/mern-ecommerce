import express from "express";
import asyncHandler from "express-async-handler";
import Product from '../models/productModel.js'


const router = express.Router();

//* @desc fetch all products
//* @route GET api/products
//* @access Public
Router.get("/", asyncHandler( async (req, res) => {
    const products =  await Product.find({})

    res.json(products);
  }));
  


//* @desc fetch a single product
//* @route GET api/products/:id
//* @access Public
Router.get("/:id",asyncHandler(async (req, res) => {
    const products =  await Product.findById({req.params.id})
    if(product) {
        res.json(product);
    }else{
        res.status(404).json({message: 'product not found'})
    }
  }));


  export default router;