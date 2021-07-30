import { Round } from "./rounds.js";
import { nextRound } from "./rounds.js";

class NextRound extends Round {
  constructor(name, teams = []) {
    super(name);
    this.teams = teams;
  }

  setMatchs() {
    let numberOfMatchs = this.teams.length / 2;
    this.matchs = [];
    for (let i = 0; i < numberOfMatchs; i++) {
      const match = { home: "Home", away: "Away" };
      this.matchs.push(match);
    }
  }

  selectTeams() {
    this.homeTeams = [];
    this.awayTeams = [];
    for (let i = 0; i < this.teams.length; i++) {
      if (i % 2 === 0) {
        this.homeTeams.push(this.teams[i]);
      } else {
        this.awayTeams.push(this.teams[i]);
      }
    }
    for (let i = 0; i < this.teams.length / 2; i++) {
      this.matchs[i].home = this.homeTeams[i];
      this.matchs[i].away = this.awayTeams[i];
    }
  }
}

console.log("==== CUARTOS DE FINAL ====");
const roundOfFour = new NextRound("roundOfFour", nextRound);
console.log(roundOfFour.teams);
roundOfFour.setMatchs();
roundOfFour.selectTeams();
roundOfFour.matchs.forEach((element) => {
  roundOfFour.getWinner(element);
});

export let semifinalClasificated = roundOfFour.winners;

console.log("==== SEMIFINALES ====");
const semiFinal = new NextRound("semiFinal", semifinalClasificated);
semiFinal.setMatchs();
semiFinal.selectTeams();
console.log(semiFinal.matchs);
semiFinal.matchs.forEach((element) => {
  semiFinal.getWinner(element);
});

export let finalClasificated = semiFinal.winners;
export let consolationClasificated = semiFinal.loosers;

console.log("==== TERCER Y CUARTO PUESTO ====");
const consolation = new NextRound("consolacion", consolationClasificated);
consolation.setMatchs();
consolation.selectTeams();
consolation.matchs.forEach((element) => {
  consolation.getWinner(element);
});

console.log("==== FINAL ====");
const final = new NextRound("final", finalClasificated);
final.setMatchs();
final.selectTeams();
final.matchs.forEach((element) => {
  final.getWinner(element);
});
