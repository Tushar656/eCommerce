const Order = require("../models/Order");
const { verifyTokenandAuth, verifyTokenandAdmin, verifyToken } = require("./verifyToken");

const router = require("express").Router();


//CREATE
router.post('/', verifyToken, async(req, res)=>{
    const newOrder = new Order(req.body);

    try{
        const savedProduct = await newOrder.save();
        res.status(201).send(savedProduct);
    }catch(err){
        res.status(500).send(err)
        res.status(500).send("Create product error")
    }
})

//UPDATE
router.put("/:id", verifyTokenandAdmin, async(req, res)=>{
    try{
        const updaetOrder = await Order.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true})

        res.status(200).send(updaetOrder);
    }catch(err){
        res.status(400).send("Update product err!!!");
    }
})


//DELETE
router.delete("/:id", verifyTokenandAdmin, async(req, res)=>{
    try{
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).send("Order has been deleted");
    }catch(err){
        res.status(400).send("Delete error");
    }
})

//GET PRODUCT
router.get("/find/:userId", async(req, res)=>{
    try{
        const getOrder = await Order.find({userId: req.params.userId});
        res.status(200).send(getOrder);
    }catch(err){
        res.status(400).send("Get Order error");
    }
})

//GET ALL 
router.get("/",verifyTokenandAdmin ,async(req, res)=>{
    try{
        const orders = await Order.find();
        res.status(200).send(orders)
    }catch(err){
        res.status(400).send("Get all Order error");
    }
})

module.exports = router;