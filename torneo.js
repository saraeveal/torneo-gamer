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

//Etapa 4 · Tu propio "para cada jugador" 
const paraCadaJugador = (accion) => {
    for(let i = 0; i < jugadores.length; i++){
        accion(jugadores[i]);
    }
};

console.log("-- solo nombre --");
paraCadaJugador((jugador) => {
    console.log(jugador.nombre);
});

console.log("-- nombre y país --");
paraCadaJugador((jugador) => {
    console.log(`${jugador.nombre} - ${jugador.pais}`);
});

//Etapa 5 · Arrow como "condición" (predicado) 
const contarJugadoresQue = (condicion) => {
    let cantidad = 0;

    for(let i=0; i < jugadores.length; i++){
        if(condicion(jugadores[i])){
            cantidad ++;
        }
    }
    return cantidad;
};

console.log(`Con 400+ puntos: ${contarJugadoresQue((jugador)=> puntajeTotal(jugador) >= 400)}`
);

console.log(`Del país CL: ${contarJugadoresQue((jugador)=> jugador.pais === "CL")}`
);

//Etapa 6 · Clasificar con valor por defecto
const clasificar = (jugador, minimo = 400) => {
    let total = puntajeTotal(jugador);
    if(total >= minimo){
        return "Clasificado";
    }
    return "Eliminado";
};
console.log(`${jugadores[0].nombre}: ${clasificar(jugadores[0])}`);
console.log(`${jugadores[3].nombre}: ${clasificar(jugadores[3])}`);
console.log(`${jugadores[0].nombre} (mínimo 300): ${clasificar(jugadores[0], 300)}`);

//Etapa 7 · Medalla por puntaje (guard clauses)
const medalla = (total) => {
    if(total >= 800){
    return "🥇 Oro";
    }
    if(total >= 500){
    return "🥈 Plata";
    }
    if(total >= 300){
    return "🥉 Bronce";
    }
    return "Sin medalla";
};
paraCadaJugador((jugador)=> {
    let total = puntajeTotal(jugador);
    console.log(`${jugador.nombre} (${total}): ${medalla(total)}`);
});