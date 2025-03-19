const Todo = require("../models/todo");

// Define route handler
exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;

        // Find and update the todo
        const updatedTodo = await Todo.findByIdAndUpdate(
            id,  // Pass ID directly
            { title, description, updatedAt: Date.now() }, 
            { new: true } // Ensure it returns the updated document
        );

        // Check if todo exists
        if (!updatedTodo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found",
            });
        }

        res.status(200).json({
            success: true,
            data: updatedTodo,
            message: "Updated successfully",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Internal Server Error",
        });
    }
};
