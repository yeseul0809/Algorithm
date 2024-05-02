function solution(n) {
  var answer = 0;
  for (let i = 0; i * i <= n; i++) {
    if (n === i * i) {
      answer = (i + 1) * (i + 1);
    } else {
      answer = -1;
    }
  }
  return answer;
}