import { firstClasificated } from "./index.js"
import { secondWithOutthirdTeams } from "./index.js"
import { secondWithThirdTeams } from "./index.js"
import { bestThirdClasificated } from "./index.js"


class Round {
    constructor () {

    }
           
    setlocalTeamsForEight () {
        this.localTeamsForEight = []
        for (let i=firstClasificated.length-1; i>=0; i--) {
            this.localTeamsForEight.push(firstClasificated[i])
        }
        for (let x=secondWithOutthirdTeams.length-1; x>=0; x--) {
            this.localTeamsForEight.push(secondWithOutthirdTeams[x])
        }
        console.log ('mostrar los equipos locales para octavos')
        console.log (this.localTeamsForEight)
    }

    setAwayTeamsForEight () {
        this.awayTeamsForEight = []
        for (let i=0; i<bestThirdClasificated.length; i++) {
            this.awayTeamsForEight.push(bestThirdClasificated[i])
        }
        for (let j=0; j<secondWithThirdTeams.length; j++) {
            this.awayTeamsForEight.push(secondWithThirdTeams[j])
        }
        console.log ('mostrar los equipos visitantes para octavos');
        console.log (this.awayTeamsForEight)
    }


    // setSchedule () {
    //     let numberOfMatchs = this.localTeamsForEight.length;
    //     const matchs = [];
    //     for ( let i = 0; i < numberOfMatchs; i++) {
    //         const match = {home: 'Home', away: 'Away'};
    //         matchs.push(match);
            
    //     }
    // },
  
    
    // play (teamA, teamB) {
        
    //     let result = {
    //         homeGoals : teamA.generateGoals(),
    //         awayGoals : teamB.generateGoals()
    //     }
    //     let winner = undefined;
    //     if (homeGoals> awayGoals) {
    //         winner = match.home    
    //     } else if (homerGoals < awayGoals) {
    //         winner = match.away
    //     } else {
    //         //en caso de empate repetimos la generación de goles de un equipo
    //         while (result.homeGoals = result.awayGoals){
    //         result.homeGoals = teamA.generateGoals()
    //         }
    //     }
    //     return winner

    // },
    // generateGoals () {
    //     return Math.floor(Math.random()*6)
    // }
}

let roundOfeight = new Round ('Octavos');

roundOfeight.setlocalTeamsForEight()
roundOfeight.setAwayTeamsForEight()

