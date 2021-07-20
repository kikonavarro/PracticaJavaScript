class Team {
    constructor (teamName) {
        this.teamName = teamName;
        this.wins = 0;
        this.defeats = 0;
        this.draws = 0;
        this.points = 0;
        this.goals = 0;
    }
    addWins (wins) {
        this.wins += wins;
    }

    addDefeats (defeats) {
        this.defeats += defeats;
    }

    addDraws (draws) {
        this.draws += draws;
    }

    addPoints () {
        this.points = 3*this.wins + this.draws;
    }

    addGoals (goals) {
        this.goals += goals;
    }
}


/* const españa = new Team ('España');

console.log(españa) */