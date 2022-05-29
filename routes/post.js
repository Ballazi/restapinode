const express = require("express");
const router = express.Router();
const postSchema = require("../models/postSchema");

router.get("/", async (req, res) => {
    try {
        const output = await postSchema.find();
        res.status(200).json({ "message": "success", "data": output });
    } catch (error) {
        res.status(500).json({ "message": "failed...", "data": error });
    }
})


router.get("/:postId", async (req, res) => {
    try {
        const output = await postSchema.findById(req.params.postId);
        res.status(200).json({ "message": "success", "data": output });
    } catch (error) {
        res.status(500).json({ "message": "failed...", "data": error });
    }
})

router.post("/", async (req, res) => {
    const post = new postSchema({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const output = await post.save();
        res.status(200).json({ "message": "success", "data": output });
    } 
    catch (error) {
        res.status(500).json({ "message": "failed...", "data": error });
    }
});


router.patch("/:postId", async (req, res) => {
    try {
        const output = await postSchema.updateOne({_id : req.params.postId},{$set : {title:req.body.title}});
        res.status(200).json({ "message": "success", "data": output });
    } catch (error) {
        res.status(500).json({ "message": "failed...", "data": error });
    }
})



router.delete("/:postId", async (req, res) => {
    try {
        const output = await postSchema.remove({_id : req.params.postId});
        res.status(200).json({ "message": "success", "data": output });
    } catch (error) {
        res.status(500).json({ "message": "failed...", "data": error });
    }
})


module.exports = router