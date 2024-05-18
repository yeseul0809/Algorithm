function solution(n, m) {
  var answer = [];
  let numdiv = 1;
  let multiple = 1;

  for (let i = 1; i <= n * m; i++) {
    if (n % i === 0 && m % i === 0) {
      numdiv = i;
    }

    multiple = (n * m) / numdiv;
  }

  answer.push(numdiv, multiple);
  return answer;
}