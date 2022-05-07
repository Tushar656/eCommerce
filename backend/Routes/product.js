const Product = require("../models/Product");
const CryptoJS = require("crypto-js");
const { verifyTokenandAuth, verifyTokenandAdmin } = require("./verifyToken");

const router = require("express").Router();


//CREATE
router.post('/', verifyTokenandAdmin, async(req, res)=>{
    const newProduct = new Product(req.body);

    try{
        const savedProduct = await newProduct.save();
        res.status(201).send(savedProduct);
    }catch(err){
        res.status(500).send(err);
        res.status(500).send("Create product error");
    }
})

//UPDATE
router.put("/:id", verifyTokenandAdmin, async(req, res)=>{
    try{
        const updaetProduct = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true})

        res.status(200).send(updaetProduct);
    }catch(err){
        res.status(400).send("Update product err!!!");
    }
})


//DELETE
router.delete("/:id", verifyTokenandAdmin, async(req, res)=>{
    try{
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).send("Product has been deleted");
    }catch(err){
        res.status(400).send("Delete error");
    }
})

//GET PRODUCT
router.get("/find/:id", async(req, res)=>{
    try{
        const getProduct = await Product.findById(req.params.id);
        res.status(200).send(getProduct);
    }catch(err){
        res.status(400).send("Get product error");
    }
})

//GET ALL USERS
router.get("/", async(req, res)=>{
    const newQuery = req.query.new;
    const categoryQuery = req.query.category;
    try{
        let getProducts;

        if(newQuery){
            getProducts = await Product.find().sort({createdAt: -1}).limit(5);
        }else if(categoryQuery){
            getProducts = await Product.find({category:{
                $in:[categoryQuery]
            }})
        }else{
            getProducts = await Product.find();
        }

        res.status(200).send(getProducts);
    }catch(err){
        res.status(400).send("Get all product error");
    }
})

module.exports = router;