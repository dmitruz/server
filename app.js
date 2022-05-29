const express = require('express');
const cors = require('cors');
const productRouter = require('./routers/api/products');

const app = express();

app.use(cors());
app.use(express.json());

app.use('./products', productsRouter);

app.get('/', (req, res) => {
    res.send( 'Hello there')
});

app.use((req, res) => {
    res.status(404).json({message: 'Not Found'});

})

module.exports = app;