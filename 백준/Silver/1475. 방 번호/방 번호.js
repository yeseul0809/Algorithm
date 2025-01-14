const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

const count = new Array(10).fill(0);

for (let i = 0; i < input.length; i++) {
  const num = Number(input[i]);
  count[num]++;
}

count[6] = Math.ceil((count[6] + count[9]) / 2);
count[9] = 0;

const answer = Math.max(...count);
console.log(answer);