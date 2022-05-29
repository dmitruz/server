const express = require('express');
const cors = require('cors');
const productsRouter = require('./routers/api/products');
const logger = require('morgan');
require('dotenv').config();


const app = express();

app.use(cors());
app.use(express.json());
app.use(logger(process.env.NODE_ENV === 'dev' ? 'dev' : 'tiny'));

app.use('/api/products', productsRouter);


app.use((req, res) => {
    res.status(404).json({message: 'Not Found'});

})

module.exports = app;