function solution(arr) {
  if (arr.length <= 1) {
    return [-1];
  }

  const min = Math.min(...arr);
  const answer = arr.filter((element) => element !== min);
  return answer;
}