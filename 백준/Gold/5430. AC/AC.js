// 문제 링크: https://www.acmicpc.net/problem/5430

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let T = Number(input[0]);
let index = 1;
let result = [];

let i = 0;
while (i < T) {
  let p = input[index++];
  let n = Number(input[index++]);
  let arrStr = input[index++];

  let arr = arrStr.length > 2 ? arrStr.slice(1, -1).split(",").map(Number) : [];

  let isReversed = false;
  let front = 0,
    back = n - 1;
  let isError = false;

  for (let cmd of p) {
    if (cmd === "R") {
      isReversed = !isReversed;
    } else {
      if (front > back) {
        isError = true;
        break;
      }
      if (isReversed) back--;
      else front++;
    }
  }

  if (isError) {
    result.push("error");
  } else {
    let output = arr.slice(front, back + 1);
    if (isReversed) output.reverse();
    result.push(`[${output.join(",")}]`);
  }

  i++;
}

console.log(result.join("\n"));
