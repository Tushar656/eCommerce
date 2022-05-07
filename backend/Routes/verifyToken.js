const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) =>{
    const authheader = req.headers.token;

    if(authheader){
        const token = authheader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SEC, (err, user)=>{
            if(err) res.status(403).send("Invalid token");

            req.user = user;
            next();
        })
    }else{
        return res.status(403).send("You are not authrized");
    }
}

const verifyTokenandAuth = (req, res, next) =>{
    verifyToken(req, res, ()=>{
        if(req.user.id === req.params.id  ||  req.user.isAdmin){
            next();
        }else{
            res.status(403).send("Not allowed");
        }
    })
}

const verifyTokenandAdmin = (req, res, next) =>{
    verifyToken(req, res, ()=>{
        if(req.user.isAdmin){
            next();
        }else{
            res.status(403).send("Not allowed");
        }
    })
}

module.exports = {verifyToken, verifyTokenandAuth, verifyTokenandAdmin};