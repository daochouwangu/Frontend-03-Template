
let names = require("./names.json")
// const names = require("./test.json")
const got = require('got')
const jsdom = require('jsdom')
const fs = require('fs')
const { timeEnd } = require("console")
const { default: timer } = require("@szmarczak/http-timer/dist/source")
const {JSDOM} = jsdom

console.time("All")
let res = require("./apis.json");
let missions = [];
// let preFix = 
let preFixs = ["https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/",
"https://developer.mozilla.org/en-US/docs/Web/API/",
"https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/",
"https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/"];
let countS = 0;
let countAll = names.length;
names = filterNames(names, res);
console.log(names.length);
(async () => {
  // await Promise.allSettled(names.map((e, i) => {
  //   return createMission(e)
  // }))
  writeJson();
  writeHTML();
})()
function filterNames(names,res) {
  let k = Object.getOwnPropertyNames(res);
  let a = [];
  for (let i of k) {
    a = a.concat(res[i].map(o => o.name));
  }
  return names.filter((n) => !a.includes(n))
}
async function createMission(name) {
  return await getPage(name);
}
async function getPage(name) {
  let dom = null;
  let i = 0;
  let url ="";
  while(!dom && i < preFixs.length) {
    try {
      url = preFixs[i] + name;
      // console.log("open "+url+" ing...")
      // console.time("single"+url)
      dom = await JSDOM.fromURL(url);
      // console.timeEnd("single"+url)
    } catch(err) {
      if (i === preFixs.length - 1){
        console.log("error: "+err.name + "  "+name)
      }
    }
    i++;
  }
  let doc = dom.window.document
  // console.log(body)
  let a = doc.querySelector(".standard-table td a")
  countS++;
  if (!a) {
    console.log("error: No spec  " + url)
    let obj = {
      name,
      href: '#',
      standard: "Undefined"
    }
    if (res[obj.standard]) {
      let v = res[obj.standard];
      res[obj.standard] = [...v, obj];
    } else {
      res[obj.standard]=[obj];
    }
    return;
  }
  
  let obj = {
    name,
    href: a.href,
    standard: a.firstChild.textContent
  }
  if (res[obj.standard]) {
    let v = res[obj.standard];
    res[obj.standard] = [...v, obj];
  } else {
    res[obj.standard]=[obj];
  }

}

function writeJson() {
  fs.writeFileSync("./apis.json", JSON.stringify(res), (err) => console.log(err))
}
function writeHTML() {
  console.log("writing...")
  console.log(`${names.length}/${countAll}/${countS}`)
  console.timeEnd("All")
  let str = getData();
  let htmlStr = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=<device-width>, initial-scale=1.0">
    <title>APIS</title>
    <link rel="stylesheet" type="text/css" href="./index.css"/> 
  </head>
  <body>
    <main>
    <h1>浏览器API大全
    </h1>
    ${str}
  </main>
</body>
</html>`

  fs.writeFileSync("./index.html", htmlStr, (err) => console.log(err))
}
function getData() {
  let str = "<div class='notIn'>未收录: "
  names.forEach((n) => str+=`<span>${n}</span>\n`)
  str+="</div>"
  str+="<table><thead></thead><tbody>"
  str = Object.getOwnPropertyNames(res).reduce((acc, cur) => {
    acc += `<tr><td class="standard" colspan='2'>${cur}</td></tr>`;
    let v = res[cur];
    v.map((o) => {
      acc += `<tr><td>${o.name}</td><td><a href="${o.href}">${o.href}</a></td></tr>\n`
    })
    return acc;
  },str)
  str+="</tbody></table>"
  return str;
}
