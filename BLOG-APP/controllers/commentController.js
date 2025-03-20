const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

exports.createComment = async (req,res)=>{
    try{
        //fetch data from req body
        const {post, user, body} = req.body;
        // create comment object
        const comment = new Comment({
            post,user,body
        });

        // save the new comment into database
        const savedComment = await comment.save();

        //find the post by ID, add the new comment to comments array

        const updatedPost = await Post.findByIdAndUpdate(post,{$push: {comments: savedComment._id}}, {new: true})
        .populate("comments") //populate comments arrays with comments docs
        .exec();

        res.json({
            posts: updatedPost,
        });

    }
    catch(err){
        return res.status(500).json({
            err: "Error while created comment",
        });
    }
}
