const express = require("express");
const app = express();

//load config 
require("dotenv").config();
const PORT = process.env.PORT||4000;


//middleware to parse json request
app.use(express.json());


// import routes for todo api

const todoRoutes = require("./routes/routes");

//mount todo APIs 
app.use("/api/v1", todoRoutes);

// start server 

app.listen(PORT, ()=>{
    console.log(`Server Started at ${PORT}`);
})

//connect DB

const dbConnect = require("./config/database");
dbConnect();

// default route 

app.get("/", (req,res)=>{
    res.send(`<h1>This is HOMEPAGE</h1>`);
})