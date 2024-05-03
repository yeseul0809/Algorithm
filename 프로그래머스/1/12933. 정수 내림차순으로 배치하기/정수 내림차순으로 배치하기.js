function solution(n) {
  let answer = (n + "")
    .split("")
    .sort((a, b) => b - a)
    .join("");
  return Number(answer);
}