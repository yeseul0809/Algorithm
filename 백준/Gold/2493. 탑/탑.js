const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = String(fs.readFileSync(filePath)).trim().split("\n");

const N = Number(input[0]);
const towers = input[1].split(" ").map((value) => +value);

let result = [];
let stack = [];
for (let i = 0; i < N; i++) {
  let current = towers[i];
  if (!stack.length) result.push(0);
  if (stack.length) {
    let nextStack = [];
    while (stack.length) {
      let [value, idx] = stack.pop();
      if (value >= current) {
        result.push(idx);
        nextStack.push([value, idx]);
        break;
      }
    }
    if (nextStack.length) {
      stack.push(...nextStack);
    } else {
      result.push(0);
    }
  }
  stack.push([current, i + 1]);
}

console.log(result.join(" "));