# 组件化

## 轮播组件

### 引入gesture

1. 将root绑定事件

     ```javascript
      enableGesture(this.root);
     ```

2. 将原本的事件改为gesture事件

     ```javascript
      this.root.addEventListener("start", event => {
        timeline.pause();
        clearInterval(handler)
        if (Date.now() - t < 500) {
          let progress = (Date.now() - t ) / 500;
          ax = ease(progress) * 500 - 500;
        } else {
          ax = 0
        }
      })
      ...
     ```

### 引入timeline、ease

1. 初始化时间线

   ```javascript
    let timeline = new Timeline();
    timeline.start();
   ```

2. 加入Animation

   ```javascript
    timeline.add(new Animation(current.style, "transform", -this[STATE].position * 500, -500 - this[STATE].position*500, 500, 0, ease, v => `translateX(${v}px)`))
    timeline.add(new Animation(next.style, "transform", 500 -nextIndex * 500, - nextIndex*500, 500, 0, ease, v => `translateX(${v}px)`))
   ```


### 给组件增加属性

1. 给组件增加state，并且封装。 这里的state相当于内部状态，attribute相当于上层传入的属性。

   ```javascript
   // framework.js
   // 初始化
   this[ATTRIBUTE] = Object.create(null);//create(null)可以避免Object原型链的干扰
   this[STATE] = Object.create(null);
   // 更改设置
   setAttribute(name, value) {
     this[ATTRIBUTE][name] = value
   }
   ```

2. 将position放入state中

   ```javascript
   this[STATE].position = 0;
   ```

3. 从ATTRIBUTE中读取属性

   ```javascript
   for (let record of this[ATTRIBUTE].data) {
   ```

4. 暴露事件

   ```javascript
   // Component
   triggerEvent(type, args) {
     let name = "on"+type.replace(/^[\s\S]/, s => s.toUpperCase())
     this[ATTRIBUTE][name](new CustomEvent(type, {detail:args}));
   }
   // carousel.js 增加点击事件
   this.root.addEventListener("tap", event => {
     this.triggerEvent("click", {
       data: this[ATTRIBUTE].data[this[STATE].position],
       position: this[STATE].position
     })
   })
   // 增加切换图片事件
   this.triggerEvent("change", {
     position: this[STATE].position
   })
   ```

### 设计两种children 类型的组件

1. 内容型children

   ```javascript
   // 使用方式
   <Button>
     <span>children</span>
   </Button>
   export class Button extends Component {
     constructor() {
       super();
     }
     // 加入一个子容器
     render() {
       this.childContainer = <div />
       this.root = (
         <div>
           {this.childContainer}
         </div>
       ).render();
       return this.root;
     }
     // 覆写appendchild 加入到自己的子容器中
     appendChild(child){
       if(!this.childContainer) {
         this.render();
       }
       this.childContainer.appendChild(child)
     }
   }
   ```

2. 模版型children

```javascript
// 使用方式
<List data={d}>{
	(data) => <div>data.v</div>  
}
</List>
export class List extends Component {
  constructor() {
    super();
  }
  render() {
    // 通过data.map 来调用template 生成children
    this.children = this[ATTRIBUTE].data.map(this.template)
    this.root = (
      <div>
        {this.children}
      </div>
    ).render();
    return this.root;
  }
  appendChild(child){
    this.template = child;
    this.render();
  }
}
```

还需要在createElement增加对 对象children的支持

```javascript
let processChildren = (children) => {
  for (let child of children) {
    if(typeof child === "object" && child instanceof Array) {
      processChildren(child);
      continue;
    } else if (typeof child === 'string') {
      child = new TextWrapper(child);
    }
    element.appendChild(child)
  }
}
processChildren(children);
```

