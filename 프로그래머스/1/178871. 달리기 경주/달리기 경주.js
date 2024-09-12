function solution(players, callings) {
  
  let playerMap = {};
  for (let i = 0; i < players.length; i++) {
    playerMap[players[i]] = i;
  }

  for (let i = 0; i < callings.length; i++) {
    let player = callings[i];
    let idx = playerMap[player];


    if (idx > 0) {
      let prevPlayer = players[idx - 1];


      [players[idx - 1], players[idx]] = [players[idx], players[idx - 1]];


      playerMap[player]--;
      playerMap[prevPlayer]++;
    }
  }

  return players;
}


