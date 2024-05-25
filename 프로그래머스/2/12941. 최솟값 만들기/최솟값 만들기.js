// 배열 A, B를 각각 오른차순,내림차순으로 정렬한다.
// 인덱스별로 곱한다.(큰 수 X 작은수)
// 배열의 길이만큼 순회하며 각각 인덱스를 곱한 후 answer 에 누적하여 더한다.

function solution(A,B){
    var answer = 0;
    A.sort((a,b)=>a-b);
    B.sort((a,b)=>b-a);
   
    for(let i=0; i<A.length; i++){
        answer += A[i] * B[i];
    }
    return answer;
}