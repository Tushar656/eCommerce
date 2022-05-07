const express = require('express');

const app = express();
app.use(express.json());

const dotenv = require("dotenv");
dotenv.config();

// app.use("JSON")

const authRoute = require("./Routes/auth");
const userRoute = require("./Routes/User");
const productRoute = require("./Routes/product");

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL)
.then(console.log("Connection successfull"))
.catch((err) => console.log("Not connected to mongodb"));


app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/product', productRoute);

app.listen(process.env.PORT || 8000, ()=>{
    console.log("Server is run at port 8000");
})