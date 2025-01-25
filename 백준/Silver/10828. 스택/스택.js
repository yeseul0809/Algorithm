const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n"); 
const N = Number(input[0]);
const stack = [];
const output = [];

for (let i = 1; i <= N; i++) {
  const command = input[i].trim().split(" ");

  if (command[0] === "push") {
    stack.push(Number(command[1]));
  } else if (command[0] === "pop") {
    output.push(stack.length > 0 ? stack.pop() : -1);
  } else if (command[0] === "size") {
    output.push(stack.length);
  } else if (command[0] === "empty") {
    output.push(stack.length === 0 ? 1 : 0);
  } else if (command[0] === "top") {
    output.push(stack.length > 0 ? stack[stack.length - 1] : -1);
  }
}

console.log(output.join("\n"));
