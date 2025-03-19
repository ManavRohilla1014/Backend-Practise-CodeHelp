//import th model

const Todo = require("../models/todo");

//define route handler

exports.getTodo = async(req,res)=>{
    try{
        //fetch all todo items
        const todos = await Todo.find({});

        //response 
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Entire data fetched",
        })
    }
    catch(error){
        console.error(error);
        res.status(500)
        .json({
            success:false,
            erorr: error.message,
            message: error.message,
        })
    }
}


exports.getTodoById = async(req,res)=>{
    try{
        // extract todo items basis on id

        const id = req.params.id;
        const todo = await Todo.findById({_id: id})


        //data for given id not found
        if(!todo){
            return res.status(404).json({
                success: false,
                message: "no data found",
            })
        }
        res.status(200).json({
            success: true,
            data: todo,
            message: `Todo ${id} found`
        })
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