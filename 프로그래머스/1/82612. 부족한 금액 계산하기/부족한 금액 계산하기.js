function solution(price, money, count) {
  let resultMoney = 0;

  for (let i = 1; i <= count; i++) {
    resultMoney += price * i;
  }
  return resultMoney < money ? 0 : resultMoney - money;
}