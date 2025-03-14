// core NodeJS modules;
// http;
// https;
// fs;
// path;
// os

// function createServer<typeof http.IncomingMessage, typeof http.ServerResponse>
// (requestListener?: http.RequestListener<typeof http.IncomingMessage, typeof http.ServerResponse> | undefined): http.Server<...> (+1 overload)
// Returns a new instance of Server.

const http = require('http');

// function requestListener(req, res) {}

const server = http.createServer((req, res) => {
  console.log('req', req);

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(
    JSON.stringify({
      data: 'Hello World!',
    })
  );
});

server.listen(3000);
