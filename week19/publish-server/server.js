let http = require('http');
let fs = require('fs');
const { request } = require('../server/app');

http.createServer(function(request,res) {
  console.log(request.headers);
  let outFile = fs.createWriteStream("../server/public/index.html");
  request.pipe(outFile);
  request.on('end',() => {
    res.end()
  })
}).listen(8082)
