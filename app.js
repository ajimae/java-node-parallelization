// app.js
var http = require('http');

http.createServer(function (_, res) {
  var body = 'Hello world\n';
  res.writeHead(200, { "Content-Length": body.length });
  res.end(body);
}).listen(8085);

