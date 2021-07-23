export let allTeams = ['Italia', 'Gales', 'Turquía', 'España', 'Suiza', 'Bélgica', 'Finlandia', 'Dinamarca', 'Rusia', 'Austria', 'Ucrania', 'Macedonia', 'Suecia', 'Croacia', 'Escocia', 'Eslovaquia', 'Polonia', 'Hungria', 'Francia', 'Alemania', 'Inglaterra', 'Holanda', 'Portugal', 'República Checa']
import { dataTeams } from "./classes/teams.js";

export default class Group {
    constructor (groupName, config = {}) {
        this.groupName = groupName;
        this.teams =[] // array vacío que será rellenado cuando se haga el sorteo (riffle)
        this.matchDaySchedule = []
        this.setup(config);
        
        
        // this.setupTeams(this.teamNames); //funciona solo con a?
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
        // console.log (this.matchDaySchedule)
    }

    generateGoals () {
        return Math.floor(Math.random()*10)
    }

    start () {
        for (const matchDay of this.matchDaySchedule) {
            for (const match of matchDay) {
                const result = this.playGame(match)
                console.log (`El resultado es ${result.homeTeamName} ${result.homeGoals} - ${result.awayTeamName} ${result.awayGoals}`)
            }
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


