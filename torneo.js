//Etapa 1 · Los jugadores del torneo 
const jugadores = [
  { nombre: "Aragorn", pais: "CL", puntajes: [120, 90, 150] },
  { nombre: "Legolas", pais: "AR", puntajes: [200, 180, 220] },
  { nombre: "Gimli", pais: "CL", puntajes: [80, 60, 100] },
  { nombre: "Gandalf", pais: "PE", puntajes: [300, 250, 290] },
];

for(let i = 0; i < jugadores.length; i++){
    let jugador = jugadores[i];
    console.log(`${jugador.nombre} (${jugador.pais})`);

}

//Etapa 2 · Funciones utilitarias con arrow 
const puntajeTotal = (jugador) => {
    return jugador.puntajes.reduce((total,puntaje) => 
        total + puntaje, 0
    );
};

const promedio = (jugador) => {
    return puntajeTotal(jugador) / jugador.puntajes.length;
};

console.log(
`${jugadores[0].nombre}: total ${puntajeTotal(jugadores[0])}, promedio ${promedio(jugadores[0])}`
);

console.log(
`${jugadores[3].nombre}: total ${puntajeTotal(jugadores[3])}, promedio ${promedio(jugadores[3])}`
);

//Etapa 3 · Una arrow que devuelve un objeto
const crearResumen = (jugador) => ({
    nombre: jugador.nombre,
    total: puntajeTotal(jugador),
    promedio: promedio(jugador)
});
console.log(
crearResumen(jugadores[3])
);