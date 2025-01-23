const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n"); 
const N = Number(input[0]);
const queue = [];
const output = [];

for (let i = 1; i <= N; i++) {
  const command = input[i].trim().split(" ");

  if (command[0] === "push") {
    queue.push(Number(command[1]));
  } else if (command[0] === "front") {
    output.push(queue.length > 0 ? queue[0] : -1);
  } else if (command[0] === "back") {
    output.push(queue.length > 0 ? queue[queue.length - 1] : -1);
  } else if (command[0] === "size") {
    output.push(queue.length);
  } else if (command[0] === "empty") {
    output.push(queue.length === 0 ? 1 : 0);
  } else if (command[0] === "pop") {
    output.push(queue.length > 0 ? queue.shift() : -1);
  }
}

console.log(output.join("\n"));
