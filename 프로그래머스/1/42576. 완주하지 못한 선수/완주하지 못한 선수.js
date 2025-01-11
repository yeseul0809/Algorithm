// 완주하지 못한 선수의 이름을 리턴 -> 한명만 완주 못함
// 동명이인이 있을 수 있음
// participant 배열과 completion 배열의 값을 비교 후 겹치는거 제외. participant 안에 completion 값은 다 들어있음


function solution(participant, completion) {
  const participantMap = new Map();

  // participant 배열을 순회하며 해시맵에 값 추가
  for (const name of participant) {
    participantMap.set(name, (participantMap.get(name) || 0) + 1);
  }

  // completion 배열을 순회하며 해시맵에서 값 차감
  for (const name of completion) {
    participantMap.set(name, participantMap.get(name) - 1);
  }

  // 값이 0이 아닌 키를 반환 (완주하지 못한 사람)
  for (const [name, count] of participantMap) {
    if (count > 0) {
      return name;
    }
  }
}
