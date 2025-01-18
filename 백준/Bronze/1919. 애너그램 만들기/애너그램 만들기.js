const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = String(fs.readFileSync(filePath)).trim().split("\n");
const word1 = input[0];
const word2 = input[1];

function getCharCount(str) {
  const count = new Array(26).fill(0);
  for (const char of str) {
    count[char.charCodeAt(0) - 97]++;
  }
  return count;
}

const count1 = getCharCount(word1);
const count2 = getCharCount(word2);

let deleteCount = 0;
for (let i = 0; i < 26; i++) {
  deleteCount += Math.abs(count1[i] - count2[i]);
}

console.log(deleteCount);