var turno = "X";
var juegoTerminado = false;

var elMensaje = document.querySelector(".turno");

function adjuntarClicks() {
    for (var i = 0; i < 9; i++) {
        var celda = document.getElementById("c" + i);
        
        celda.onclick = function() {
            if (this.textContent === "" && !juegoTerminado) {

                this.textContent = turno;
                this.classList.add(turno.toLowerCase()); // Añade clase 'x' o 'o'
                
                revisarGanador();
                
                if (!juegoTerminado) {
                    turno = (turno === "X") ? "O" : "X";
                    elMensaje.innerHTML = "Es el turno de <b>" + turno + "</b>";
                }
            }
        }
    }
}


function revisarGanador() {
    var combos = [
        [0,1,2], [3,4,5], [6,7,8], 
        [0,3,6], [1,4,7], [2,5,8], 
        [0,4,8], [2,4,6]         
    ];

    var tablero = [];
    for (var i = 0; i < 9; i++) {
        tablero[i] = document.getElementById("c" + i).textContent;
    }

    for (var k = 0; k < combos.length; k++) {
        var [a, b, c] = combos[k]; 

        if (tablero[a] !== "" && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
            // ¡Hay un ganador!
            aplicarEstiloGanador([a, b, c]);
            elMensaje.innerHTML = "<b>¡Gana " + tablero[a] + "!</b>";
            juegoTerminado = true;
            return; // Termina la función
        }
    }

    var lleno = !tablero.includes(""); 
    
    if (lleno) {
        elMensaje.textContent = "¡Es un empate!";
        juegoTerminado = true;
    }
}

function aplicarEstiloGanador(indices) {
    for (var i = 0; i < indices.length; i++) {
        var id = "c" + indices[i];
        document.getElementById(id).classList.add("winner");
    }
}

function reiniciarTablero() {
    for (var i = 0; i < 9; i++) {
        var el = document.getElementById("c" + i);
        el.textContent = "";
        // Limpia todas las clases de estado
        el.classList.remove("x", "o", "winner");
    }
    turno = "X";
    juegoTerminado = false;
    elMensaje.innerHTML = "Es el turno de <b>X</b>";
    adjuntarClicks(); 
}

function init() {
    adjuntarClicks();
    document.getElementById("btnReiniciar").onclick = reiniciarTablero;
    elMensaje.innerHTML = "Es el turno de <b>X</b>";
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}