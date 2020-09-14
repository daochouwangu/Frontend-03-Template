# 重学HTML 和 浏览器API

## 重学HTML

### HTML的定义:XML和SGML

1. 继承了XML 和 SGML 在HTML5以后算是独立的语言
2. SGML -》 XML -》 HTML -》XHTML -》 XHTML2 -》 HTML5
3. DTD与XML namespace
   1. [DTD](https://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd)
   2. [xhtml的namespace](https://www.w3.org/1999/xhtml)
4. &nbsp; 不要用来多个空格占位,会使前后字符连接,推荐white-space
5. 常用转义 : 
   1. 双引号: &#34 &quot
   2. &: &#38 &amp
   3. <: &#60 &lt
   4. \>: &#62 &gt
6. namespace: mathml 和 svg

### HTML标签语义

1. aside 与页面无关的内容
2. main 主要内容
3. article 文章
4. hgroup 标题组
5. strong 在文章中的强调
6. em 在句子中的强调
7. figure figcaption 图片解释
8. nav 导航
9. dfn 表示定义
10. pre code代码
11. sample 示例
12. footer 底部

### HTML语法

1. 合法元素:
   1. Element
   2. Text
   3. Comment
   4. DocumentType <!Doctype html>
   5. ProcessingInstruction: <?a 1?>
   6. CDATA: \<![CDATA[]]> 文本的另一种 不需要转义
2. 字符引用
   1. &#161;
   2. &amp;
   3. &lt;
   4. &quot;

## 重学浏览器API

### DOM API

1. 3.10 Node 及其子类图片
2. 导航类操作:
   1. parentNode
   2. childNodes
   3. firstChild
   4. lastChild
   5. nextSibling
   6. previousSibling
   7. parentElement
   8. children
   9. firstElementChild
   10. lastElementChild
   11. nextElementSibling
   12. previousElementSibling
3.  修改操作
    1.  appendChild
    2.  insertBefore
    3.  removeChild
    4.  replaceChild
4. 高级操作
   1. compareDocumentPosition 是一个用于比较两个节点中关系的函数
   2. contains 检查一个节点是否包含另一个节点的函数
   3. isEqualNode 检查两个节点是否完全相同
   4. isSameNode 检查两个节点是否是一个节点,可以用===替代
   5. cloneNode 复制一个节点,如果传入参数true 会深拷贝

### 事件API

1. addEventListener(type, listener[, options])
2. options: 
   1. capture (捕获/ 冒泡) 默认冒泡
      1. 先从外到里一层层捕获,再从内到外一层层冒泡 
   2. once 只触发一次
   3. passive 副作用

### RangeAPI

1. 批量操作,操作半个节点
2. childNodes 是 living collection 
3. appendChild , insertBefore 是会将node从原先的位置移除
4. Range 表示一段范围 起点和终点不需要在一个层级
5. 便捷api
   1. setStartBefore
   2. setEndBefore
   3. setStartAfter
   4. setEndAfter
   5. selectNode
   6. selectNodeContents
6. 功能api
   1. extractContents 把 Range 的内容从文档树移动到一个文档片段中。
   2. insertNode() 在 Range 的起点处插入一个节点。
   3. Range.deleteContents() 从文档中移除 Range 包含的内容。

### CSSOM

1. 都放在document.styleSheets
2. Rules:
   1. document.styleSheets[0].cssRules
   2. document.styleSheets[0].insertRule("p{color:pink;}",0);
   3. document.styleSheets[0].removeRule(0);
3. 普通的Rule : CSSStyleRule
   1. selectorText String
   2. style K-V结构
4. 优点:批量修改
5. getComputedStyle 获取计算后的css样式
   1. 可以做拖拽
   2. 暂停动画(判断播放位置)

### CSSOM View

1. window
   1. window.innerHeight innerWidth 渲染部分的宽高
   2. devicePixelRatio 物理像素和逻辑像素比例
   3. screen
2. api:
   1. open()
   2. moveTo(x,y)
   3. moveBy(x,y)
   4. resizeBy(x,y)
   5. resizeTo(x,y)
3. scroll
   1. scrollTop
   2. scrollLeft
   3. scrollWidth
   4. scrollHeight
   5. scroll(x,y)
   6. scrollBy(x,y)
   7. scrollIntoView()
   8. window
      1. scrollX
      2. scrollY
      3. scroll(x,y)
      4. scrollBy
4. layout
   1. getClientRects();
   2. getBoundingClientRect();

### 其他API

1. 标准化组织
   1. khronos
      1. WebGL
   2. ECMA
      1. ECMAScript
   3. WHATWG https://spec.whatwg.org
      1. HTML
   4. W3C (主要)
      1. webaudio
      2. CG/WG (CG有些文件要去github找)
      3. wicg.github.io (社区组) SyncManager
2. 
