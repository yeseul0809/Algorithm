// 다양한 종류의 폰켓몬을 뽑아야 하는게 핵심 -> 즉 같은 번호를 제거해야한다.

function solution(nums) {
    let answer = 0;
    // 최대로 선택할 수 있는 폰켓몬 종류의 수는 N/2마리
    const maxSelectCnt = nums.length / 2;
    // 반복된 번호를 가진 폰켓몬 제거
    const resultCnt = new Set(nums).size;
    // 두개의 수를 비교 후, 작은 수가 선택됨
    return (maxSelectCnt < resultCnt) ? maxSelectCnt : resultCnt; 
}