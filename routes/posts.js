const express = require('express');
const router = express.Router();
const Post = require('../model/Posts')



// Obtener todos los posts
router.get('/', async(req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts)
    }
    catch(err) {
        res.json({message: err})
    }
});

// Guardar posts
router.post('/', (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    post.save()
    .then( data => {
        res.json(data)
    })
    .catch( err => {
        res.json({ message: err })
    });
});

// Obtener post específico
router.get('/:postId', async(req, res) => {
    try{
        const posts = await Post.findById(req.params.postId);
        res.json(posts)
    }
    catch(err) {
        res.json({message: err})
    }
});

// Borrar post
router.delete('/:postId', async(req, res) => {
    try{
        const posts = await Post.remove({_id:req.params.postId});
        res.json(posts)
    }
    catch(err) {
        res.json({message: err})
    }
});


// Actualizar
router.patch('/:postId', async(req, res) => {
    try{
        const posts = await Post.updateOne({_id:req.params.postId}, {$set:{title: req.body.title}});
        res.json(posts)
    }
    catch(err) {
        res.json({message: err})
    }
});

module.exports = router;