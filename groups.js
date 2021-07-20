
export let allTeams = ['Italia', 'España', 'Suiza', 'Dinamarca', 'Suecia', 'Francia', 'Alemania', 'Inglaterra', 'Holanda', 'Eslovenia', 'Portugal', 'República Checa']

export default class Group {
    constructor (groupName) {
        this.groupName = groupName;
        this.teams = [];

    }
    riffle () {
        while (this.teams.length < 4) {
        let i = Math.floor(Math.random()*allTeams.length)
        this.teams.push(allTeams[i])
        allTeams.splice(i,1)
        
        }   
    }

    scheduleMatchDays () { // funcion para pintar las jornadas
        const numberOfMatchDays = this.teams.length -1 // las jornadas son el numero de equipos -1 (en este caso ponemos - 2 ya que )
        const numberOfMatchesPerMatchday = this.teams.lenght / 2 //numero de partidos por jornada que son los equipos entre 2

        for (let i=0; i<numberOfMatchDays; i++) {
            const matchDay = []
            for (let j=0; j<numberOfMatchesPerMatchday; j++) {
                const match = {home: 'A', away: 'B'};
                matchDay.push(match);
            }
            this.scheduleMatchDays.push(matchDay) 
        }
    }
} 

/* export let groupA = new Group('groupA');
groupA.riffle(allTeams)
export let groupB = new Group('groupB');
groupB.riffle(allTeams)
export let groupC = new Group('groupC');
groupC.riffle(allTeams)

console.log(`GrupoA: ${groupA.teams}`)
console.log(`GrupoB: ${groupB.teams}`)
console.log(`GrupoC: ${groupC.teams}`) */
