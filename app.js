const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const postRoutes = require('./routes/postRoutes');
const pageRoutes = require('./routes/pageRoutes');

const app = express();

//* Database Connection
mongoose.connect('mongodb://127.0.0.1:27017/cleanblog-db', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});

//* Template Engine
app.set('view engine', 'ejs');

//* MiddleWares 
app.use(express.static('public'));
app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.use(methodOverride('_method', {
   methods:['POST', 'GET'],
}))

//* Routes
app.use(postRoutes);
app.use(pageRoutes);

const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});