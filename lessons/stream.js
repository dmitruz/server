// Readble - reading
// writable - recording
//duplex  readble + writeble
// Transform the same like Duplex

const fs = require('fs')
const path = require('path')

// fs.readFile(path.resolve(__dirname, 'test.txt'), (err, data) => {
//     if (err) {
//         throw err;
//     }
//     console.log(data)
// })

// const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'))
// stream.on('data', (chunk) => {
//     console.log(chunk)
// })

// const writableStream = fs.createWriteStream(path.resolve(__dirname, 'test2.txt'))
// for (let i = 0; i < 20; i++) {
//     writableStream.write(i + '\n');
// }
// writableStream.end()


// otpravka faila polzovatelu

// const http = require('http');

// http.createServer((req, res) => {
//     const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'))
//     stream.pipe(res)
// })