const express = require('express');
const router = express.Router();
const posts = [
    {id: '1', topics: 'test 1', text: 'test text 1'},
    {id: '1', topics: 'test 2', text: 'test text 2'},
    {id: '1', topics: 'test 3', text: 'test text 3'},
];

router.get('/', (req, res) => {
    res.json({post, status: 'success'})
});

router.get('/:id', (req, res) => {
    const [post] = posts.filter(it => it.id === req.params.id)
    res.json({post, status: 'success'})
});

router.post('/', (req, res) => {
    const {
        topic,
        text
    } = req.body;

    posts.push ({
        id: Date.now().toString(),
        topic,
        text
    });

    res.json({status: 'success'})
});

router.put('/:id', (req, res) => {
    
});

router.delete('/:id', (req, res) => {
    
});

module.exports = { postRouter: router }