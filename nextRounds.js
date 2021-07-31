import { Round } from "./firstRound.js";
import { nextRound } from "./firstRound.js";


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
		let j = this.teams.length / 2 - 1;
		for (let i = 0; i < this.teams.length / 2; i++) {
			this.matchs[i].home = this.homeTeams[i];
			this.matchs[i].away = this.awayTeams[j];
			j--;
		}
	}

	selectTeamsForSemis() {
		this.homeTeams = [];
		this.awayTeams = [];
		for (let i = 0; i < this.teams.length / 2; i++) {
			this.homeTeams.push(this.teams[i]);
		}
		for (let i = this.teams.length / 2; i < this.teams.length; i++) {
			this.awayTeams.push(this.teams[i]);
		}
		for (let i = 0; i < this.teams.length / 2; i++) {
			this.matchs[i].home = this.homeTeams[i];
			this.matchs[i].away = this.awayTeams[i];
		}
	}
}

export const roundOfFour = new NextRound("roundOfFour", nextRound);

// console.log("\n======= CUARTOS DE FINAL =======\n");
// roundOfFour.setMatchs();
// roundOfFour.selectTeams();
// roundOfFour.matchs.forEach((element) => {
// 	roundOfFour.getWinner(element);
// });

let semifinalClasificated = roundOfFour.winners;

export const semiFinal = new NextRound("semiFinal", semifinalClasificated);
// console.log("\n======= SEMIFINALES =======\n");
// semiFinal.setMatchs();
// semiFinal.selectTeamsForSemis();
// semiFinal.matchs.forEach((element) => {
// 	semiFinal.getWinner(element);
// });

let finalClasificated = semiFinal.winners;
let consolationClasificated = semiFinal.loosers;

export const consolation = new NextRound("consolacion", consolationClasificated);
// // console.log("\n======= TERCER Y CUARTO PUESTO =======\n");
// // consolation.setMatchs();
// // consolation.selectTeams();
// // consolation.matchs.forEach((element) => {
// // 	consolation.getWinner(element);
// // });

export const final = new NextRound("final", finalClasificated);
// // console.log("\n========== FINAL ==========\n");
// // final.setMatchs();
// // final.selectTeams();
// // final.matchs.forEach((element) => {
// // 	final.getWinner(element);
// // });
export let champion = final.winners;
// console.log (`\n=====================================\n${champion[0].name} CAMPEONA DE LA EURO!\n=====================================`)