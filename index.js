const http = require('http');

http.createServer((request, response) => {
  const { headers, method, url } = request;
  let body = [];
  request.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    data = {};
    data.headers = headers;
    data.clientip = request.socket.remoteAddress;
    response.write(JSON.stringify(data));
  });
}).listen(8800);