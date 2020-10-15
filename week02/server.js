const http = require('http');

http.createServer((request, response) => {
  let body = [];
  // request.on('error', (err) => {
  //   console.error(err);
  // }).on('data', (chunk) => {
  //   body.push(Buffer.from(chunk));
  //   // body.push(chunk.toString());
  // }).on('end', () => {
  //   body = Buffer.concat(body).toString();
  //   console.log("body:", body);
  //   response.writeHead(undefined, {'Content-Type': 'text/html'});
  //   response.end(' Hello World\n');
  // });
  request.on('data', () => {}).on('end', () => {
    // response.write(`test`)
    response.writeHead(0, {'Content-Type': 'text/html'});
    // console.log(response.write)
    response.end(' Hello World\n');
  })
}).listen(8088);
console.log("server started");
