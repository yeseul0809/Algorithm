function solution(s) {
  let arr = [...s];
  arr.sort().reverse();
  return arr.join("");
}