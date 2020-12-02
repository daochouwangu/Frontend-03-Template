# 工具链

## yeoman

生产脚手架的工具

1. 全局安装yo 

   ```bash
   npm install -g yo
   ```

2. npm init建立新的generator，注意名字前缀要加generator-. 然后安装yeoman-generator（这一步之前要npm init
   ```bash
   npm init
   // name: generator-vue
   npm i -S yeoman-generator
   ```

3. 建立一个index.js文件，并设为入口文件
4. 在index.js文件中，引入generator，并建立一个class extends Generator
   ```javascript
   var Generator = require('yeoman-generator');
   module.exports = class extends Generator
   ```
5. 这个class中，generator会按顺序自动执行类方法
6. 如果想用询问来自定义配置，可以用prompt
   ```javascript
   let answer = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your Project Name:",
        default: this.appname
      }
    ])
    console.log(answer.name)//使用
   ```
7. 常见方法
   1. this.fs.extendJSON 生成json文件，基础对应配置
   2. this.npmInstall  安装npm
   3. this.copyTpl 拷贝tmplate文件
8. copyTpl 可以用这个方法拷贝文件，并且可以传入变量，取代tmplate文件中的占位符
   ```javascript
   //index.js
   this.fs.copyTpl(
      this.templatePath("index.html"),
      this.destinationPath("src/index.html"),
      {
        title: `${this.appname} By Vue Generator`
      }
    )

    //index.html
    <title><%= title %></title>
   ```
9. 使用npm link 可以快速测试当前这个generator
10. 使用： 在新文件夹下，使用yo generatorName 来调用刚才写的generator
   ```bash
   mkdir vue-demo
   cd vue-demo
   yo vue
   ```
