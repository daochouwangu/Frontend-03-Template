function find(source, pattern) {
  let starCount = 0;
  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] === '*') {
      starCount++;
    }
  }
  // 特殊情况，没用*
  if (starCount === 0) {
    let i;
    for (i = 0; i < pattern.length; i++) {
      if (pattern[i] !== source[i] && pattern[i] !== "?") {
        return false;
      }
    }
    return i===pattern.length && i === source.length;
  }
  let i = 0;
  let lastIndex = 0;
  // 处理第一个星号之前的字符串匹配
  for (i = 0; pattern[i] !== "*"; i++) {
    if (pattern[i] !== source[i] && pattern[i] !== "?") {
      return false;
    }
  }
  lastIndex = i;
  for (let p = 0; p < starCount - 1; p++) {
    i++;
    let subPattern = "";
    while(pattern[i] !== '*') {
      subPattern += pattern[i];
      i++;
    }
    if (subPattern === "") {
        lastIndex++;
        continue;
    }
    let reg = new RegExp(subPattern.replace(/\?/g, "[\\s\\S]"), "g");
    reg.lastIndex = lastIndex;
    if(!reg.exec(source) || reg.lastIndex === lastIndex) {
      return false;
    }
    lastIndex = reg.lastIndex;
  }
  if(lastIndex === source.length) {
      return false;
  }
  // 倒着匹配最后的*后面的字符串
  for (let j = 0; j <= source.length - lastIndex && pattern[pattern.length - j] != "*";j++) {
    // if (pattern.length - j < lastIndex || source.length - j < lastIndex) {
    //     return false;
    // }
    if (pattern[pattern.length - j] !== source[source.length - j] && pattern[pattern.length - j] !== "?") {
      return false;
    }
  }
  return true;
}
