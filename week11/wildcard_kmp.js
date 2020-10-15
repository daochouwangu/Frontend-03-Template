function find(source, pattern) {
  let stars = [];
  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] === '*') {
      stars.push(i);
    }
  }
  // 特殊情况，没用*
  if (stars.length === 0) {
    let i;
    for (i = 0; i < pattern.length; i++) {
      if (pattern[i] !== source[i] && pattern[i] !== "?") {
        return false;
      }
    }
    return i===pattern.length && i === source.length;
  }
  let i = 0;
  let lastIndex = stars.shift();
  // 处理第一个星号之前的字符串匹配
  for (i = 0; i < lastIndex; i++) {
    if (pattern[i] !== source[i] && pattern[i] !== "?") {
      return false;
    }
  }
  let start = lastIndex;
  let end = lastIndex;
  for (let p = 0; p < stars.length; p++) {
    start = end + 1;
    end = stars[p];
    // 连续星号， i+1
    if (start === end) {
      i++;
      continue;
    }
    let subPattern = pattern.slice(start, end);
    // console.log(subPattern);
    lastIndex = kmpPlus(source.slice(i), subPattern);
    // console.log(i, lastIndex);
    if (lastIndex === -1) {
      return false;
    }
    i += lastIndex;
  }
  if(i === source.length) {
      return false;
  }
  // 倒着匹配最后的*后面的字符串
  for (let j = 0; j <= source.length - lastIndex && pattern[pattern.length - j] != "*";j++) {
    if (pattern[pattern.length - j] !== source[source.length - j] && pattern[pattern.length - j] !== "?") {
      return false;
    }
  }
  return true;
}
// if not found return -1
// if found , return last index
function kmpPlus(source, pattern) {
  let table = Array(pattern.length).fill(0);
  {
    let i = 1, j = 0;
    while (i < pattern.length) {
      if (pattern[i] === pattern[j] || pattern[j] === '?') {
        i++;
        j++;
        table[i] = j;
      } else {
        if (j > 0) {
          j = table[j];
        } else {
          i++;
        }
      }
    }
  }
  {
    let i = 0, j = 0;
    while (i < source.length) {
      if (source[i] === pattern[j] || pattern[j] === '?') {
        i++;
        j++;
        if (j === pattern.length) {
          return i;
        }
      } else {
        if (j > 0) {
          j = table[j];
        } else {
          i++;
        }
      }
    }
    if (i === source.length && j === pattern.length) {
      return i
    } else {
      return -1;
    }
  }
}
