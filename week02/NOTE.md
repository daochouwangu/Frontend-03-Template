week 02学习笔记

#### 有限状态机

1. 每一个状态都是一个机器
   - 在每一个机器里，都可以做计算、存储、输出
   - 所有的机器接受的输入是一致的
   - 状态机的每一个机器本身没有状态，用函数来写就是纯函数
2. 每一个机器知道下一个状态
   - 每个机器都有确定的下一个状态（Moore）
   - 每个机器根据输入决定下一个状态（Mealy） 

练习：
  不使用状态机实现查找字符串（不能使用正则
  完成： 通过一个个字符匹配完成
  拓展：KMP算法

  使用状态机查找字符串
  完成：参考kmp.js（暂未使用kmp算法）

#### HTTP请求

1. 七层网络协议： 在浏览器中 1-3 是HTTP 用http包 4是tcp 用net包 5是internet 6-7是4g/5g/wifi
   1. 应用
   2. 表示
   3. 绘画
   4. 传输
   5. 网络
   6. 数据链路
   7. 物理层
2. http请求实现
   1. 先建立简单的服务端
   2. 设计request
      1. 有method、host、port、path、body、headers
      2. content-length自动生成 防止400
      3. content-type决定了body的解析方式 json用stringify urlencoded用遍历拼装
      4. send函数：使用net的connection + promise完成，注意发送的格式，要符合http协议，注意\r\n 同时要自己写个responseparser来处理服务器返回数据
      5. responseParser：使用状态机完成parser的解析（包括一个headparser和bodyparser）
