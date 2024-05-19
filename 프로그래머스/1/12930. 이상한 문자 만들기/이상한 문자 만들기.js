function solution(s) {
  let arr = s.split(" ");
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    let answerword = "";
    for (let j = 0; j < arr[i].length; j++) {
      answerword +=
        j % 2 === 0
          ? (arr[i][j] = arr[i][j].toUpperCase())
          : (arr[i][j] = arr[i][j].toLowerCase());
    }
    answer.push(answerword);
  }
  return answer.join(" ");
}