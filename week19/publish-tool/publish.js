let http = require("http");
let fs = require("fs");
let archiver = require("archiver");
let child_process = require("child_process");
let querystring = require("querystring");

// 1. 打开 https://github.com/login/oauth/authorize
child_process.exec(`open https://github.com/login/oauth/authorize?client_id=Iv1.31bdb377bb323f11`)
// 3. 创建server, 接受token, 后点击发布
http.createServer(function(request, response){
  if(/^\/\?([\s\S]+)$/.test(request.url)) {
    let query = querystring.parse(request.url.match(/^\/\?([\s\S]+)$/)[1]);
    publish(query.token, (res) => {
      console.log(res)
      response.end("publish success")
    })
  } else {
    console.log("WARNING------: url not match")
    console.log(request.url)
  }
  
}).listen(8083)

function publish(token, callback) {
  let request = http.request({
      hostname: "127.0.0.1",
      port: 8082,
      method: "POST",
      path: `/publish?token=${token}`,
      headers: {
        "Content-Type": "application/octet-stream"
      }
    }, response => {
      callback(response)
    })
    
    const archive = archiver('zip', {
      zlib: {level:9}
    })
    archive.directory('./sample/', false);
    archive.finalize();
    archive.pipe(request)
}
