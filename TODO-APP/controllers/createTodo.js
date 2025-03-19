//import th model

const Todo = require("../models/todo");

//define route handler

exports.createTodo = async(req,res)=>{
    try{
        //extract title and description
        const{title,description} = req.body;
        
        //create todo obj, insert into db
        const response = await Todo.create({title,description});
        //send a json response with success flag
        res.status(200).json({
            success:true,
            data: response,
            message: 'Entry created succesfully',
        }
    );
    }
    catch(error){
        console.error(error);
        console.log(error);
        res.status(500)
        .json({
            success:false,
            data: "Internal server error",
            message: error.message,
        })
    }
}