function solution(arr) {
    let answer = 0;
    
    // 한 숫자를 계속 곱해주고, 나눈 나머지의 값이 모두 0으로 떨어지면
    // 모든 값의 최소공배수가 구해진다.
    let n = 1, flag = false;
    while(!flag)
    {
        n++;
        for(let i = 1; i < arr.length; ++i){
            if((arr[0] * n) % arr[i]  === 0){
                flag = true;
            } else {
                flag = false;
                break;
            }
        }
    }
    
    answer = arr[0] * n;
    return answer;
}