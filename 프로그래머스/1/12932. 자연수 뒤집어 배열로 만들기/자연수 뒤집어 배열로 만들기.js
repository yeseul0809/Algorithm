function solution(n) {
  let num = String(n);
  const newArray = Array.from(num);
  console.log(newArray);
  let answer = newArray.reverse().map(Number);
  return answer;
}