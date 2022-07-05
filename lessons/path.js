const path = require('path')

console.log('File name', path.basename(__filename))

console.log('directory name', path.dirname(__filename))

console.log('file extension', path.extname(__filename))

console.log('parse', path.parse(__filename).name)

console.log(path.join(__dirname, 'server', 'index.html'))