function solution(n) {

  for (let answer = 2; answer < n; answer++) {
    if(n % answer === 1) return answer;
  }
}