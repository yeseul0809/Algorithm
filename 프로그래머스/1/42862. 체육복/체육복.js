function solution(n, lost, reserve) {
    let actualLost = lost.filter(student => !reserve.includes(student));
    let actualReserve = reserve.filter(student => !lost.includes(student));
  
    let answer = n - actualLost.length; 

    actualLost.sort((a, b) => a - b);  
    actualReserve.sort((a, b) => a - b);  
  
    for (let i = 0; i < actualLost.length; i++) {
      let student = actualLost[i];
  

      if (actualReserve.includes(student - 1)) {
        answer++;
        actualReserve.splice(actualReserve.indexOf(student - 1), 1);
      }
      else if (actualReserve.includes(student + 1)) {
        answer++;
        actualReserve.splice(actualReserve.indexOf(student + 1), 1); 
      }
    }
  
    return answer;
  }