function solution(x, n) {
  var answer = [];
  let number = 0;

  for (let i = 1; i <= n; i++) {
    number = x * i;
    answer.push(number);
  }

  return answer;
}