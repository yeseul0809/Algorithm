const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = String(fs.readFileSync(filePath)).trim().split("\n");

const N = Number(input[0]);
const sequence = input.slice(1).map(Number);
let stack = [];
let answer = [];
let current = 1; // 현재 push할 숫자 (1부터 시작)

for (const i of sequence) {
  while (current <= i) {
    // i가 나올 때까지 push
    stack.push(current);
    answer.push("+");
    current++; // 다음 숫자로 증가
  }

  if (stack[stack.length - 1] === i) {
    stack.pop();
    answer.push("-");
  } else {
    console.log("NO");
    return;
  }
}

console.log(answer.join("\n"));