const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    if(req.url === '/home'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<meta><title>My First Page</title></meta>');
        res.write('<body><h1>Welcome to Home</h1></body>');
        res.write('</html>');
        return res.end();
    }
    else if (req.url === '/about'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<meta><title>My First Page</title></meta>');
        res.write('<body><h1>Welcome to About Us Page</h1></body>');
        res.write('</html>');
        return res.end();
    }
    else if (req.url === '/node'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<meta><title>My First Page</title></meta>');
        res.write('<body><h1>Welcome to my Node Js Project</h1></body>');
        res.write('</html>');
        return res.end();
    }
});

server.listen(3000);