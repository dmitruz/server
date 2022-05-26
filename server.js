const express = require('express');
const morgan  = require('./products');
require('dotenv').config();


const app = express()


    const {Postrouter} = require('./routers/postsRouter');

const PORT = process.env.PORT || 8081;
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());
app.use('/api/posts', postsRouter);

app.listen(PORT, (err) => {
    if (err) console.error('Error at server launched:', err);
    console.log(`Server works at ${PORT}`);
});