// split(" ")을 사용하여 공백을 기준으로 배열에 삽입한다.
// 요소가 빈 문자열이 아닌 경우에만 첫 글자를 대문자로 변환합니다.
// 배열 요소의 문자열의 인덱스[0] 에 toUpperCase 적용한다.
// 나머지 문자열은 slice(1)을 통해 인덱스[1] 이후부터 끝까지 잘라낸다,
// slice 한 문자열을 소문자로 변환시킨다.
// join(" ")으로 다시 문자열을 합치며 리턴한다.

function solution(s) {
    let answer = '';
    const arr = s.split(" ");
    
    for(let i = 0; i<arr.length; i++){
        if(arr[i] !== ""){
          arr[i]= arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();  
        }
    }
     answer = arr.join(" ");  
    return answer;
}