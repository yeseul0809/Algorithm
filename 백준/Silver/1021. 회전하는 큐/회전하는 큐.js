const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const targets = input[1].split(" ").map(Number);

let deque = Array.from({ length: N }, (_, i) => i + 1);
let operationCount = 0;

for (let target of targets) {
  let idx = deque.indexOf(target);
  let leftMoves = idx;
  let rightMoves = (deque.length - idx) % deque.length; // 수정

  if (leftMoves <= rightMoves) {
    for (let i = 0; i < leftMoves; i++) {
      deque.push(deque.shift());
      operationCount++;
    }
  } else {
    for (let i = 0; i < rightMoves; i++) {
      deque.unshift(deque.pop());
      operationCount++;
    }
  }
  deque.shift();
}

console.log(operationCount);