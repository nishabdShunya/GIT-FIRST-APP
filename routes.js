const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        return fs.readFile('message.txt', { encoding: "utf-8" }, (err, data) => {
            if (err) {
                console.log(err);
            }
            res.write('<html>');
            res.write('<meta><title>My First Page</title></meta>');
            res.write(`<body>${data}</body>`)
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">SEND</button></form></body>');
            res.write('</html>');
            return res.end();
        })
    }
    else if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        })
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                if (err) {
                    console.log(err);
                }
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        })
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<meta><title>My First Page</title></meta>');
    res.write('<body><h1>Welcome to my Node Js Project</h1></body>');
    res.write('</html>');
    return res.end();
};

// Export Method-1 (if we have to return only one function)
// module.exports = requestHandler;

// Export Method-2
module.exports = {
    handler: requestHandler,
    text: 'some text'
};

// Export Method-3
// module.exports.handler = requestHandler;
// module.exports.text = 'some text';

// Export Method-4
// exports.handler = requestHandler;
// exports.text = 'some text';