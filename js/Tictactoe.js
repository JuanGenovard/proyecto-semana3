
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let interruptor = true;
let jugador1pieza = "X";
let jugador2pieza = "O";
let cellCollection = document.getElementsByClassName("celda")
let cells = Array.from(cellCollection)
let turnos = 6;
let botonRestart = document.getElementById("restartBtn") 
let cpu = JSON.parse(sessionStorage.getItem('cpu')) || false

const comprobarGanador = (piezaActual) => {
    for(const winCondition of winConditions){
        let cellA = cells[winCondition[0]]
        let cellB = cells[winCondition[1]]
        let cellC = cells[winCondition[2]]

        if(cellA.innerHTML === piezaActual &&
            cellB.innerHTML === piezaActual &&
            cellC.innerHTML === piezaActual) {
                return true;
            }
    }
    return false;
}

function clickRandomCell() {
    let randomCell = getRandomCell()
    while (randomCell.innerHTML !== "") {
        randomCell = getRandomCell()
    }
    randomCell.click()
}

function deleteRandomCell() {
    const piezaActual = (interruptor) ? jugador1pieza : jugador2pieza
    let randomCell = getRandomCell()
    while (randomCell.innerHTML !== piezaActual) {
        randomCell = getRandomCell()
    }
    randomCell.click()
}

function getRandomCell(){
    const random = Math.round(Math.random()*8)
    return cells[random]
}

cells.forEach((cell) => {
    cell.addEventListener("click", () => {
        const piezaActual = (interruptor) ? jugador1pieza : jugador2pieza
        if (turnos > 0) {
            if (cell.innerHTML == "") {
                cell.innerHTML = piezaActual;
                interruptor = !interruptor
                turnos--;
            }
        }
        else {
            console.log("adios")
            if (cell.innerHTML === piezaActual) {
                cell.innerHTML = "";
                turnos++;
            }
        }

        if(comprobarGanador(piezaActual)){
            window.location = "../pages/win.html"
        }

        if (!interruptor && cpu) {
            if (turnos > 0) {
                clickRandomCell()
            } else {
                deleteRandomCell()
                clickRandomCell()
            }

        }
    })
});

botonRestart.addEventListener("click", () => {
    interruptor = true;
    turnos = 6;
    cells.forEach((cell) => {
    cell.innerHTML = "";
    }) 
})



