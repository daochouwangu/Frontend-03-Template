const http = require('http');

http.createServer((request, response) => {
  let body = [];
  request.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    body.push(Buffer.from(chunk));
    // body.push(chunk.toString());
  }).on('end', () => {
    body = Buffer.concat(body);
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(
`<html maaa=a >
  <head>
    <style>
      body div .bigpic#myid{
        width: 100px;
        background-color: #ff5000;
      }
      body ul li .asd.qwed#qwe{
        width: 30px;
        background-color: #ff1111;
      }
    </style>
  </head>
  <body>
  <ul>
  <li>as<div id="qwe" class="asd qwed">dqq</div></li></ul>
    <div>
      <img class="bigpic" id="myid" />
      <img class="bigpic" />
    </div>
  </body>
</html>`);
  });
}).listen(8088);
console.log("server started");
