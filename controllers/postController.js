const Post = require('../models/Post');

const getAllPosts = async (req,res) => {
    const posts = await Post.find({}).sort('-dateCreated').limit(3);
    res.render('index', {
        posts
    });
}
const getPost = async (req,res) => {
    const post = await Post.findById(req.params.id);
    res.render('post', {
       post
    });
}
const createPost = async (req,res) => {
    await Post.create(req.body);
    res.redirect('/');
}
const updatePost = async (req,res) => {
    const post = await Post.findById(req.params.id);
    post.title = req.body.title;
    post.detail = req.body.detail;
    post.save();
    res.redirect(`/posts/${post._id}`);
}
const deletePost = async (req,res) => {
    await Post.findByIdAndDelete(req.params.id);
    res.redirect('/');
}

module.exports = {
    getAllPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
}