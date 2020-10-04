## LL算法生成AST

### LL和LR

LL 和 LR 是常见的解析算法, 他们的第一个L 表示从左边读取token 第二个L和R表示从左或右开始推导.

LL算法是带有预测能力的自顶向下算法, 当有多个候选产生式的时候,就看一下下一个或多个Token,就知道调用哪一个产生式.我们这个例子就是看一个,也就是LL(1)算法

LR算法是自底向上的算法,能支持更多的语法,自顶向下是递归的做模式匹配,自底向上是移进-规约的方式 来构建AST

LR算法更强大 有更多变种 一般工业上使用LR的变种LALR算法

### js parser

常见的js parser有 Esprima、Acorn、Babylon(babel使用,fork自Acorn)
推荐一个[在线ast生成工具](https://astexplorer.net/)
