const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.write('<html>');
        res.write('<meta><title>My First Page</title></meta>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">SEND</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<meta><title>My First Page</title></meta>');
    res.write('<body><h1>Welcome to my Node Js Project</h1></body>');
    res.write('</html>');
    return res.end();
});

server.listen(3000);