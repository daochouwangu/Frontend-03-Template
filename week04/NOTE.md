# 第04周学习笔记

## 排版

### 根据浏览器属性进行排版

1. 三代排版技术
   1. float position display
   2. flex(目前选用)
   3. grid
   4. （可能是未来的第四代）css houdini

2. flex-direction: row/column 对应主轴(Main Axis)方向

### 收集元素进行排版

1. 父元素没有设置主轴的特色情况
2. 任意多个flex元素可以在同一行，设置了no-wrap也在同一行
3. 使用max来计算交叉轴size
4. 空间不足的情况下换行

### 计算主轴

1. 先找到所有flex元素，然后把剩余空间按比例分配给flex元素，如果没有剩余空间，则隐藏，同时等比压缩其他元素
2. 如果没有flex元素，则根据justifyContent值来分配空间

### 计算交叉轴

1. 每一行元素中最大的元素就是交叉轴大小
