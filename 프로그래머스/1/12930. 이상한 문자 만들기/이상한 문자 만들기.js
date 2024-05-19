function solution(s) {
  let arr = s.split(" ");
  let answer = "";

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      answer +=
        j % 2 === 0
          ? (arr[i][j] = arr[i][j].toUpperCase())
          : (arr[i][j] = arr[i][j].toLowerCase());
    }
    answer += " ";
  }
  return answer.slice(0, answer.length - 1);
}