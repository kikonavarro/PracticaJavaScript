export let allTeams = ['Italia', 'Gales', 'Turquía', 'España', 'Suiza', 'Bélgica', 'Finlandia', 'Dinamarca', 'Rusia', 'Austria', 'Ucrania', 'Macedonia', 'Suecia', 'Croacia', 'Escocia', 'Eslovaquia', 'Polonia', 'Hungria', 'Francia', 'Alemania', 'Inglaterra', 'Holanda', 'Portugal', 'República Checa']
console.log(allTeams);

export default class Group {
    constructor (groupName) {
        this.groupName = groupName;
        this.teams = []; // array vacío que será rellenado cuando se haga el sorteo (riffle)
        this.matchDaySchedule = []

    }
    riffle () {
        while (this.teams.length < 4) {
        let i = Math.floor(Math.random()*allTeams.length)
        this.teams.push(allTeams[i])
        allTeams.splice(i,1)
        
        }   
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
        // this.groupName.scheduleMatchDays[0][0].home

        // const numberOfMatchDays = this.teams.length -1; // las jornadas son el numero de equipos -1 (en este caso ponemos - 2 ya que )
        // const numberOfMatchesPerMatchday = this.teams.length / 2; //numero de partidos por jornada que son los equipos entre 2
        this.matchDaySchedule[1][1].home = this.teams[0];
        this.matchDaySchedule[2][0].home = this.teams[1];
        this.matchDaySchedule[0][1].home = this.teams[1];
        this.matchDaySchedule[1][0].home = this.teams[3];
        this.matchDaySchedule[0][0].home = this.teams[0];
        this.matchDaySchedule[2][1].home = this.teams[2];
        this.matchDaySchedule[1][1].away = this.teams[1];
        this.matchDaySchedule[0][0].away = this.teams[3];
        this.matchDaySchedule[2][0].away = this.teams[3];
        this.matchDaySchedule[0][1].away = this.teams[2];
        this.matchDaySchedule[1][0].away = this.teams[2];
        this.matchDaySchedule[2][1].away = this.teams[0];
        console.log (this.matchDaySchedule)
    }

    generateGoals () {
        return Math.floor(Math.random()*10)
    }

    playGame (match) {
        const homeGoals = this.generateGoals();
        const awayGoals = this.generateGoals();

    }
} 

export let groupA = new Group('groupA');
export let groupB = new Group('groupB');
export let groupC = new Group('groupC');
export let groupD = new Group('groupD');
export let groupE = new Group('groupE');
export let groupF = new Group('groupF');


