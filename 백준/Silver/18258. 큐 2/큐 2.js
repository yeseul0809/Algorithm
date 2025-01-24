const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n"); 
const N = Number(input[0]);

let head = null;
let tail = null;
let length = 0;

const queue = {
  push: (value) => {
    const newNode = { value, next: null };
    if (length === 0) {
      head = newNode;
      tail = newNode;
    } else {
      tail.next = newNode;
      tail = newNode;
    }
    length++;
  },
  pop: () => {
    if (length === 0) return -1;
    const poppedValue = head.value;
    head = head.next;
    length--;

    if (length === 0) {
      head = null; 
      tail = null; 
    }
    return poppedValue;
  },
  size: () => length,
  empty: () => (length === 0 ? 1 : 0),
  front: () => (length === 0 ? -1 : head.value),
  back: () => (length === 0 ? -1 : tail.value),
};

const output = [];

for (let i = 1; i <= N; i++) {
  const [cmd, num] = input[i].split(" ");
  if (cmd === "push") queue.push(Number(num));
  else if (cmd === "pop") output.push(queue.pop());
  else if (cmd === "size") output.push(queue.size());
  else if (cmd === "empty") output.push(queue.empty());
  else if (cmd === "front") output.push(queue.front());
  else if (cmd === "back") output.push(queue.back());
}

console.log(output.join("\n"));