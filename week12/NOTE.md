# 第12周笔记

## Proxy

### 介绍

1. 代理目标对象，对proxy的任何操作都可以被拦截，包括增加删除属性，构造函数等。十分强大
2. 如果直接对原生目标更改，将不会触发proxy
3. 一般用于底层库，和Reflet 互为对应

### 应用

1. 实现vue中的effet
   1. 对状态对象进行代理
   2. 注册所有effect函数的回调函数
   3. 执行所有回调函数
   4. 在执行的时候，会访问所有状态对象的代理，这时候记录所有访问到的对象，同时缓存。
   5. 在访问到的对象被set更新值的时候，触发对应回调函数。

## 拖动组件

1. 在拖动组件上绑定mousedown事件
2. 触发mousedown的时候，在document上绑定mousemove和mouseup事件
3. mousemove触发改变组件位置，可以使用translate实现。后面重构，使用range找到最近节点（通过getBoundingRect） 并插入。
4. mouseup事件用来取消mousemove，mouseup事件。
