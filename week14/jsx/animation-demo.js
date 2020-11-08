import {Timeline, Animation} from './animation'
let tl = new Timeline();
let isStart = true;
tl.start();
tl.add(new Animation(document.querySelector("#el").style, "transform", 0, 500, 3000,0, null, v => `translateX(${v}px)`))
document.querySelector("#pause-btn").addEventListener('click', () => {
  if(isStart) {
    tl.pause();
    document.querySelector("#pause-btn").textContent = '恢复'
  } else {
    tl.resume();
    document.querySelector("#pause-btn").textContent = '暂停'
  }
  isStart = !isStart
})
