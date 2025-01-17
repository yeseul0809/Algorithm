const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const array = input[1].split(" ").map(Number);
const X = Number(input[2]);

array.sort((a, b) => a - b);

let left = 0;
let right = N - 1;
let answer = 0;

while (left < right) {
  let sum = array[left] + array[right];

  if (sum === X) {
    answer++;
    left++;
    right--;
  } else if (sum < X) {
    left++;
  } else {
    right--;
  }
}

console.log(answer);