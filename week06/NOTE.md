# 第 06 周学习笔记

## CSS排版

### 盒

>Html 代码中可以书写开始`Tag`,结束`Tag`，和自封闭`Tag`
>一对起止`Tag` 表示一个`元素`
>Dom树中存储的是`元素`和其他类型的节点
>Css选择器选中的是`元素`
>Css选择器选中的`元素`，在排版时可能产生多个`盒`
>排版和渲染的基本单位是`盒`

1. 盒模型
   由外到内：margin,border,padding,content 
2. box-sizing两种
   1. content-box: content的size就是盒的size (默认)
   2. border-box: content+padding+border 是盒的size

### 正常流

1. 三代排版技术: 正常流 flex grid
2. css排版只排 盒 和 字 两种元素
3. 排版步骤:
   1. 收集盒和文字进行(hang)
   2. 计算盒在行中的排布
   3. 计算行与行的排布
4. 行内盒 line-box . 块级盒: block-level-box (BFC)

### 正常流的行级排布

1. Baseline 文字对齐的基础线
2. Text 
3. 行模型: 5条线
   1. line-top  //行高 盒如果太高会被撑开
   2. text-top //根据字体size变
   3. base-line
   4. text-bottom
   5. line-bottom
4. vertical-align 设置对齐的线
5. inlinebox 的对齐 默认是box里面最后一行文字的baseline 和外面的baseline对齐,更改vertical-align会改变对齐方式.推荐只用top/bottom. 

### 正常流的块级排布

1. 正常流的两个机制
   1. float
      float元素会影响自己高度内的所有行盒的宽度.
      float元素会被float元素影响,如果浮动方向有元素,会产生堆叠(类似卡住)
      这时给float加一个clear属性,他会自动调整纵向位置,自动置顶(clear类似清理空间)
   2. margin合并
      两个margin相连,会堆叠,取Max.只发生在bfc里

### BFC合并

1. Block
   1. block container: 里面有bfc的1. 能容纳正常流的盒,里面就有bfc
      1. block
      2. inline-block
      3. table-cell
      4. flex item
      5. grid cell
      6. table-caption
   2. block-level Box:外面有BFC的
      1. block level: display:(block flex table grid) 
      2. inline level: display(inline-block inline-flex inline-table inline-grid)
   3. block box = block container + block-level box 里外都有BFC的

2. 什么情况下会设立BFC
   1. floats
   2. absolutely positioned element
   3. bloack containers(such as inline-block,table-cells,and table-captions)that are not block boxes,
      1. flex items
      2. grid cell
   4. and block boxes with overflow other than visible

3. BFC合并
   1. block box && overflow:visible
      1. bfc合并与float
      2. bfc合并与边距折叠

总结: BFC 相对于一个新的渲染排版上下文,他无法感知到外部的信息,同一个bfc下会发生外边距折叠.

### Flex排版

1. 排版逻辑
   1. 收集盒进行(没有文字,文字也是盒)
   2. 计算盒在主轴方向的排布
   3. 计算盒在交叉轴方向的排布
2. 分行
   1. 根据主轴尺寸,把元素分进行
   2. 若设置了no-wrap,则强行分配进行第一行
3. 计算主轴方向
   1. 找出所以flex元素
   2. 把主轴方向的剩余尺寸按比例分配给这些元素
   3. 若剩余空间为负数,所有flex元素置为0,剩下的等比压缩
4. 计算交叉轴方向
   1. 根据每一行中最大元素计算行高
   2. 根据行高flex-align和item-align,确定元素具体位置

## CSS动画与绘制

### 动画
1. Animation:
   1. @keyframes定义
   2. animation:使用

   ```css
   @keyframes mykf
   {
      from {
         background: red;
      }
      to {
         background: yellow;
      }
   }
   div {
      animation: mykf 5s infinite;
   }
   ```
   3. 属性:
      1. animation-name 时间曲线
      2. animation-duration 动画的时长
      3. animation-timing-function 动画的时间曲线
      4. animation-delay 动画开始前的延迟
      5. animation-iteration-count 动画的播放次数
      6. animation-direction 动画的方向
   4. Keyframe
      可以定义transition来定义不同关键帧不同的时间曲线
2. Transition
   1. transition-property 要变换的属性
   2. transition-duration 变换的时长
   3. transition-timing-fuction 时间曲线
      1. 来自于三次[贝塞尔曲线](https://cubic-bezier.com)
         1. 可以用来拟合抛物线,圆滑各种动画
   4. transition-delay 延迟

### 颜色

1. 三原色: RGB
2. 三原色的补色:CMY(青、平红、黄) 加上黑色做印刷的基本颜料
3. HSL H表示色相,S表示纯度,L表示亮度
4. HSV V表示明度 value100% 最亮,L 100 纯白色,0纯黑色,中间是纯色
5. HSL的优势:
   1. 统一换颜色,亮度纯度不会变,更加协调

### 绘制

1. 几何图形
   1. border
   2. box-shadow
   3. border-radius
2. 文字
   1. font
   2. text-decoration
3. 位图
   1. background-image
4. 底层shader绘制
5. data uri + svg

# 作业

脑图:
![github]('./../CSS3%20Properties.png)
