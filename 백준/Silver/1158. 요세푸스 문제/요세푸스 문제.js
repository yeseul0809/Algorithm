const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const N = Number(input[0]);
const K = Number(input[1]);
const array = Array.from({ length: N }, (_, i) => i + 1);
let idx = 0;
const answer = [];

while (array.length > 0) {
  const currenIdx = (idx + K - 1) % array.length;
  answer.push(array[currenIdx]);
  array.splice(currenIdx, 1);
  idx = currenIdx;
}

console.log(`<${answer.join(", ")}>`);