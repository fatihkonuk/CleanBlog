const express = require('express');
const postController = require('../controllers/postController');
const route = express.Router();

route.get('/', postController.getAllPosts);
route.get('/posts/:id', postController.getPost);
route.post('/post', postController.createPost);
route.put('/posts/:id', postController.updatePost);
route.delete('/posts/:id', postController.deletePost);

module.exports = route;