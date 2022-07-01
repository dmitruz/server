// const doteenv = require('doteenv')
// doteenv.config()

// console.log(process.env.PORT);
// console.log(process.env.NODE_ENV);

const http = require('http');
const PORT = process.env.PORT || 5000;
const EventEmitter = require('events');
const emitter = new EventEmitter()

class Router {
    constructor() {
        this.endpoint = {}
    }

    request(method = "GET", path, handler) {
        if(!this.endpoints[path]) {
            this.endpoints[path] = {}
        }
    const endpoint = this.endpoints[path];

    if(endpoint[method]) {
        throw new Error(`[${method}] by address ${path} is already exist`)
    }

    endpoint[method] = handler

    emitter.on(`[${path}]:[${method}]`, (req, res) => {
        handler(req, res)
    })
    }
}

get(path, handler) {
    this.request('GET', path, handler);
}

put(path, handler) {
    this.request('PUT', path, handler);
}

post(path, handler) {
    this.request('POST', path, handler);
}

delete(path, handler) {
    this.request('DELETE', path, handler);
}

const router = new Router()
router.get('/users', (req, res) => {
    res.send('YOU SEND REQUEST TO /USERS')
})
const server = http.createServer((res, req) => {

res.end(req.url)
})

server.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))