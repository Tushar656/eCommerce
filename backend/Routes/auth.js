const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
router.post('/register', async(req, res)=>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
    });

    try{
        const savedUser = await newUser.save();
        res.status(201).send(savedUser);
    }catch(err){
        // res.status(400).send(err);
        res.status(400).send("Save user error!!!");
    }

})


//LOGIN
router.get('/login', async(req, res)=>{
    try{
        const getUser = await User.findOne({username: req.body.username});

        !getUser && res.status(401).send("Login error1");

        const hashPass = CryptoJS.AES.decrypt(getUser.password, process.env.PASS_SEC);
        const getPassword = hashPass.toString(CryptoJS.enc.Utf8);

        
        getPassword !== req.body.password && res.status(401).send("Login error");

        const accessToken = jwt.sign({
            id: getUser._id,
            isAdmin: getUser.isAdmin
        }, process.env.JWT_SEC, 
            {expiresIn: '3d'}
        );


        const {password, ...others} = getUser._doc;
        res.status(200).send({...others, accessToken});

    }catch(err){
        res.status(401).send("Login error!!!");
    }
})

module.exports = router;