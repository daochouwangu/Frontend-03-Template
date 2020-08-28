# 第05周学习笔记
>思考题在最后
## css总论

### css语法的研究

1. 通过标准来学习语法，css可以从2.1的标准来学
2. CDO | CDC 表示是注释，为了兼容极老版本的浏览器，因为那些浏览器不支持css
3. 总体结构：
   - @-rules
     - @charset
     - @import
     - @media
     - @page
     - @counter-style
     - @keyframes
     - @fontface
     - @support
     - @namespace
   - rule
     - Selector
       - selector_group
       - selector
         - \>
         - \<sp\>
         - \+
         - ~
       - simple_selector
         - type
         - \*
         - .
         - \#
         - []
         - :
         - ::
         - :not()
     - Declaration
       - Key
         - variables
         - properties
       - Value
         - calc
         - number
         - length
         - ....

### css @规则的研究

1. 所有的@规则
   - @charset: https://www.w3.org/TR/css-syntax-3/
   - @import: https://www.w3.org/TR/css-cascade-4/
   - [重要] @media: https://www.w3.org/TR/css3-conditional/
   - @page: https://www.w3.org/TR/css-page-3/
   - @counter-style: https://www.w3.org/TR/css-counter-styles-3/
   - [重要] @keyframes: https://www.w3.org/TR/css-animations-1/ 重要
   - [重要] @fontface: https://www.w3.org/TR/css-fonts-3/ 重要
   - @supports: https://www.w3.org/TR/css3-conditional/
   - @namespace: https://www.w3.org/TR/css-namespaces-3/
2. 废弃或太新的@rule
   - document
   - color-profile
   - font-feature

### css 规则的结构

1. 选择器 selector
   1. 标准
      1. https://www.w3.org/TR/selectors-3/
      2. https://www.w3.org/TR/selectors-4/
2. 声明
   - key
     - Properties
     - Variables: https://www.w3.org/TR/css-variables/
   - value
     - https://www.w3.org/TR/css-values-4/ 

### 收集标准

1. 在w3c官网 用爬虫（console代码）来获取标准（相关代码放在css-crawler.js文件中

### css总论总结

1. 学习方法：找官方网站，获得概览信息，通过自制自动化工具来获得相关信息

## css选择器

### 选择器语法 

1. 简单选择器：
   1. \*
   2. div svg|a
   3. .cls
   4. #id
   5. [attr=value]
   6. :hover
   7. ::before
2. 复合选择器（conbine selector）
   1. <简单选择器> <简单选择器> <简单选择器>
   2. * 或者div选择器
3. 复杂选择器
   1. <简单选择器> <链接符> <简单选择器>
   2. 链接符：
      1. `sp` 空格 后代选择器
      2. `>` 子选择器
      3. `~` 通用兄弟选择器
      4. `+` 相邻兄弟选择器
      5. `||` （实验中：列合并符

### 选择器的优先级

1. 先计算出四组数据：SpecArray[0,0,0,0]
2. 第一个表示inline-style
3. 第二个表示id选择器
4. 第三个表示类选择器和属性选择器和伪类选择器(:hover)
5. 第四个表示标签选择器和伪元素（比如::after）
6. 其实还有一类是!important 他的优先级最高
7. 计算优先级方式，先确定一个N （一般是65535）。然后Spec = SpecArray[0] * N ** 3 + SpecArray[1] * N ** 2 + SpecArray[2] * N + SpecArray[3]
8. 通配选择符(*) 关系选择符(+>~||) 否定伪类(:not())对优先级没有影响，不计数(否定伪类中有其他选择器，则其他选择器正常计算)

### 伪类

1. 链接/行为
   - :any-link
   - link :visited
   - :hover
   - :active
   - :focus
   - :target
2. 树结构
   - :empyt
   - :nth-child()
   - :nth-last-child()
   - :first-child :last-child :only-child
3. 逻辑型
   - :not
   - :where :has 不常用，试验阶段

### 伪元素

1. ::before 在元素的内容前面插入一个伪元素
2. ::after 在元素的内容后面插入一个伪元素
3. ::first-line 不支持下面那三种
4. ::first-letter 支持float vertical-align 和盒模型

## 思考题 ？为什么first-letter可以设置display:block / float 而first-line不行？
first-line 需要计算第一行有那些元素，根据元素宽度、文档宽度、文本文字大小不同，第一行的元素也不相同。所以他不能脱离文档流，一旦脱离，就需要做特殊处理，不然原先的段落继续将新的第一行脱离。如果做特殊处理，重新计算排版的开销太大，成本与收益不匹配。
而first-letter 是确定的第一个字符，可以正常顺序计算，不需要重新排版
