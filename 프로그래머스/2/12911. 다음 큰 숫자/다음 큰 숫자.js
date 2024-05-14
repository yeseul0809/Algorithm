function solution(n) {
  let inputNum = n.toString(2);

  let count = 0;
  for (let i = 0; i < inputNum.length; i++) {
    if (inputNum[i] === "1") count++;
  }

  let Num = n + 1;

  while (true) {
    let nextNum = Num.toString(2);
    let nextCount = 0;
    for (let i = 0; i < nextNum.length; i++) {
      if (nextNum[i] === "1") nextCount++;
    }

    if (count === nextCount) return Num;
    Num++;
  }
}