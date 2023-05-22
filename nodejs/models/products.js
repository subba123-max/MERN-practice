const mongoose=require("mongoose")

const product=new mongoose.Schema({
    title:{type:String},
    price:{type:Number},
    image:{type:String},
    InStock:{type:String,default:"Available"}

},{timestamps:true})

module.exports=mongoose.model("product",product)