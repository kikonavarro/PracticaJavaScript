
// class Team {
//     constructor (teamName) {
//         this.teamName = teamName;
//         this.wins = 0;
//         this.defeats = 0;
//         this.draws = 0;
//         this.points = 0;
//         this.goals = 0;
//     }
//     addWins (wins) {
//         this.wins += wins;
//     }

//     addDefeats (defeats) {
//         this.defeats += defeats;
//     }

//     addDraws (draws) {
//         this.draws += draws;
//     }

//     addPoints () {
//         this.points = 3*this.wins + this.draws;
//     }

//     addGoals (goals) {
//         this.goals += goals;
//     }
// }

let equipos = ['Italia', 'Gales', 'Turquía', 'España', 'Suiza', 'Bélgica', 'Finlandia', 'Dinamarca', 'Rusia', 'Austria', 'Ucrania', 'Macedonia', 'Suecia', 'Croacia', 'Escocia', 'Eslovaquia', 'Polonia', 'Hungria', 'Francia', 'Alemania', 'Inglaterra', 'Holanda', 'Portugal', 'República Checa']
export const dataTeams = []
equipos.forEach(element => {
    const team = {
        name: element,
        matchesWon: 0,
        matchesDraw: 0,
        matchesLost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        points: 0

        // addWins (wins) {
        //     this.wins += wins;
        // },
    
        // addDefeats (defeats) {
        //     this.defeats += defeats;
        // },
    
        // addDraws (draws) {
        //     this.draws += draws;
        // },
    
        // addPoints () {
        //     this.points = 3*this.wins + this.draws;
        // },
    
        // addGoals (goals) {
        //     this.goals += goals;
        // },


    }
    dataTeams.push(team)
})
    
    
    // const teamName = new Team ('element')
    // dataTeams.push(teamName)





