//const fs = require('fs')
//const path = require('path')

//fs.mkdirSync(path.resolve(__dirname, {recursive: true}))

//const writeFileAsync = async (path, data) => {
    //return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
      //  if (err) {
      //      return reject(err.message)
       // }
       // resolve()
   // }))
//}

//const appendFileAsync = async (path, data) => {
   // return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
        //if (err) {
        //    return reject(err.message)
       // }
       // resolve()
    //}))
//}

//const readFile = async (path) => {
   // return new Promise((resolve, reject) => fs.readFile(path, {encoding: 'utf-8'}, (err) => {
      //  if (err) {
        //    return reject(err.message)
        //}
       // resolve(data)
   // }))
//}

//onst removeFileAsync  = async (path) => {
   // return new Promise((resolve, reject) => fs.rm(path, (err) => {
       // if (err) {
          //  return reject(err.message)
       // }
       // resolve()
   // }))
//}

//removeFileAsync(path.resolve(__dirname, 'test.txt'))
//.then(() => console.log('file was removed'))

//writeFileAsync(path.resolve(__dirname, 'test.txt'), 'data')
//.then(() => appendFileAsync('123'))
//then(() => readFile(path.resolve(__dirname, 'test.txt')))
//.then(data => console.log(data))
//.catch(err => console.log('err'))

//const text = process.env.TEXT || '';

//writeFileAsync(path.resolve(__dirname, 'text.txt'), text)
//.then(() => readFileAsync(path.resolve(__dirname, 'text.txt')))
//.then(data => data.split(' ').length)
//.then(count => writeFileAsync(path.resolve(__dirname, 'count.txt'), `amount of words ${count}`))

