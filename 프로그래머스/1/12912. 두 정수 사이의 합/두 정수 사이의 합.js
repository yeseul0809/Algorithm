function solution(a, b) {
  let sum = 0;
  let array = [a, b];
  array.sort((a, b) => a - b); // 오름차순 정렬

  for (i = array[0]; i <= array[1]; i++) {
    sum += i;
  }
  return sum;
}