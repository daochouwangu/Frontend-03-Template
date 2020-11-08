# 第14周 组件化

## 手势与动画

### 时间线

1. 建立一个Animation 类，用来作为dom的动画抽象，保存对应的dom引用，以及另外7个参数：
   1. timingFunction 动画的时间函数，一般用来做平滑
   2. template 动画改变的属性值 的模板，
   3. property 对象对应的动画属性值
   4. startValue 动画属性的起始值
   5. endValue 动画属性的终止值
   6. duration 动画过程的时间
   7. delay 动画起始的延迟值;
2. 建立一个时间线，用来保管一组动画，拥有4个方法：
   1. add 给这个时间线添加动画，如果时间线已经启动，动画也会开始启动
   2. start 启动这个时间线，会启动所有已在时间线中的动画
   3. pause 暂停这个时间线，会暂停所有进行中的动画
   4. resume 恢复这个时间线，只能在暂停状态调用
   5. reset 重置这个时间线，会清空所有动画，恢复状态。
3. 时间线有些内部属性：
   1. status 时间线的状态
      1. init(wait) 开始状态
      2. pause 暂停状态
      3. running 进行状态
      4. 状态的变更： 一开始是init，start后变为running， 只有在running状态下才能进入pause状态，只有在pause状态才能resume，变成running状态。只有在reset方法中才能重新变回init状态。
   2. animations 用于存放所有的animation动画对象。
   3. animation_time 是个map 用于存放所有animation对象的启动时间
4. 时间线设计思路：
   1. start方法：
      1. 记录一个最开始的时间，并记录每个动画的启动时间（在add的时候记录）
      2. 为timeline绑定一个帧函数，用这个函数生产每一帧动画
      3. 帧函数中遍历每一个animation,如果当前时间已经可以启动动画（减去开始时间、delay时间、和暂停的时间 大于0），则调用animation的receiveTime的方法产生动画帧
      4. 使用requestAnimationFrame循环调用帧函数，持续产生动画效果。
   2. add 方法： 添加animation, 并记录每个动画的添加时间
   3. pause 方法，改变当前timeline的状态，同时取消帧动画，同时记录当前暂停的时间，用于后续计算总共暂停了多长时间
   4. resume方法，改变状态，重新启动帧动画，同时结算暂停时间。
   5. reset方法： 清空存的动画对象以及对应的时间，重置状态。
