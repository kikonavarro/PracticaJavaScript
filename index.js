// El programa comenzará indicando con un mensaje que “comienza el torneo”. 

console.log ('COMIENZA EL TORNEO')

// TODO El programa deberá mostrar los 16 equipos participantes en la fase de eliminatorias (play off).
// TODO A continuación se deberán mostrar los resultados de los partidos en las diferentes rondas (octavos de final, cuartos de final y semifinales), indicando qué equipos se clasifican para la siguiente ronda (esto se mostrará desde octavos de final hasta semifinales). 
// TODO Opcional: Una vez finalizadas las semifinales, se mostrará el resultado del partido de tercer y cuarto puesto (que se juega entre equipos no clasificados para la final). 
// TODO Tras esto, se mostrará el resultado del partido de la final, anunciando posteriormente el equipo ganador como campeón del mundo. 

// let europeTeams = ['Italia', 'España', 'Suiza', 'Dinamarca', 'Suecia', 'Francia', 'Alemania', 'Inglaterra', 'Holanda', 'Eslovenia', 'Portugal', 'República Checa']


// Mostrar los equipos inscritos en pantalla
// europeTeams.forEach(element => {
//     console.log(element)
// });

import allTeams from "./groups.js"
import Group from "./groups.js";
import {groupA} from "./groups.js"
import {groupB} from "./groups.js"
import {groupC} from "./groups.js"
import {groupD} from "./groups.js"
import {groupE} from "./groups.js"
import {groupF} from "./groups.js"
import {dataTeams} from "./classes/teams.js"


// TODO Al arrancar el programa se deberá mostrar por pantalla la información de los equipos que hay en cada grupo y la planificación de partidos del mismo. ○Nombre del grupo ○Listado de los equipos (una en cada línea) 
// Instanciamos los grupos y llamamos a la función riffle para sortear los equipos de cada grupo y hacerlo de manera aleatoria (La asignación de los equipos a cada grupo se realizará de manera aleatoria.)

groupA.riffle()
groupB.riffle()
groupC.riffle()
groupD.riffle()
groupE.riffle()
groupF.riffle()


// Pintamos los grupos en pantalla
console.log(`GrupoA: ${groupA.getNames()}`)
console.log(`GrupoB: ${groupB.getNames()}`)
console.log(`GrupoC: ${groupC.getNames()}`)
console.log(`GrupoD: ${groupD.getNames()}`)
console.log(`GrupoE: ${groupE.getNames()}`)
console.log(`GrupoF: ${groupF.getNames()}`)


groupA.scheduleMatchDays();
groupA.setTeams();

groupA.matchDaySchedule.forEach((matchDay, matchDayIndex) => {
    console.log(`JORNADA ${matchDayIndex+1}`)
    matchDay.forEach(match => {
        
            console.log(`${match.home} vs ${match.away}`);
    })
    console.log(`=========================`)
})

groupA.start()




// TODO A continuación se mostrarán los resultados de los partidos y la clasificación de cada grupo tras el final de la primera jornada de partidos, después los de la segunda jornada, y finalmente los de la tercera jornada.
// TODO Una vez finalice la fase de grupos, se deberán anunciar el comienzo de la fase de eliminatorias. 

