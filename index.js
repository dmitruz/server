const doteenv = require('doteenv')
doteenv.config()

console.log(process.env.PORT);
console.log(process.env.NODE_ENV);