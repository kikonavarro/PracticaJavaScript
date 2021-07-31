import { Round } from "./firstRound.js";

export class NextRound extends Round {
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

