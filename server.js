const http = require('http');

const server = http.createServer((req, res) => {
    console.log('run request ... ')
    res.setHeader('Content-Type', 'text/html');
    res.write('<h3>Hello world! </3>');
    res.end();
})

server.listen(3000, 'localhost', () => {
    console.log('NodeJS server is running on port : 3000');
})