import { firstClasificated } from "../index.js";
import { secondWithOutthirdTeams } from "../index.js";
import { secondWithThirdTeams } from "../index.js";
import { bestThirdClasificated } from "../index.js";

function shuffle(array) {
	array.sort(() => Math.random() - 0.5);
}
export class Round {
	constructor(name) {
		this.name = name;
		this.winners = [];
		this.loosers = [];
	}

	setlocalTeamsForEight() {
		this.localTeamsForEight = [];
		for (let i = firstClasificated.length - 1; i >= 0; i--) {
			this.localTeamsForEight.push(firstClasificated[i]);
		}
		for (let x = secondWithOutthirdTeams.length - 1; x >= 0; x--) {
			this.localTeamsForEight.push(secondWithOutthirdTeams[x]);
		}
	}

	setAwayTeamsForEight() {
		this.awayTeamsForEight = [];
		for (let i = 0; i < bestThirdClasificated.length; i++) {
			this.awayTeamsForEight.push(bestThirdClasificated[i]);
		}
		for (let j = 0; j < secondWithThirdTeams.length; j++) {
			this.awayTeamsForEight.push(secondWithThirdTeams[j]);
		}
	}

	// pintamos los 8 partidos creando un array en el que hay 2 equipos por partido, local y visitante
	setMatchs() {
		let numberOfMatchs = this.localTeamsForEight.length;
		this.matchs = [];
		for (let i = 0; i < numberOfMatchs; i++) {
			const match = { home: "Home", away: "Away" };
			this.matchs.push(match);
		}
	}
	// seleccionamos todos los equipos locales
	selectLocalTeamsInMatch() {
		for (let i = 0; i < 8; i++) {
			this.matchs[i].home = this.localTeamsForEight[i];
		}
	}
	//seleccionamos todos los equipos visitantes dividiendo primero los partidos en los que juegan los terceros clasificados
	selectAwayTeamsInMatch() {
		for (let i = 0; i < 4; i++) {
			let awayTeams = bestThirdClasificated;
			this.matchs[i].away = awayTeams[i];
			if (this.matchs[i].away.group == this.matchs[i].home.group) {
				shuffle(awayTeams);
			}
		}

		for (let i = 4; i < 6; i++) {
			this.matchs[i].away = this.awayTeamsForEight[i];
		}
		if (this.matchs[4].away.group == this.matchs[4].home.group) {
			let matchGhost = this.matchs[4].away;
			this.matchs[4].away = this.matchs[5].away;
			this.matchs[5].away = matchGhost;
		}

		for (let i = 6; i < 8; i++) {
			this.matchs[i].away = this.awayTeamsForEight[i];
		}
	}

	generateGoals() {
		return Math.floor(Math.random() * 6);
	}

	getWinner(match) {
		let result = {
			homeGoals: this.generateGoals(),
			awayGoals: this.generateGoals(),
		};
		let winner = [];
		let looser = [];
		do {
			if (result.homeGoals > result.awayGoals) {
				winner = match.home;
				looser = match.away;
			} else if (result.homeGoals < result.awayGoals) {
				winner = match.away;
				looser = match.home;
			} else {
				//en caso de empate repetimos la generación de goles de un equipo
				result.homeGoals = this.generateGoals();
				if (result.homeGoals > result.awayGoals) {
					winner = match.home;
					looser = match.away;
				} else {
					winner = match.away;
					looser = match.home;
				}
			}
		} while (result.homeGoals == result.awayGoals);

		this.winners.push(winner);
		this.loosers.push(looser);

		console.log(
			`${match.home.name} ${result.homeGoals} - ${match.away.name} ${result.awayGoals} => ${winner.name}`
		);
	}
}


