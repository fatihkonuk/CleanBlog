const express = require('express');
const mongoose = require('mongoose');
const Post = require('./models/Post');
const app = express();

//Database Connection
mongoose.connect('mongodb://127.0.0.1:27017/cleanblog-db', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});

//Template Engine
app.set('view engine', 'ejs');

//MiddleWares 
app.use(express.static('public'));
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

app.get('/', async (req,res) => {
   const posts = await Post.find({});
   res.render('index', {
      posts
   });
});
app.get('/about', (req,res) => {
   res.render('about');
});
app.get('/add', (req,res) => {
   res.render('add');
});
app.post('/post', async (req,res) => {
   await Post.create(req.body);
   res.redirect('/');
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});