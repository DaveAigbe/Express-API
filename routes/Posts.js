const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Get all posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find()
        res.json(posts)

    } catch (err) {
        res.json({message: err.message});
    }
});

// Get specific post
router.get('/:postId', async (req, res) =>{

    try{
        const post = await Post.findById(req.params.postId)
        res.json(post)
    }catch (err) {
        res.json({message: err.message});
    }
})

// Submit a new post
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({message: err.message});
    }

});

//Replace entire post
router.put('/:postId', async (req, res) => {
    try {
        const replacedPost = await Post.findByIdAndUpdate(req.params.postId, req.body, {new: true});
    } catch (e) {
        res.json({message: e.message});
    }

})




// Replace part of post
router.patch('/:postId', async  (req, res) => {
    try {
        const patchedPost = await Post.findByIdAndUpdate(req.params.postId, {title: req.body.title, description: req.body.description});
        res.json(patchedPost)
    } catch (e) {
        res.json({message: e.message});
    }

})

// Delete
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.findByIdAndDelete(req.params.postId);
        res.json(removedPost);
    } catch (err) {
        res.json({message: err.message});
    }

})


module.exports = router;
