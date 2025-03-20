const express= require("express");

const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use(express.json());

const blog = require("./routes/blog");

app.use("/api/v1", blog);

const connectWithDB = require("./configs/database");
connectWithDB();


app.listen(3000, ()=>{
    console.log(`App running at ${PORT}`);
})



app.get("/", (req,res)=>{
    res.send("<h1>This is Blog App</h1>")
} )