const Todo = require("../models/todo");

// Define route handler
exports.deleteTodo = async (req, res) => {
    try {
        const {id}  = req.params;

        await Todo.findByIdAndDelete(id);

        res.json({
            success: true,
            message: "Todo Delete",
        })

        res.json
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Internal Server Error",
        });
    }
};
