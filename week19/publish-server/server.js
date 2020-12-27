let http = require('http');
let https = require('https');
let unzipper = require('unzipper');
let querystring = require('querystring')
const { request } = require('../server/app');

// 2. auth 路由： 接受code， 用code+ client_id+client_secret换token
function auth(request, response) {
  let query = querystring.parse(request.url.match(/^\/auth\?([\s\S]+)$/)[1]);
  getToken(query.code, function(info) {
    response.write(`<a href='http://localhost:8083/?token=${info.access_token}'>publish</a>`)
    response.end();
  });
}
function getToken(code, callback) {
  let request = https.request({
    hostname: "github.com",
    path: `/login/oauth/access_token?code=${code}&client_id=Iv1.31bdb377bb323f11&client_secret=4b8921274cd60c4169926ec1e0ba181e636e5835`,
    port: 443,
    method: "POST"
  }, function(response) {
    let body = "";
    response.on('data', chunk => {
      body += chunk.toString();
      return ;
    })
    response.on('end', chunk => {
      callback(querystring.parse(body));
    })
  });
  request.end();
}
// 4. publish: 用token获取用户信息，检查权限 接受发布
http.createServer(function(request, response) {
  if(request.url.match(/^\/auth\?/)) {
    return auth(request, response);
  }
  if(request.url.match(/^\/publish\?/)) {
    return publish(request, response);
  }
}).listen(8082)
function publish(request, response) {
  let query = querystring.parse(request.url.match(/^\/publish\?([\s\S]+)$/)[1]);
  getUser(query.token, info => {
    console.log(info);
    if(info.login === "daochouwangu") {
      request.pipe(unzipper.Extract({ path: '../server/public/' }))
      request.on('end',() => {
        response.end("发布成功")
      })
    } else {
      response.end("权限不足")
    }
  })
}
function getUser(token, callback) {
  let request = https.request({
    hostname: "api.github.com",
    path: `/user`,
    port:443,
    headers: {
      Authorization: `token ${token}`,
      "User-Agent": 'Toy-Publish777'
    }
  }, function(response) {
    let body = "";
    response.on('data', chunk => {
      body += chunk.toString();
    })
    response.on('end', chunk => {
      callback(JSON.parse(body));
    })
  });
  request.end();
}
