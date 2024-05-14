function solution(price, money, count) {
  let resultMoney = 0;

  for (let i = 1; i <= count; i++) {
    resultMoney += price * i;
  }
  if (resultMoney < money) return 0;
  else if (resultMoney >= money) return resultMoney - money;
}