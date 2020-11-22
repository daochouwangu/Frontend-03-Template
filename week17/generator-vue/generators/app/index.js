var Generator = require('yeoman-generator');

module.exports = class extends Generator{
  constructor(args, opts) {
    super(args, opts);
  }
  async initPackage() {
    let answer = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your Project Name:",
        default: this.appname
      }
    ])
    this.appname = answer.name;
    const pkgJson = {
      "name": this.appname,
      "version": "1.0.0",
      "description": "",
      "main": "/app/index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "",
      "license": "ISC",
      "dependencies": {
      }
    }
    
    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson)
    this.npmInstall(["vue"], {'save-dev': false});
    this.npmInstall([
      "webpack", 
      "vue-loader",
      "vue-template-compiler",
      "vue-style-loader",
      "css-loader",
      "copy-webpack-plugin",
      "webpack-cli"
    ], {'save-dev': true});
  }
  copyFiles() {
    this.fs.copyTpl(
      this.templatePath('HelloWorld.vue'),
      this.destinationPath('src/HelloWorld.vue')
    )
    this.fs.copyTpl(
      this.templatePath('webpack.config.js'),
      this.destinationPath('webpack.config.js')
    )
    this.fs.copyTpl(
      this.templatePath('main.js'),
      this.destinationPath('src/main.js')
    )
    this.fs.copyTpl(
      this.templatePath("index.html"),
      this.destinationPath("src/index.html"),
      {
        title: `${this.appname} By Vue Generator`
      }
    )
  }
}
