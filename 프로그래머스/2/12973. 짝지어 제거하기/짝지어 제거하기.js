function solution(s) {
  let array = [];

  for (let i = 0; i < s.length; i++) {
    if (array.length > 0 && array[array.length - 1] === s[i]) {
      array.pop();  
    } else {
      array.push(s[i]);  
    }
  }

  return array.length === 0 ? 1 : 0; 
}