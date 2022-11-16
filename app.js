const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<meta><title>My First Page</title></meta>');
    res.write('<body><h1>Welcome to my Node.js Server!</h1></body>');
    res.write('</html>');
    return res.end();
});

server.listen(3000);
