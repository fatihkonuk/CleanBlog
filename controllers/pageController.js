const Post = require('../models/Post');

const getAboutPage = (req,res) => {
    res.render('about');
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
    getAddPage,
    getEditPage,
}