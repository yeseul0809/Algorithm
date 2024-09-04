function solution(answers) {
  let answer = [];
  let score1 = 0;
  let score2 = 0;
  let score3 = 0;

  const array1 = [1, 2, 3, 4, 5];
  const array2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const array3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === array1[i % array1.length]) {
      score1++;
    }
    if (answers[i] === array2[i % array2.length]) {
      score2++;
    }
    if (answers[i] === array3[i % array3.length]) {
      score3++;
    }
  }

  const maxScore = Math.max(score1, score2, score3);
  if (score1 === maxScore) answer.push(1);
  if (score2 === maxScore) answer.push(2);
  if (score3 === maxScore) answer.push(3);

  return answer;
}