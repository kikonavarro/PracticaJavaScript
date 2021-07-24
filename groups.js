export let allTeams = ['Italia', 'Gales', 'Turquía', 'España', 'Suiza', 'Bélgica', 'Finlandia', 'Dinamarca', 'Rusia', 'Austria', 'Ucrania', 'Macedonia', 'Suecia', 'Croacia', 'Escocia', 'Eslovaquia', 'Polonia', 'Hungria', 'Francia', 'Alemania', 'Inglaterra', 'Holanda', 'Portugal', 'República Checa']
import { dataTeams } from "./classes/teams.js";

export default class Group {
    constructor (groupName, config = {}) {
        this.groupName = groupName;
        this.teams =[] // array vacío que será rellenado cuando se haga el sorteo (riffle)
        this.matchDaySchedule = []
        this.setup(config);
        this.summaries = [];
        
    }
    riffle () {
        while (this.teams.length < 4) {
        let i = Math.floor(Math.random()*dataTeams.length)
        this.teams.push(dataTeams[i])
        dataTeams.splice(i,1)
        
        }   
    }

    getNames () {
        this.names = []
        this.teams.forEach(element => {
            this.names.push(element.name)
        });
        return this.names
    }
        
    setup (config) {
        const defaultConfig = {
            pointsPerWin: 3,
            pointsPerDraw: 1,
            pointsPerLose: 0
        }
        this.config = Object.assign(defaultConfig, config)
        
    }

 
    scheduleMatchDays () { // funcion para pintar las jornadas
        const numberOfMatchDays = this.teams.length -1; // las jornadas son el numero de equipos -1 (en este caso ponemos - 2 ya que )
        const numberOfMatchesPerMatchday = this.teams.length / 2; //numero de partidos por jornada que son los equipos entre 2
        
        for (let i=0; i<numberOfMatchDays; i++) {
            const matchDay = []
            for (let j=0; j<numberOfMatchesPerMatchday; j++) {
                const match = {home: 'Home', away: 'Away'};
                matchDay.push(match);
            }
            this.matchDaySchedule.push(matchDay) 
        }
    }

    setTeams () {
        this.matchDaySchedule[1][1].home = this.teams[0].name;
        this.matchDaySchedule[2][0].home = this.teams[1].name;
        this.matchDaySchedule[0][1].home = this.teams[1].name;
        this.matchDaySchedule[1][0].home = this.teams[3].name;
        this.matchDaySchedule[0][0].home = this.teams[0].name;
        this.matchDaySchedule[2][1].home = this.teams[2].name;
        this.matchDaySchedule[1][1].away = this.teams[1].name;
        this.matchDaySchedule[0][0].away = this.teams[3].name;
        this.matchDaySchedule[2][0].away = this.teams[3].name;
        this.matchDaySchedule[0][1].away = this.teams[2].name;
        this.matchDaySchedule[1][0].away = this.teams[2].name;
        this.matchDaySchedule[2][1].away = this.teams[0].name;
       
    }

    generateGoals () {
        return Math.floor(Math.random()*6)
    }

    start () {
        for (const matchDay of this.matchDaySchedule) {
            const matchDaySummary = {
                results : [],
                standings : undefined,
            }
            for (const match of matchDay) {
                const result = this.playGame(match)
                this.updateTeams(result)
                matchDaySummary.results.push(result)
                // console.log (`El resultado es ${result.homeTeamName} ${result.homeGoals} - ${result.awayTeamName} ${result.awayGoals}`)
            }
            
            matchDaySummary.standings = this.getStandings().map(team => Object.assign({}, team));;
            this.summaries.push(matchDaySummary);
            // console.log (matchDaySummary)
        }
    
    }

    playGame (match) {
        const homeGoals = this.generateGoals();
        const awayGoals = this.generateGoals();
        return {
            homeTeamName: match.home, 
            homeGoals: homeGoals,
            awayTeamName: match.away, 
            awayGoals: awayGoals
        
        }
        
    }

    getTeamByName(name) {
        return this.teams.find(team => team.name === name);
    }

    // actualiza las métricas de los equipos en función del marcador
    updateTeams(result) { 

        const localTeam = this.getTeamByName(result.homeTeamName);
        const awayTeam = this.getTeamByName(result.awayTeamName);
        
        // actualizamos métricas de goles
        localTeam.goalsFor += result.homeGoals;
        localTeam.goalsAgainst += result.awayGoals;
        awayTeam.goalsFor += result.awayGoals;
        awayTeam.goalsAgainst += result.homeGoals;

        // añadir 3 puntos al equipo que gana
        if (result.homeGoals > result.awayGoals) {
            localTeam.points += this.config.pointsPerWin;
            awayTeam.points += this.config.pointsPerLose;   
            localTeam.matchesWon++;
            awayTeam.matchesLost++;
        } else if (result.awayGoals > result.homeGoals) {
            awayTeam.points += this.config.pointsPerWin;
            localTeam.points += this.config.pointsPerLose; 
            localTeam.matchesLost++;
            awayTeam.matchesWon++;
        } else {
            localTeam.points += this.config.pointsPerDraw;
            awayTeam.points += this.config.pointsPerDraw;
            localTeam.matchesDraw++;
            awayTeam.matchesDraw++;
        }

    }

    getStandings(){
        // -1, 0, 1
        this.teams.sort(function(teamA, teamB) {

            if(teamA.points > teamB.points) {
                return -1
            } else if(teamA.points < teamB.points) {
                return 1
            } else {
                const goalsDiffA = teamA.goalsFor - teamA.goalsAgainst; 
                const goalsDiffB = teamB.goalsFor - teamB.goalsAgainst; 
                if (goalsDiffA > goalsDiffB) {
                    return -1
                } else if( goalsDiffA < goalsDiffB) {
                    return 1
                } else {
                    if (teamA.name.localeCompare(teamB.name) === -1) {
                    return -1
                    } else {
                        return 1
                    }

                }
            } 
    })

        return this.teams;
    }
} 

const configLeague = {
    pointsPerWin: 3,
    pointsPerDraw: 1,
    pointsPerLose: 0,
}


export let groupA = new Group('Grupo A', configLeague);
export let groupB = new Group('Grupo B', configLeague);
export let groupC = new Group('Grupo C', configLeague);
export let groupD = new Group('Grupo D', configLeague);
export let groupE = new Group('Grupo E', configLeague);
export let groupF = new Group('Grupo F', configLeague);


