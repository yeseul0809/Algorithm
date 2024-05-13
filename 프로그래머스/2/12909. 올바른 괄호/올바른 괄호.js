function solution(s) {
  let arr = s.split("");
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(") {
      answer.push("(");
    } else if (arr[i] === ")") {
      if (answer.length === 0) {
        return false;
      }
      answer.pop();
    }
  }
  console.log(answer);
  return answer.length > 0 ? false : true;
}