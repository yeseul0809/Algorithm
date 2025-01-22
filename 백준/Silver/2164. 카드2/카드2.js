const fs = require("fs");
const N = Number(fs.readFileSync("/dev/stdin").toString().trim());

let queue = Array.from({ length: N }, (_, i) => i + 1);
let index = 0;

while (queue.length - index > 1) {
    index++; // 맨 앞 카드 버리기 (shift 대신 index 증가)
    queue.push(queue[index]); // 두 번째 카드를 뒤로 이동
    index++; // 다시 index 증가
}

console.log(queue[index]); // 마지막 남은 카드 출력
