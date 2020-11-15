
export class Dispatcher{
  constructor(element) {
    this.element = element
  }
  dispatch(type, properties) {
    let event = new Event(type);
    for (let name in properties) {
      event[name] = properties[name]
    }
    this.element.dispatchEvent(event)
  }
}

// listen => recognize => dispatch
// new Listener(new Recognizer(dispatch))
export class Listener {
  constructor(element, recognizer){
    let contexts = new Map()
    let isListeningMouse = false;
    element.addEventListener("mousedown", (event)=> {
      // event.button 1~5 表示按下哪个键
      let context = Object.create(null);
      contexts.set(`mouse${1 << event.button}`, context);
      recognizer.start(event, context)
      let mouseMove = event => {
        let button = 1;
        while(button <= event.buttons) {
          // 一个坑 buttons里的第二位和第四位是反的
          if ( button & event.buttons) {
            let key;
            if(button === 2) {
              key = 4;
            }else if(button === 4) {
              key = 2;
            } else {
              key = button;
            }
            let context = contexts.get("mouse"+key)
            recognizer.move(event, context);
          }
          button = button << 1;
        }
      }
      let mouseUp = event => {
        let context = contexts.get("mouse"+(1<<event.button));
        recognizer.end(event, context);
        contexts.delete("mouse"+(1<<event.button))
        if(event.buttons === 0) {
          document.removeEventListener("mousemove", mouseMove);
          document.removeEventListener("mouseup", mouseUp);
          isListeningMouse = false;
        }
      }
      if(!isListeningMouse) {
        document.addEventListener("mousemove", mouseMove);
        document.addEventListener("mouseup", mouseUp);
        isListeningMouse = true;
      }
      
      
    })
    element.addEventListener("touchstart", event => {
      for(let touch of event.changedTouches) {
        let context = Object.create(null);
        contexts.set(touch.identifier, context);
        recognizer.start(touch, context);
      }
    })
    
    element.addEventListener("touchmove", event => {
      for(let touch of event.changedTouches) {
        let context = contexts.get(touch.identifier);
        recognizer.move(touch, context)
      }
    })
    
    element.addEventListener("touchend", event => {
      for(let touch of event.changedTouches) {
        let context = contexts.get(touch.identifier);
        recognizer.end(touch, context)
        contexts.delete(touch.identifier)
      }
    })
    // 被打断,比如弹窗
    element.addEventListener("touchcancel", event => {
      for(let touch of event.changedTouches) {
        let context = contexts.get(touch.identifier);
        recognizer.cancel(touch, context)
        contexts.delete(touch.identifier)
      }
    })
  }
}
export class Recognizer {
  constructor(dispatcher) {
    this.dispatcher = dispatcher
  }
  start(point, context) {
    // 初始化起始手势位置
    context.startX = point.clientX;
    context.startY = point.clientY;
    context.points = [{
      t: Date.now(),
      x: point.clientX,
      y: point.clientY
    }]
    // 初始化
    context.isPan = false;
    context.isTap = true;
    context.isPress = false;
    // 延时0.5秒， 触发则是长按
    context.handler = setTimeout(() => {
      context.isTap = false;
      context.isPan = false;
      context.isPress = true;
      this.dispatcher.dispatch("press", {})
      context.handler = null;
    }, 500)
  }
  move(point, context) {
    let dx = point.clientX - context.startX, dy = point.clientY - context.startY;
    context.isVertical = Math.abs(dx) < Math.abs(dy)
    // 第一次移动
    if (!context.isPan && dx ** 2 + dy ** 2 > 100) {
      context.isTap = false;
      context.isPan = true;
      context.isPress = false;
      this.dispatcher.dispatch("panstart", {
        startX: context.startX,
        startY: context.startY,
        clientX: point.clientX,
        clientY: point.clientY,
        isVertical: context.isVertical
      })
      clearTimeout(context.handler);
    }
    // 移动
    if(context.isPan) {
      this.dispatcher.dispatch("pan", {
        startX: context.startX,
        startY: context.startY,
        clientX: point.clientX,
        clientY: point.clientY,
        isVertical: context.isVertical
      })
    }
    context.points = context.points.filter(point => Date.now() - point.t < 500)
    context.points.push({
      t: Date.now(),
      x: point.clientX,
      y: point.clientY
    })
    
  }
  end(point,context) {
    // 如果是单击
    if(context.isTap) {
      this.dispatcher.dispatch("tap", {})
      clearTimeout(context.handler)
    }
    // 如果是长按
    if(context.isPress) {
      this.dispatcher.dispatch("pressend", {})
    }
    context.points = context.points.filter(point => Date.now() - point.t < 500)
    let d,v;
    if(!context.points.length) {
      v = 0;
    }
    d = Math.sqrt((point.clientX - context.points[0].x ) ** 2 + 
        (point.clientY - context.points[0].y ) ** 2);
    v = d / (Date.now() - context.points[0].t);
    if (v > 1.5) {
      this.dispatcher.dispatch("flick", {
        startX: context.startX,
        startY: context.startY,
        clientX: point.clientX,
        clientY: point.clientY,
        isVertical: context.isVertical,
        isFlick: context.isFlick,
        velocity: v
      })
      context.isFlick = true;
    } else {
      context.isFlick = false;
    }
    // 如果是移动
    if(context.isPan) {
      this.dispatcher.dispatch("panend", {
        startX: context.startX,
        startY: context.startY,
        clientX: point.clientX,
        clientY: point.clientY,
        isVertical: context.isVertical,
        isFlick: context.isFlick
      })
    }
  }
  cancel(point,context) {
    this.dispatcher.dispatch("cancel", {})
  }
}
export function enableGesture(element) {
  new Listener(element, new Recognizer(new Dispatcher(element)))
}
