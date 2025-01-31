const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let N = Number(input[0]); // 단어 개수
let count = 0; // 좋은 단어 개수

for (let i = 1; i <= N; i++) {
  let word = input[i].trim();
  let stack = [];

  for (let char of word) {
    if (stack.length > 0 && stack[stack.length - 1] === char) {
      stack.pop(); // 같은 글자면 제거
    } else {
      stack.push(char); // 다른 글자면 스택에 추가
    }
  }

  if (stack.length === 0) count++; // 스택이 비었으면 좋은 단어
}

console.log(count);