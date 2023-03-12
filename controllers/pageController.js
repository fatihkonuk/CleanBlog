const Post = require('../models/Post');

const getAboutPage = (req,res) => {
    res.render('about');
}
const getPostsPage = async (req,res) => {
    const posts = await Post.find({}).sort('-dateCreated');
    res.render('posts', {
        posts
    });
}
const getAddPage = (req,res) => {
    res.render('add');
}
const getEditPage = async (req,res) => {
    const post = await Post.findById(req.params.id);
    res.render('edit', {
       post,
    });
}

module.exports = {
    getAboutPage,
    getPostsPage,
    getAddPage,
    getEditPage,
}