function solution(s) {
  let answer = 0;
  let xCount = 0;
  let otherCount = 0;
  let x = s[0]; 

  for (let i = 0; i < s.length; i++) {
    if (s[i] === x) {
      xCount++;
    } else {
      otherCount++;
    }

    if (xCount === otherCount) {
      answer++;
      if (i + 1 < s.length) {
        x = s[i + 1];
        xCount = 0;
        otherCount = 0;
      }
    }
  }

  if (xCount !== otherCount) {
    answer++;
  }

  return answer;
}