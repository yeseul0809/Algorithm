function solution(s) {
  let arr = [...s];
  let mid = Math.floor(arr.length / 2);
  return arr.length % 2 === 0 ? arr.slice(mid - 1, mid + 1).join("") : arr[mid];
}