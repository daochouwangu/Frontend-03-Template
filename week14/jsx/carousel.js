
import { Component } from "./framework.js";

function throlle(fn, delay) {
  let that = this;
  let flag = false;
  return function() {
    if (flag) {
      return;
    }
    flag = true;
    setTimeout(() => {
      fn.apply(that, arguments);
      flag = false;
    }, delay)
  }
}
export class Carousel extends Component{
  constructor() {
    super();
    this.attributes = Object.create(null);
  }
  setAttribute(name, value) {
    this.attributes[name] = value;
  }
  render() {
    this.root = document.createElement("div");
    this.root.classList.add("carousel");
    let children = this.root.children;
    for (let record of this.attributes.src) {
      let child = document.createElement("div");
      child.style.backgroundImage = `url('${record}')`;
      this.root.appendChild(child);
    }
    // 鼠标起始位置
    let startX;
    let clientWidth = 400//children[0].getBoundingClientRect();
    window.requestAnimationFrame(() => {
      clientWidth = children[0].getBoundingClientRect().width;
      moveChildToPrev(prevIndex);
    })
    let length = children.length;
    // 当前位置
    let currentIndex = 0;
    let nextIndex = 1;
    let prevIndex = (currentIndex - 1 + length) % length
    let mouseDown = false;
    let interval = setInterval(() => {
      moveToNext()
    }, 3000);
    function moveChildToPrev(index) {
      children[index].style.transition = "none";
      children[index].style.transform = `translateX(${-clientWidth-index * clientWidth}px)`;
      // children[index].style.transition = "";
    }
    function moveChildToNext(index) {
      children[index].style.transition = "none";
      children[index].style.transform = `translateX(${clientWidth-index * clientWidth}px)`;
      // children[index].style.transition = "";
    }
    function moveToNext() {
      children[currentIndex].style.transition = "";
      children[nextIndex].style.transition = "";
      children[currentIndex].style.transform = `translateX(${ -clientWidth - currentIndex * clientWidth}px)`;
      children[nextIndex].style.transform = `translateX(${- nextIndex * clientWidth}px)`;
      currentIndex = nextIndex
      nextIndex = (currentIndex + 1 ) % length;
      moveChildToNext(nextIndex)
    }
    function moveToPrev() {
      children[currentIndex].style.transition = "";
      children[prevIndex].style.transition = "";
      children[currentIndex].style.transform = `translateX(${ clientWidth - currentIndex * clientWidth}px)`;
      children[prevIndex].style.transform = `translateX(${ - prevIndex * clientWidth}px)`;
      currentIndex = prevIndex;
      prevIndex = (currentIndex - 1 + length) % length
      moveChildToPrev(prevIndex)
    }
    this.root.addEventListener('mousedown', (event) => {
      clearInterval(interval)
      startX = event.clientX;
      mouseDown = true;
      // 鼠标拖动事件
      let move = (event) => {
        if(!mouseDown) {
          return;
        }
        // 鼠标拖动的偏移量
        let x = event.clientX - startX;
        if (Math.abs(x) > clientWidth) {
          x = Math.sign(x) * clientWidth
        }
        // 只要显示当前和下一张图片即可
        // 首先将当前元素translate回到显示区域，即 -clientWidth * index
        // 然后将当前元素translate x 即 x
        children[currentIndex].style.transition = "";
        children[currentIndex].style.transform = `translateX(${-currentIndex * clientWidth + x}px)`;
        let sign = Math.sign(x)
        // 当x小于0时 说明显示的是下一个图片,index+1，整体往左移动，translate为负
        nextIndex = (currentIndex+1) % children.length;
        prevIndex = (currentIndex-1 + children.length) % children.length;
        if(x < 0) {
          children[nextIndex].style.transition = "";
          // translate回下一张图片 然后加上x
          children[nextIndex].style.transform = `translateX(${clientWidth - nextIndex * clientWidth + x}px)`;
        } else {
          children[prevIndex].style.transition = "";
          children[prevIndex].style.transform = `translateX(${-clientWidth - prevIndex * clientWidth + x}px)`;
        }
      }
      let throlleMove = throlle(move, 16)
      // 鼠标松开事件
      let up = (event) => {
        mouseDown = false;
        let x = event.clientX - startX;
        // 方向，-1向左，1向右
        let direction = Math.sign(x) === 1 ? "right" : "left";
        // 是否超过阈值
        let isMoveNext = Math.abs(x) > clientWidth / 2;
        console.log(isMoveNext)
        if (isMoveNext) {
          if (direction === "right") {
            moveToPrev();
          } else {
            moveToNext();
          }
        } else {
          // 恢复
          if (direction === "right") {
            children[currentIndex].style.transition = "";
            children[prevIndex].style.transition = "";
            children[currentIndex].style.transform = `translateX(${ - currentIndex * clientWidth}px)`;
            children[prevIndex].style.transform = `translateX(${- clientWidth - prevIndex * clientWidth}px)`;
          } else {
            children[currentIndex].style.transition = "";
            children[nextIndex].style.transition = "";
            children[currentIndex].style.transform = `translateX(${ - currentIndex * clientWidth}px)`;
            children[nextIndex].style.transform = `translateX(${clientWidth - nextIndex * clientWidth}px)`;
          }
        }
        document.removeEventListener("mousemove", throlleMove);
        document.removeEventListener("mouseup", up)
      }
      document.addEventListener("mousemove", throlleMove)
      document.addEventListener("mouseup", up)
    })
    return this.root
  }
  mountTo(parent){
    parent.appendChild(this.render())
  }
}
