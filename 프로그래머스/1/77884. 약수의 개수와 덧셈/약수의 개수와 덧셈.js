function solution(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    let addNum = 0;
    //약수의 개수 세는 for 문
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        addNum++;
      }
    }
    addNum % 2 === 0 ? (answer += i) : (answer -= i);
  }
  return answer;
}