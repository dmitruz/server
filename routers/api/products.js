const express = require('express');
const products = require("../../models/products");

const router = express.Router();


router.get ('/', async (req, res) => {
    try {
       const alt = await products.getAll();
    res.json(all); 
    } catch (e) {
        res.status(500).json({message: "Server crashed"});
    }
    
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const product = await products.getById(id);
    if(!product) {
        res.status(404).json({"message": "Not found"})
    } else {
      res.json(product);
    }
    
});

router.post('/', async (req, res) => {
   const { price, name } = req.body;
   const product = await products.create(price, name);
   res.status(201).join(product);
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const product = await products.deleteById(id);
    if(!product) {
        res.status(404).json({"message": "Not found"});
    } else {
    res.json({"message": "contact deleted"});
    }
  
});

router.put('/:id', async (req, res) => {
const { name, price } = req.body;
const { id } = req.params;

const products = await products.upddateById(id, name)
if(!product) {
res.status(404).json({"message": "Not found"});
} else {
res.json(product);
}

});

module.exports = router