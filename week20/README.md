# 学习总结和第20周总结

## 学习总结

经过20多周的学习，总结一下学的东西。

### 基础巩固

1. 知道了从阅读标准来学习
2. 学习了编译器相关知识，从一个更高的层面去学习js
3. 整理了前端知识体系
4. 对网络，http有了更深入的了解
5. 对css特性，渲染原理有了新的认识
6. 重新学习了HTML，了解了语义化，同时对各种API的功能区分有了了解
7. 重新学习了算法，用图形化实现了几种算法。

### 进阶

1. 了解了vue的新特性原理，并自己实现了一个
2. 了解了组件库的设计，知道了组件库的分层，实现了更基础的动画库来给组件库做支撑，了解了很多设计模式
3. 了解了一些脚手架生成工具，测试工具
4. 实现通过http协议来传输的发布平台
5. 实现了和github oauth对接的权限验证
6. 了解了git hooks 以及eslint的知识。

### 总结

通过训练营，更多的是学到了如何去思考，如何去学习，授人以鱼不如授人以渔，winter老师给我们梳理了前端所有的知识体系，以及它们之间的关系，然后每个都带我们入了门，并且教会了我们学习的方法，剩下的路就要我们自己走了。
前端的东西说多不多，说难也不难，万变不离其宗，这门课程给了我更高的维度去思考前端体系，给了我更深的角度去思考javascript这门语言，总的来说收获颇丰。
用乔布斯的名言来结束这次训练营吧，Stay hungry. Stay foolish !

## 第20周总结

### 持续集成

最早是客户端提出来的，客户端的发版一直都是要构建的，要联调测试，代码多，build慢，所以提出了持续集成来加快迭代，小步失错。
前端build快，周期短，所以持续集成会有不同，一般使用lint 和 浏览器生成dom 来进行代码验证

### githook

1. git项目下有个隐藏.git文件夹， 使用open 打开， 里面有个hooks文件夹，里面都是一些hook的例子
2. pre-commit commit之前调用
3. 需要改变权限，默认只有rw 没有x
4. 可以使用node来写hook，在第一行改为node环境 #!/usr/bin/env node
5. 推出异常码改为1 即可组织这次commit // process.exitCode = 1;

### eslint

1. npm install eslint --save-dev 安装eslint
2. npx eslint --init 初始化
3. 不要自动fix
4. 建立eslint实例 const eslint = new ESLint(/*option*/) // const {ESLint} = require("eslint");
5. lint文件 const results = await eslint.lintFiles(["lib/**/*.js"]);
6. 输出formatter后的结果 formatter = await eslint.loadFormatter("stylish");resultText = formatter.format(results); console.log(resultText)
7. 报错则exitCode = 1
8. 在git操作的时候，如果add完之后，又做了一些非当前版本的更改，这时候我们只想precommit验证之前的版本，可以使用git stash命令 
   1. git stash push -k 将上次add之后的变更放入暂存区
   2. 进行commit
   3. git stash pop 恢复
9. 将上面这个操作自动化，引入child_process 来exec命令

### chrome的headless模式

1. 文档： developers.google.com/web/updates/2017/04/headless-chrome
2. puppeteer 模拟操作，可以做dom的测试
