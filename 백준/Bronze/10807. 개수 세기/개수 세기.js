let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);
let list = input[1].split(' ').map(Number);
let v = Number(input[2]);
let count = 0;

for (let i = 0; i < list.length; i++) {
  if (list[i] === v) {
    count += 1;
  }
}

console.log(count);
