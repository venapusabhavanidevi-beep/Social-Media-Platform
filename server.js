// server.js

const express = require('express');

const app = express();

app.use(express.json());
app.use(express.static('public'));

let posts = [];

// Home Route
app.get('/', (req, res) => {
    res.send('Social Media Backend Running');
});

// Get All Posts
app.get('/posts', (req, res) => {
    res.json(posts);
});

// Add New Post
app.post('/addPost', (req, res) => {

    const newPost = {
        id: posts.length + 1,
        content: req.body.content
    };

    posts.push(newPost);

    res.json({
        message: 'Post Added Successfully',
        post: newPost
    });
});

// Delete Post
app.delete('/deletePost/:id', (req, res) => {

    const id = parseInt(req.params.id);

    posts = posts.filter(post => post.id !== id);

    res.json({
        message: 'Post Deleted Successfully'
    });
});

// Start Server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});