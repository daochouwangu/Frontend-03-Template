function getStyle(element) {
  if (!element.style) {
    element.style = {}
  }
  for (let prop in element.computedStyle) {
    let p = element.computedStyle.value;
    element.style[prop] = element.computedStyle[prop].value
    if (element.style[prop].toString().match(/px$/)) {
      element.style[prop] = parseInt(element.style[prop]);
    }
    if (element.style[prop].toString().match(/^[0-9\.]+$/)) {
      element.style[prop] = parseInt(element.style[prop])
    }
  }
  return element.style
}

function layout(element) {
  if (!element.computedStyle)
    return ;
  let elementStyle = getStyle(element);
  // 只计算flex
  if (elementStyle.display !== 'flex') {
    return
  }
  // 只算element 不算text
  let items = element.children.filter(e => e.type === 'element')
  // 支持order
  items.sort(function(a, b) {
    return (a.order || 0) - (b.order || 0);
  })
  // 同意空的改为null
  let style = elementStyle;
  ['width','height'].forEach(size => {
    if(style[size] === 'auto' || style[size] === '') {
      style[size] = null;
    }
  })
  // 默认属性
  if (!style.flexDirection || style.flexDirection === 'suto') {
    style.flexDirection = 'row';
  }
  if (!style.alignItems || style.alignItems === 'auto') {
    style.alignItems = 'stretch';
  }
  if (!style.justifyContent || style.justifyContent === 'auto') {
    style.justifyContent = 'flex-start'
  }
  if (!style.flexWrap || style.flexWrap === 'auto') {
    style.flexWrap = 'nowrap'
  }
  if (!style.alignContent || style.alignContent === 'auto') {
    style.alignContent = 'stretch'
  }
  let mainSize, mainStart, mainEnd, mainSign, mainBase,
      crossSize, crossStart, crossEnd, crossSign, crossBase;
  if (style.flexDirection === 'row') {
    mainSize = 'width';
    mainStart = 'left';
    mainEnd = 'right';
    mainSign = +1;
    mainBase = 0;

    crossSize = 'height';
    crossStart = 'top';
    crossEnd = 'bottom';
  }
  if (style.flexDirection === 'row-reverse') {
    mainSize = 'width';
    mainstart = 'right';
    mainEnd = 'left';
    mainSign = -1;
    mainBase = style.width;

    crossSize = 'height';
    crossStart = 'top';
    crossEnd = 'bottom';
  }
  if (style.flexDirection === 'column') {
    mainSize = 'height';
    mainStart = 'top';
    mainEnd = 'bottom';
    mainSign = +1;
    mainBase = 0;

    crossSize = 'width';
    crossStart = 'left';
    crossEnd = 'right';
  }
  if (style.flexDirection === 'column') {
    mainSize = 'height';
    mainStart = 'bottom';
    mainEnd = 'top';
    mainSign = -1;
    mainBase = style.height;

    crossSize = 'width';
    crossStart = 'left';
    crossEnd = 'right';
  }
  if (style.flexWrap === 'wrap-reverse') {
    [crossStart, crossEnd] = [crossEnd, crossStart];
    crossSign = -1;
    //TODO ? 为什么没有crossBase
  } else {
    crossBase = 0;
    crossSign = 1;
  }
  // 父元素没设置主轴尺寸
  let isAutoMainSize = false;
  if (!style[mainSize]) {
    elementStyle[mainSize] = 0;
    for (let i = 0;i<items.length;i++) {
      let item = items[i];
      let itemStyle = getStyle(item)
      // 第二个条件没看到
      if (itemStyle[mainSize] !== null || itemStyle[mainSize] !== (void 0)) {
        elementStyle[mainSize] += itemStyle[mainSize]
      }
    }
    isAutoMainSize = true;
  }
  let flexLine = [];
  let flexLines = [flexLine];

  let mainSpace = elementStyle[mainSize];
  let crossSpace = 0;

  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    let itemStyle = getStyle(item);

    if (itemStyle[mainSize] === null) {
      itemStyle[mainSize] = 0;
    }
    // flex元素 可以全部加在同一行
    if (itemStyle.flex) {
      flexLine.push(item);
    } else if (style.flexWrap === 'nowrap' && isAutoMainSize) {
      mainSpace -= itemStyle[mainSize];
      // 计算交叉轴的尺寸
      if (itemStyle[crossSize] !== null && itemStyle[crossSize] !== (void 0)) {
        crossSpace = Math.max(crossSpace, itemStyle[crossSize]);
      }
      flexLine.push(item)
    } else {
      // 过大的元素强制适配
      if (itemStyle[mainSize] > style[mainSize]) {
        itemStyle[mainSize] = style[mainSize]
      }
      // 空间不足 换行
      if (mainSpace < itemStyle[mainSize]) {
        flexLine.mainSpace = mainSpace;
        flexLine.crossSpace = crossSpace;
        // 建立新行
        flexLine = [item];
        flexLines.push(flexLine);
        mainSpace = style[mainSIze];
        crossSpace = 0;
      } else {
        flexLine.push(item);
      }
      if (itemStyle[crossSize] !== null && itemStyle[crossSize] !== (void 0)) {
        crossSpace = Math.max(crossSpace, itemStyle[crossSize]);
      }
      mainSpace -= itemStyle[mainSize]
    }
  }


  flexLine.mainSpace = mainSpace;

  if (style.flexWrap === 'no-wrap' || isAutoMainSize) {
    flexLine.crossSpace = (style[crossSize] !== undefined) ? style[crossSize] : crossSpace
  } else {
    flexLine.crossSpace = crossSpace
  }

  if (mainSpace < 0) {
    // 如果空间不够，则等比压缩
    let scale = style[mainSize] / (style[mainSize] - mainSpace);
    let currentMain = MainBase;
    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      let itemStyle = getStyle(item);

      if (itemStyle.flex) {
        itemStyle[mainSize] = 0;
      }

      itemStyle[mainSize] = itemStyle[mainSize] * scale;

      itemStyle[mainStart] = currentMain;
      itemStyle[mainEnd] = itemStyle[mainStart] + itemStyle[mainSign] * itemStyle[mainSize]
      currentMain = itemStyle[mainEnd]
    }

  } else {
    // flex元素均匀分布（按flex的值，比如1，2，1则分别占25 50 25%
    flexLines.forEach(function (items) {
      var mainSpace = items.mainSpace;
      var flexTotal = 0;
      // 计算总的flex值
      for (let i = 0; i < items.length; i++) {
        let item = items[i];
        let itemStyle = getStyle(item);

        if ((itemStyle.flex !== null) && itemStyle.flex !== (void 0)) {
          flexTotal += itemStyle.flex;
          continue;
        }
      }
      
      if (flexTotal > 0) {
        // 重新计算flex元素大小
        let currentMain = mainBase;
        for (let i = 0; i < items.length; i++) {
          let item = items[i];
          let itemStyle = getStyle(item);
          if (itemStyle.flex) {
            itemStyle[mainSize] = mainSpace * (itemStyle.flex / flexTotal)
          }
          itemStyle[mainStart] = currentMain;
          itemStyle[mainEnd] = currentMain + mainSign * itemStyle[mainSize]
          currentMain = itemStyle[mainEnd];
        }
      } else {
        // 没有flex元素，则用justifyContent属性来计算
        let currentMain = mainBase,step = 0
        if (style.justifyContent === 'flex-start') {
          currentMain = mainBase;
          step = 0;
        }
        if (style.justifyContent === 'flex-end') {
          currentMain = mainSpace * mainSign + mainBase;
          step = 0;
        }
        if (style.justifyContent === 'center') {
          currentMain = mainSpace / 2 * mainSign + mainBase;
          step = 0;
        }
        if (style.justifyContent === 'space-between') {
          step = mainSpace / (items.length - 1) * mainSign;
          currentMain = mainBase;
        }
        if (style.justifyContent === 'space-around') {
          step = mainSpace / items.length * mainSign
          currentMain = step / 2 + mainBase;
        }
        for (let i = 0; i < items.length; i++) {
          let item = items[i];
          itemStyle[mainStart] = currentMain;
          itemStyle[mainEnd] = itemStyle[mainStart] + mainSign * itemStyle[mainSize];
          currentMain = itemStyle[mainEnd] + step;
        }
      }
    })
  }

  if (!style[crossSize]) {
    crossSpace = 0;
    elementStyle[crossSize] = 0;
    for (let i = 0;i < flexLines.length; i++) {
      elementStyle[crossSize] += flexLines[i].crossSpace
    }
  } else {
    crossSpace = style[crossSize];
    for (let i = 0; i < flexLines.length; i++) {
      crossSpace -= flexLines[i].crossSpace;
    }
  }


  if (style.flexWrap === 'wrap-reverse') {
    crossBase = style[crossSize];
  } else {
    crossBase = 0;
  }
  let lineSize = style[crossSize] / flexLines.length;

  let step;
  if (style.alignContent === 'flex-start') {
    crossBase += 0;
    step = 0;
  }
  if (style.alignContent === 'flex-end') {
    crossBase += crossSign * crossSpace;
    step = 0;
  }
  if (style.alignContent === 'center') {
    crossBase += crossSign * crossBase / 2;
    step = 0;
  }
  if (style.alignContent === 'space-between') {
    crossBase+= 0;
    step = crossSpace / (flexLines.length - 1);
  }
  if (style.alignContent === 'space-around') {

    step = crossSpace / (flexLines.length);
    crossBase += crossSign * step / 2;
  }
  if (style.alignContent === 'stretch') {
    crossBase += 0;
    step = 0;
  }
  flexLines.forEach(function (items) {
    let lineCrossSize = style.alignContent === 'stretch' ?
        items.crossSpace + crossSpace / flexLines.length :
        items.crossSpace;
    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      let itemStyle = getStyle(item);

      let align = itemStyle.alignSelf || style.alignItems;
      if (item === null) {
        itemStyle[crossSize] = (align === 'stretch') ?
          lineCrossSize : 0;
      }
      // 高度没定义则占满
      if (itemStyle[crossSize] === null || itemStyle[crossSize] === (void 0) ) {
        itemStyle[crossSize] = (align === 'stretch') ? lineCrossSize : 0;
      }
      if (align === 'flex-start') {
        itemStyle[crossStart] = crossBase;
        itemStyle[crossEnd] = itemStyle[crossStart] + crossSign * itemStyle[crossSize];
      }

      if (align === 'flex-end') {
        itemStyle[crossEnd] = crossBase + crossSign * lineCrossSize;
        itemStyle[crossStart] = itemStyle[crossEnd] - crossSign * itemStyle[crossSize];
      }

      if (align === 'center') {
        itemStyle[crossStart] = crossBase + crossSign * (lineCrossSize - itemStyle[crossSize]) / 2;
        itemStyle[crossEnd] = itemStyle[crossStart] + crossSign * itemStyle[crossSize];
      }

      if (align === 'stretch') {
        itemStyle[crossStart] = crossBase;
        itemStyle[crossEnd] = crossBase + crossSign * itemStyle[crossSize];
        //TODO crossEnd计算可能有误
        itemStyle[crossSize] = crossSign * itemStyle[crossSize]
      }
    }
    crossBase += crossSign * (lineCrossSize + step);
  });
  console.log(items);
}


module.exports = layout
