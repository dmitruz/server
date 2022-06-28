const path = require('path');

console.log('stickparts of route',path.join(__dirname, 'first', 'second', 'third'));
console.log('poluchaem absolut path', path.resolve('/first', 'second'));