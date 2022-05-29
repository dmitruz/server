const app = require('./app');

const PORT = 8088;

app.listen(PORT, () => {
    console.log(`Server is on ${PORT}`);
})