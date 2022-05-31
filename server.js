const mongoose = require('mongoose');

main().catch(err => console.log(err));
const DB_HOST = 'mongodb+srv://testuser:840270aaa@cluster0.mgfa48c.mongodb.net/products?retryWrites=true&w=majority';
async function main() {
  await mongoose.connect(DB_HOST);
}

main().then(() => {
    console.log('DB conected')
}).catch(err => console.log(err));
