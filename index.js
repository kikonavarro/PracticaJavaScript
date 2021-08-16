import Group from "./classes/groups.js";
import { Round } from "./classes/firstRound.js";
import { NextRound } from "./classes/nextRounds.js";

//declaramos constante con la configuración de la parte de todos contra todos en los grupos
const configLeague = {
	pointsPerWin: 3,
	pointsPerDraw: 1,
	pointsPerLose: 0,
};

//instanciamos cada grupo como clase de Group
let groupA = new Group("Grupo A", configLeague);
let groupB = new Group("Grupo B", configLeague);
let groupC = new Group("Grupo C", configLeague);
let groupD = new Group("Grupo D", configLeague);
let groupE = new Group("Grupo E", configLeague);
let groupF = new Group("Grupo F", configLeague);

console.log("*******************\nCOMIENZA EL TORNEO\n*******************\n");
console.log(`Grupos y equipos\n=================\n`);

//sorteamos los equipos para cada grupo y pintamos las jornadas
let allGroups = [groupA, groupB, groupC, groupD, groupE, groupF];
allGroups.forEach((element, index) => {
	element.riffle();
	console.log(`${element.groupName}\n________________`);
	element.getNames().forEach((teamName) => {
		console.log(teamName);
	});
	console.log(`\n`);
	element.scheduleMatchDays();
	element.setTeams();
	element.start();
	element.matchDaySchedule.forEach((matchDay, matchDayIndex) => {
		console.log(`JORNADA ${matchDayIndex + 1}`);
		matchDay.forEach((match) => {
			console.log(`${match.home} vs ${match.away}`);
		});

		console.log(`=========================\n`);
	});
});

console.log(
	"********************************\n******COMIENZA LA EUROCOPA******\n********************************\n"
);
//función que muestra los resultados de cada jornada y cada grupo incluyendo la clasificación
function showResults() {
	for (let i = 0; i < 3; i++) {
		allGroups.forEach((element) => {
			console.log(
				`${element.groupName} - Jornada ${i + 1}\n___________________`
			);
			element.summaries[i].results.forEach((result) => {
				console.log(
					`${result.homeTeamName} vs ${result.awayTeamName} : ${result.homeGoals} - ${result.awayGoals}`
				);
			});
			const standing = element.summaries[i].standings.map((team) => {
				return {
					Team: team.name,
					Points: team.points,
					PG: team.matchesWon + team.matchesLost + team.matchesDraw,
					WG: team.matchesWon,
					DG: team.matchesDraw,
					LG: team.matchesLost,
					GoalsF: team.goalsFor,
					GoalsA: team.goalsAgainst,
					GoalsDiff: team.goalsFor - team.goalsAgainst,
				};
			});
			console.table(standing);
		});
	}
}

showResults();

//rellenar array con equipos clasificados, serán los primeros y segundos de cada grupo y los 4 mejores terceros

export let firstClasificated = [];
let secondClasificated = [];
let thirdClasificated = [];

export let bestThirdClasificated = [];
function getClasificated() {
	allGroups.forEach((element) => {
		element.addGroupName();
		firstClasificated.push(element.teams[0]);
		secondClasificated.push(element.teams[1]);
		thirdClasificated.push(element.teams[2]);
	});
	thirdClasificated.sort(function (teamA, teamB) {
		if (teamA.points > teamB.points) {
			return -1;
		} else if (teamA.points < teamB.points) {
			return 1;
		} else {
			const goalsDiffA = teamA.goalsFor - teamA.goalsAgainst;
			const goalsDiffB = teamB.goalsFor - teamB.goalsAgainst;
			if (goalsDiffA > goalsDiffB) {
				return -1;
			} else if (goalsDiffA < goalsDiffB) {
				return 1;
			} else {
				if (
					String(teamA.name).localeCompare(String(teamB.name)) === -1
				) {
					return -1;
				} else {
					return 1;
				}
			}
		}
	});
}

getClasificated();

bestThirdClasificated.push(
	thirdClasificated[0],
	thirdClasificated[1],
	thirdClasificated[2],
	thirdClasificated[3]
);

//función para sacar los grupos de los elementos de los arrays
function getGroup(teams) {
	let groups = [];
	teams.forEach((element) => {
		groups.push(element.group);
	});
	return groups;
}

// sacamos los grupos de los equipos clasificados como terceros y como segundos
let group3 = getGroup(bestThirdClasificated);
getGroup(bestThirdClasificated);
let group2 = getGroup(secondClasificated);

//comparamos los grupos de los equipos segundos y terceros para obtener los segundos que no se haya clasificado ningún tercero

let secondWithOutthird = [];
function findGroupRep() {
	group2.forEach((element) => {
		if (group3.indexOf(element) === -1) {
			secondWithOutthird.push(element);
		}
	});
}
findGroupRep();

export let secondWithThirdTeams = [];
export let secondWithOutthirdTeams = [];
secondClasificated.forEach((element) => {
	if (
		element.group === secondWithOutthird[0] ||
		element.group == secondWithOutthird[1]
	) {
		secondWithOutthirdTeams.push(element);
	} else {
		secondWithThirdTeams.push(element);
	}
});

console.log(
	"************************************************\n******COMIENZO DE LA FASE DE ELIMINATORIAS******\n************************************************\n"
);

console.log ("LOS EQUIPOS CLASIFICADOS PARA LAS ELIMINATORIAS SON:")
let clasificatedTeams = [firstClasificated, bestThirdClasificated, secondClasificated];
clasificatedTeams.forEach(element => {
	element.forEach(team => {
		console.log (`\n${team.name}`)		
	});
});

console.log("\n====== OCTAVOS DE FINAL ======\n");
let roundOfEight = new Round("Octavos");
roundOfEight.setlocalTeamsForEight();
roundOfEight.setAwayTeamsForEight();
roundOfEight.setMatchs();
roundOfEight.selectLocalTeamsInMatch();
roundOfEight.selectAwayTeamsInMatch();
roundOfEight.matchs.forEach((element) => {
	roundOfEight.getWinner(element);
});
let nextRound = roundOfEight.winners;


console.log("\n======= CUARTOS DE FINAL =======\n");
const roundOfFour = new NextRound("roundOfFour", nextRound);
roundOfFour.setMatchs();
roundOfFour.selectTeams();
roundOfFour.matchs.forEach((element) => {
	roundOfFour.getWinner(element);
});
let semifinalClasificated = roundOfFour.winners;

console.log("\n======= SEMIFINALES =======\n");
const semiFinal = new NextRound("semiFinal", semifinalClasificated);
semiFinal.setMatchs();
semiFinal.selectTeamsForSemis();
semiFinal.matchs.forEach((element) => {
	semiFinal.getWinner(element);
});
let finalClasificated = semiFinal.winners;
let consolationClasificated = semiFinal.loosers;

console.log("\n======= TERCER Y CUARTO PUESTO =======\n");
const consolation = new NextRound("consolacion", consolationClasificated);
consolation.setMatchs();
consolation.selectTeams();
consolation.matchs.forEach((element) => {
	consolation.getWinner(element);
});

console.log("\n========== FINAL ==========\n");
const final = new NextRound("final", finalClasificated);
final.setMatchs();
final.selectTeams();
final.matchs.forEach((element) => {
	final.getWinner(element);
});
let champion = final.winners;

console.log(
	`\n=====================================\n${champion[0].name} CAMPEONA DE LA EURO!\n=====================================`
);
