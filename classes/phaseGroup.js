/*class FinalPhase {
    constructor  (teams = []) {
        this.rounds =   
        this.setSchedule() 
    
    }

    // createTeams (firstClasificated, secondClasificated, thirdClasificated) {
    //     let roundOfSixteen = []
    //     for (let i=5; i>0; i-- ) {
    //     roundOfSixteen.push(firstClasificated[i])

    //     secondClasificated.forEach(element => {
    //         if (element.group = thirdClasificated.element.group)
            
    //     });
    //     if (secondClasificated.gr)

    //     }
    //     let clasificated = []
    //     clasificated.push(firstClasificated)
    //     clasificated.push(secondClasificated)
    //     clasificated.push(thirdClasificated[1],[2],[3],[4])


        // let roundOfEight = []
        // let semifinals = []
        // let consolationMatch = []
        // let final = []
        
    


    setlocalTeamsForEight () {
        this.localTeamsForEight = []
        for (let i=firstClasificated.length; i>0; i--) {
            this.localTeamsForEight.push(firstClasificated[i])
        }
        for (let x=secondWithOutthird.length; x>0; x--) {
            this.localTeamsForEight.push(secondWithOutthirdTeams[x])
        }
    }

    setAwayTeamsForEight () {
        this.awayTeamsForEight = []
        for (let i=0; i<thirdClasificated.length; i++) {
            this.awayTeamsForEight.push(thirdClasificated[i])
        }
        for (let j=0; i<secondWithThirdTeams.length; j++) {
            this.awayTeamsForEight.push(secondWithThirdTeams)
        }
    }

    // setSchedule () {
    //     let numberOfMatches = this.localTeamsForEight.length;
    //     for (let i=0; i<4; i++)
    //     this.createMatch(this.localTeamsForEight[i], this.awayTeamsForEight[i])

    //     for (let i=4; i<7; i++)

    //     for (let i= 7)


    // }
    setSchedule () {
        let numberOfMatchs = this.localTeamsForEight.length;
        const matchs = [];
        for ( let i = 0; i < numberOfMatchs; i++) {
            const match = {home: 'Home', away: 'Away'};
            matchs.push(match);
            
        }
    }

    // setMatch () {

    // }
    
    play (teamA, teamB) {
        
        let result = {
            homeGoals = teamA.generateGoals(),
            awayGoals = teamB.generateGoals()
        }
        let winner = undefined;
        if (homeGoals> awayGoals) {
            winner = match.home    
        } else if (homerGoals < awayGoals) {
            winner = match.away
        } else {
            //en caso de empate repetimos la generación de goles de un equipo
            while (result.homeGoals = result.awayGoals){
            result.homeGoals = teamA.generateGoals()
            }
        }
        return winner

    }
    generateGoals () {
        return Math.floor(Math.random()*6)
    }
}


 