const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const testCaseNum = Number(input[0]);
const results = [];

for (let t = 1; t <= testCaseNum; t++) {
  const test = input[t];
  const leftStack = [];
  const rightStack = [];

  for (let i = 0; i < test.length; i++) {
    if (test[i] === "<") {
      if (leftStack.length > 0) {
        rightStack.push(leftStack.pop()); // 왼쪽 스택에서 꺼내서 오른쪽으로 이동
      }
    } else if (test[i] === ">") {
      if (rightStack.length > 0) {
        leftStack.push(rightStack.pop()); // 오른쪽 스택에서 꺼내서 왼쪽으로 이동
      }
    } else if (test[i] === "-") {
      if (leftStack.length > 0) {
        leftStack.pop(); // 왼쪽 스택에서 삭제
      }
    } else {
      leftStack.push(test[i]); // 문자 입력 (왼쪽 스택에 추가)
    }
  }

  // `leftStack` + `rightStack.reverse()` 형태로 최종 결과 생성
  results.push(leftStack.join("") + rightStack.reverse().join(""));
}

console.log(results.join("\n"));