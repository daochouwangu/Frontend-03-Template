function kmp(source, pattern) {
  let table = Array(pattern.length).fill(0);
  {
    let i = 1, j = 0;
    while (i < pattern.length) {
      if (pattern[i] === pattern[j]) {
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
      if (source[i] === pattern[j]) {
        i++;
        j++;
        if (j === pattern.length) {
          return true;
        }
      } else {
        if (j > 0) {
          j = table[j];
        } else {
          i++;
        }
      }
    }
    return i === source.length && j === pattern.length;
  }
}
debugger;
let a = kmp("abcabcabdef", "abcabcabde")
console.log(a)
