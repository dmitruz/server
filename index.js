// const doteenv = require('doteenv')
// doteenv.config()

// console.log(process.env.PORT);
// console.log(process.env.NODE_ENV);


// sozdali fail

// const chalk = require('chalk')
// const text = require('./lessons/data')

// console.log(chalk.blue(text))

fs.readFile(filePath, (err, content) => {
    if (err) {
        throw err
    }
    const data = Buffer.from(content)
    console.log('Content:', data.toString())
})