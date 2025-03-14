const http = require('http');

const server = http.createServer((req, res) => {
  console.log('req.url', req.url);
  console.log('req.method', req.method);
  console.log('req.headers', req.headers);

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(
    JSON.stringify({
      data: 'Hello World!',
    })
  );
});

server.listen(3000);
