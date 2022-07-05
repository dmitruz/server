// const doteenv = require('doteenv')
// doteenv.config()

// console.log(process.env.PORT);
// console.log(process.env.NODE_ENV);


// sozdali fail

// const chalk = require('chalk')
// const text = require('./lessons/data')

// console.log(chalk.blue(text))

// fs.readFile(filePath, (err, content) => {
//     if (err) {
//         throw err
//     }
//     const data = Buffer.from(content)
//     console.log('Content:', data.toString())
// })

const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
    

    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
            if (err) {
                throw err
            }
            res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    res.end(data)
        })
    }

})

server.listen(3000, () => {
    console.log('Server has been started...')
})