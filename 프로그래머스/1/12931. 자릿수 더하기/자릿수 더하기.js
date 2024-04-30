function solution(n) {
  let sum = 0;
  let array = String(n);
  const newArr = Array.from(array);

  for (let i = 0; i < newArr.length; i++) {
    console.log(newArr[i]);
    sum += Number(newArr[i]);
  }

  return sum;
}