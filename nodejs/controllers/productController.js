const express = require("express");
const fs = require("fs");
const path = require("path");
const ProductModel = require("../models/products");
const response = require("../helpers/helpers");
exports.save = [
 async (req, res) => {

   try{
    const product = new ProductModel({
        title: req.body.title,
        price: req.body.price,
        image:req.body.image,
        InStock: req.body.InStock,
      });

    const result=await   product.save()
    return response.success(res,"success")
   } catch(err){
    return response.fail(err)
   }
  },
];

exports.getAllProducts=[async(req,res)=>{
  //  products=new ProductModel(); 
 const data= await ProductModel.find({}, { __v: 0});

 return response.success(res,data)

}]