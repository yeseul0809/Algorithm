function solution(a, b) {
  let sum = 0;
  let idx = 0;
  const weekArray = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

  for (let i = 1; i < a; i++) {
    if ([1, 3, 5, 7, 8, 10, 12].includes(i)) {
      sum += 31;
    } else if ([4, 6, 9, 11].includes(i)) {
      sum += 30;
    } else if (i === 2) {
      sum += 29;
    }
  }
  sum += b;
  idx = (sum % 7 + 6) % 7;

  return weekArray[idx];
}