const express =require("express")
const routes=express.Router()
const productController=require("../controllers/productController")

routes.post("/productsave",productController.save)
routes.get("/getAllProducts",productController.getAllProducts)

module.exports=routes