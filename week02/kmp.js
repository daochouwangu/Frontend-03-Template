/* 使用状态机实现字符匹配
* 暂未加入kmp算法
* input 搜索字符串string, 模式字符串 pattern
* return true || false 表示在string中是否含有pattern
*/
function hasStr(str, p) {
  let states = [];
  let result = false;
  for (let i = 0; i < p.length - 1;i++) {
    states.push((char) => {
      //console.log(char+"==="+p[i])
      if(char === p[i]) {
        return states[i+1];
      }
      return states[0]
    })
  }
  states.push((char) => {
    if(char === p[p.length - 1]) {
      result = true;
      return this;
    }
    return states[0](char)
  })
  let state = states[0]
  for (let i = 0; i < str.length; i++) {
    state = state(str[i])
    if (result) return result;
  }
  return result;
}
console.log(hasStr("abcdefk","dek"))
/*
kmp算法思想：找到模式字符串的特征，建立next数组
所以要根据next数组 来修改状态机
abacababacabababc
    abababc
            a    b    a    b    a    b    c
next:      -1    0    1    2    3    4    0
状态机： 0   0    0()  0    0    3()  0
