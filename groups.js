export let allTeams = ['Italia', 'Gales', 'Turquía', 'España', 'Suiza', 'Bélgica', 'Finlandia', 'Dinamarca', 'Rusia', 'Austria', 'Ucrania', 'Macedonia', 'Suecia', 'Croacia', 'Escocia', 'Eslovaquia', 'Polonia', 'Hungria', 'Francia', 'Alemania', 'Inglaterra', 'Holanda', 'Portugal', 'República Checa']
import { dataTeams } from "./classes/teams.js";

export default class Group {
    constructor (groupName, config = {}) {
        this.groupName = groupName;
        this.teamNames =[] // array vacío que será rellenado cuando se haga el sorteo (riffle)
        this.matchDaySchedule = []
        this.setup(config);
        // this.setupTeams(this.teamNames); //funciona solo con a?
    }
    riffle () {
        while (this.teamNames.length < 4) {
        let i = Math.floor(Math.random()*allTeams.length)
        this.teamNames.push(allTeams[i])
        allTeams.splice(i,1)
        
        }   
    }

    setup (config) {
        const defaultConfig = {
            pointsPerWin: 3,
            pointsPerDraw: 1,
            pointsPerLose: 0
        }
        this.config = Object.assign(defaultConfig, config)
        
    }
    // setupTeams (teams) {
    //     for (const teamName of teams) {
    //         const team = {
    //             name: teamName,
    //             matchesWon: 0,
    //             matchesDraw: 0,
    //             matchesLost: 0,
    //             golesFor: 0,
    //             golesAgainst: 0,
    //         }
    //         this.teamNames.push(team)
    //     }
    // }

 
    scheduleMatchDays () { // funcion para pintar las jornadas
        const numberOfMatchDays = this.teamNames.length -1; // las jornadas son el numero de equipos -1 (en este caso ponemos - 2 ya que )
        const numberOfMatchesPerMatchday = this.teamNames.length / 2; //numero de partidos por jornada que son los equipos entre 2
        
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
        // this.groupName.scheduleMatchDays[0][0].home

        // const numberOfMatchDays = this.teams.length -1; // las jornadas son el numero de equipos -1 (en este caso ponemos - 2 ya que )
        // const numberOfMatchesPerMatchday = this.teams.length / 2; //numero de partidos por jornada que son los equipos entre 2
        this.matchDaySchedule[1][1].home = this.teamNames[0];
        this.matchDaySchedule[2][0].home = this.teamNames[1];
        this.matchDaySchedule[0][1].home = this.teamNames[1];
        this.matchDaySchedule[1][0].home = this.teamNames[3];
        this.matchDaySchedule[0][0].home = this.teamNames[0];
        this.matchDaySchedule[2][1].home = this.teamNames[2];
        this.matchDaySchedule[1][1].away = this.teamNames[1];
        this.matchDaySchedule[0][0].away = this.teamNames[3];
        this.matchDaySchedule[2][0].away = this.teamNames[3];
        this.matchDaySchedule[0][1].away = this.teamNames[2];
        this.matchDaySchedule[1][0].away = this.teamNames[2];
        this.matchDaySchedule[2][1].away = this.teamNames[0];
        console.log (this.matchDaySchedule)
    }

    generateGoals () {
        return Math.floor(Math.random()*10)
    }

    start () {
        for (const matchDay of this.matchDaySchedule) {
            for (const match of matchDay) {
                const result = this.playGame(match)
            }
        }

    }

    playGame (match) {
        const homeGoals = this.generateGoals();
        const awayGoals = this.generateGoals();
        return {
            homeTeamName: match.home, homeGoals,
            awayTeamName: match.away, awayGoals
        }

    }
} 

const configLeague = {
    pointsPerWin: 3,
    pointsPerDraw: 1,
    pointsPerLose: 0,
}

export let groupA = new Group('groupA', configLeague);
export let groupB = new Group('groupB', configLeague);
export let groupC = new Group('groupC', configLeague);
export let groupD = new Group('groupD', configLeague);
export let groupE = new Group('groupE', configLeague);
export let groupF = new Group('groupF', configLeague);


