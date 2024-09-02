function solution(name, yearning, photo) {
  let answer = [];

  for (let i = 0; i < photo.length; i++) {
    let sum = 0;
    for (let j = 0; j < photo[i].length; j++) {
      let index = name.indexOf(photo[i][j]);
      if (index !== -1) {
        sum += yearning[index];
      }
    }
    answer.push(sum);
  }
  return answer;
}