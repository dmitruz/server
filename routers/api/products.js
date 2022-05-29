const express = require('express');
const products = require('../../models/products.json')

const router = express.Router();


router.get (async (req, res) => {
    const alt = await products.getAll();
    res.json(all);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const product = await products.getById(id);
    res.json(product);
});

router.put('/:id', async (req, res) => {
   
})

module.exports = router