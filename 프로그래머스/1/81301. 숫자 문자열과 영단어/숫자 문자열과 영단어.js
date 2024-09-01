function solution(s) {
  const wordArray = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  for (let i = 0; i < wordArray.length; i++) {
    while (s.includes(wordArray[i])) {
      s = s.split(wordArray[i]).join(i);
    }
  }

  return Number(s);
}