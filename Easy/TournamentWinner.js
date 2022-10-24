const AWAY_TEAM_WIN = 0;

function findWinner(competition, results) {
  const score = {};
  for (let i = 0; i < competition.length; i++) {
    const coupledTeams = competition[i];
    const [home, away] = coupledTeams
    let currentWinner = "";
    const result = results[i]
    let bestTeam = "";
    // Check if away team is winner
    if (result === AWAY_TEAM_WIN) {
      if (!score[away]) {
        score[away] = 1;
      } else {
        score[away] += 1;
      }
      currentWinner = away;

      // Check if home team is winner
    } else {
      if (!score[home]) {
        score[home] = 1;
      } else {
        score[home] += 1;
      }
      currentWinner = home;
    }
  }
  return score;
}
findWinner(
  [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"],
  ],
  [0, 0, 1]
);


const obj = {
  name: "Billy",
  sing() {
    console.log('a', this);
    var anotherFunc = function() {
      return this
    }
    anotherFunc()
  }
}
obj.sing();
