function solution(s) {
  let arr = s.split(" ");
  let min,
    max = 0;
  let answer = "";

  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    min = arr[0];
    max = arr[arr.length - 1];
  }
  answer = `${min} ${max}`;
  return answer;
}