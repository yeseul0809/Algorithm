function solution(k, m, score) {
  let price = 0;
  score.sort((a, b) => b - a);
  console.log(score);
  for (let i = 1; i <= score.length / m; i++) {
    price += score[i * m - 1] * m;
  }

  return price;
}