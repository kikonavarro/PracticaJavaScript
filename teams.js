

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
        
    }
    dataTeams.push(team)
})
    
    





