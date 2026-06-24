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