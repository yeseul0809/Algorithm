function solution(s, n) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
      continue;
    }

    let arrayNumber = s[i].charCodeAt();

    if (arrayNumber >= 65 && arrayNumber <= 90) {
      arrayNumber = ((arrayNumber - 65 + n) % 26) + 65;
    } else if (arrayNumber >= 97 && arrayNumber <= 122) {
      arrayNumber = ((arrayNumber - 97 + n) % 26) + 97;
    }
    answer += String.fromCharCode(arrayNumber);
  }

  return answer;
}