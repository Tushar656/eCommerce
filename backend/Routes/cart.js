const Cart = require("../models/Cart");
const { verifyTokenandAuth, verifyTokenandAdmin, verifyToken } = require("./verifyToken");

const router = require("express").Router();


//CREATE
router.post('/', verifyToken, async(req, res)=>{
    const newCart = new Cart(req.body);

    try{
        const savedProduct = await newCart.save();
        res.status(201).send(savedProduct);
    }catch(err){
        res.status(500).send(err)
        res.status(500).send("Create product error")
    }
})

//UPDATE
router.put("/:id", verifyTokenandAuth, async(req, res)=>{
    try{
        const updaetCart = await Cart.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true})

        res.status(200).send(updaetCart);
    }catch(err){
        res.status(400).send("Update product err!!!");
    }
})


//DELETE
router.delete("/:id", verifyTokenandAuth, async(req, res)=>{
    try{
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).send("Cart has been deleted");
    }catch(err){
        res.status(400).send("Delete error");
    }
})

//GET PRODUCT
router.get("/find/:userId", async(req, res)=>{
    try{
        const getCart = await Cart.findOne({userId: req.params.userId});
        res.status(200).send(getCart);
    }catch(err){
        res.status(400).send("Get Cart error");
    }
})

//GET ALL 
router.get("/",verifyTokenandAdmin ,async(req, res)=>{
    try{
        const carts = await Cart.find();
        res.status(200).send(carts)
    }catch(err){
        res.status(400).send("Get all Cart error");
    }
})

module.exports = router;