# 第19周 发布系统

## 环境

1. 有一台虚拟机 或 真实服务器，我们使用linux ubuntu
2. 安装node
   1. sudo apt install nodejs
   2. sudo apt install npm
   3. sudo npm install -g n
   4. PATH="$PATH"

## express

1. mkdir server
2. npx express-generator
3. npm install
4. 去除route和views代码，在public里建立一个新的index.html
5. 开启服务器ssh
6. scp -P 8022 -r ./* winter@127.0.0.1:/home/winter/server

## 发布系统原理

本课程使用http协议完成文件传输

client------------------server
｜
｜
 V 先fs读取文件
 然后写入http request
 ｜
 ｜
 V
http  ------传输文件----> http ------node_fs写入文件------->服务器文件被更新

### 建立http通讯
mkdir publish-server
mkdir publish-tool
npm init
在server端建一个http server
在tool端，调用http发送一个请求

### 第二步，加入fs文件系统

引入fs 文件系统，server端读取文件
fs.createReadStream, 有data事件，表示收到数据，end事件，表示读取完毕（异步的）

### 第三步，使用archiver进行压缩，实现多文件上传

客户端引入archiver 压缩文件

```javascript
const archive = archiver('zip', {
  zlib: {level:9}
})
archive.directory('./sample/', false);
archive.finalize();
archive.pipe(request)
```

服务端要使用unzipper 解压
`request.pipe(unzipper.Extract({ path: '../server/public/' }))`

## 接入权限

### 使用github oauth系统

1. 在github setting里创建app
2. 记住client_id client_secret
3. 鉴权5步： 
   1. 客户端发起请求github,获取一串code
   2. 服务端获得code，去请求github获取token
   3. 服务端将token发回给客户端
   4. 客户端带上token，发起发布请求，请求中带上token和要发布的文件
   5. 服务端验证token，通过后发布文件
