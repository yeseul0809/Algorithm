function solution(x) {
  let num = [...String(x)].map(Number);
  let sum = 0;

  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  if (x % sum === 0) {
    return true;
  } else {
    return false;
  }
}