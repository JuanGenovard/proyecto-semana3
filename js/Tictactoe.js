
////////// AYUDAS //////////////

// if (arrayPlayerTurn.length == 3) {
//     if (arrayPlayerTurn[0].position == pos1 && arrayPlayerTurn[1].position == pos2 &&
//         arrayPlayerTurn[2].position == pos3)




// let caja1 = document.getElementById("caja1");
// let caja2 = document.getElementById("caja2");
// let caja3 = document.getElementById("caja3");

// let cuadricula = ["", "", "", "", "", "", "", "", ""]
// // const restart = getElementById("restart");

// const restart = () => {
//     caja1.innerHTML = "";
//     caja2.innerHTML = "";
//     caja3.innerHTML = "";
//     caja4.innerHTML = "";
//     caja5.innerHTML = "";
//     caja6.innerHTML = "";
//     caja7.innerHTML = "";
//     caja8.innerHTML = "";
//     caja9.innerHTML = "";

// };

// let turno = 6;



// let interruptor = true;

// const marcarCasilla = (posicion) => {
//     switch (posicion) {
//         case '1':
//             if (caja1.innerHTML == "") {
//                 caja1.innerHTML = (interruptor) ? `<p style="font-size: 10vh">X</p>` : `<p style="font-size: 10vh">O</p>`;
//                 interruptor = !interruptor;
//             };
//             break;
//         case '2':
//             if (caja2.innerHTML == "") {
//                 caja2.innerHTML = (interruptor) ? `<p style="font-size: 10vh">X</p>` : `<p style="font-size: 10vh">O</p>`;
//                 interruptor = !interruptor;
//             };
//             break;
//         case '3':
//             if (caja3.innerHTML == "") {
//                 caja3.innerHTML = (interruptor) ? `<p style="font-size: 10vh">X</p>` : `<p style="font-size: 10vh">O</p>`;
//                 interruptor = !interruptor;
//             };
//             break;
//         case '4':
//             if (caja4.innerHTML == "") {
//                 caja4.innerHTML = (interruptor) ? `<p style="font-size: 10vh">X</p>` : `<p style="font-size: 10vh">O</p>`;
//                 interruptor = !interruptor;
//             };
//             break;
//         case '5':
//             if (caja5.innerHTML == "") {
//                 caja5.innerHTML = (interruptor) ? `<p style="font-size: 10vh">X</p>` : `<p style="font-size: 10vh">O</p>`;
//                 interruptor = !interruptor;
//             };
//             break;
//         case '6':
//             if (caja6.innerHTML == "") {
//                 caja6.innerHTML = (interruptor) ? `<p style="font-size: 10vh">X</p>` : `<p style="font-size: 10vh">O</p>`;
//                 interruptor = !interruptor;
//             };
//             break;
//         case '7':
//             if (caja7.innerHTML == "") {
//                 caja7.innerHTML = (interruptor) ? `<p style="font-size: 10vh">X</p>` : `<p style="font-size: 10vh">O</p>`;
//                 interruptor = !interruptor;
//             };
//             break;
//         case '8':
//             if (caja8.innerHTML == "") {
//                 caja8.innerHTML = (interruptor) ? `<p style="font-size: 10vh">X</p>` : `<p style="font-size: 10vh">O</p>`;
//                 interruptor = !interruptor;
//             };
//             break;
//         case '9':
//             if (caja9.innerHTML == "") {
//                 caja9.innerHTML = (interruptor) ? `<p style="font-size: 10vh">X</p>` : `<p style="font-size: 10vh">O</p>`;
//                 interruptor = !interruptor;
//             };
//             break;


// //         default:
// //             console.log("error");
// //     };
// // };

// // let winer = "ganador";

// // let caja1 = document.getElementById("caja1");
// // let caja2 = document.getElementById("caja2");
// // let caja3 = document.getElementById("caja3");
// // let caja4 = document.getElementById("caja4");
// // let caja5 = document.getElementById("caja5");
// // let caja6 = document.getElementById("caja6");
// // let caja7 = document.getElementById("caja7");
// // let caja8 = document.getElementById("caja8");
// // let caja9 = document.getElementById("caja9");

// // let arrayWiner1 = [caja1, caja2, caja3]

// // if (caja1.innerHTML == 'X' && caja2.innerHTML == 'X' && caja3.innerHTML == 'X') {
// //     console.log("ganador")
// //     }
// // else {

// // };


// // let turnos = 6;
// // let interruptor = true;

// // if(caja1.innerHTML = "")



// ////////////////// Copi por si acaso //////////////


// const celdas = document.querySelectorAll(".celda");
// const statusText = document.querySelector("#statusText");
// const restart = document.querySelector("#restart");
// const condicionGanador = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [1, 4, 7],
//     [2, 5, 8],
//     [3, 6, 9],
//     [1, 5, 9],
//     [3, 5, 7],
// ];

// let opciones = ["", "", "", "", "", "", "", "", ""];
// let currentPlayer = "X";
// let running = false;

// iniciarJuego();

// function iniciarJuego(){
//     celdas.forEach(celdas => addEventListener("click", clickCelda))
//     restart.addEventListener("click", restartJuergo);
//     statusText.textContent = `${currentPlayer}'s turno`;
//     running = true;
// }
// function clickCelda(){
// const indexCelda = this.getAttribute(indexCelda);

//     if(options[indexCelda] != "" || !running){
//         return;
//     }

//     updateCelda(this, indexCelda);
//     cambiarJugador();
//     checkWinner();
// }
// function updateCelda(celdas, index){
//     options[index] = currentPlayer;
//     celdas.textContent = currentPlayer;
// }
// function cambiarJugador(){
//     currentPlayer = (currentPlayer == "X") ? "O" : "X";
//     statusText.textContent =`${currentPlayer}'s turno`; 

// }
// function checkWinner(){
//     rondaGanada = false;

//     for(let i = 0; i < condicionGanador.length; i++){
//         const condition = condicionGanador[i];
//         const celda1 = opciones[condition[0]];
//         const celda2 = opciones[condition[1]];
//         const celda3 = opciones[condition[2]];

//         if(celda1 == "" || celda2 == "" || celda3 == ""){
//             continue;
//         }
//         if(celda1 == celda2  && celda2 == celda3){
//             rondaGanada = true;
//             break;
//         }
//     }
//     if(rondaGanada){
//         statusText.textContent = `${currentPlayer} wins!`;
//         running = false;
//     }
//     else if(opciones.includes("")){
//         statusText.textContent = `Draw`;
//         running = false;
//     }
//     else{
//         cambiarJugador();
//     }
// }
// function restartJuergo(){
//     currentPlayer = "X";
//     opciones = ["", "", "", "", "", "", "", "", ""];
//     statusText.textContent = `${currentPlayer}'s turno`;
//     celdas.forEach(celdas => celda.textContent = "");
//     running = true;
// }



///////////////////// copia de youtube /////////////////


// const cells = document.querySelectorAll(".celda");
// const statusText = document.querySelector("#statusText");
// const restartBtn = document.querySelector("#restartBtn");
// const winConditions = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ];
// let options = ["", "", "", "", "", "", "", "", ""];
// let currentPlayer = "X";
// let running = false;
// let turnos = 1;

// initializeGame();

// function initializeGame(){
//     cells.forEach(cell => cell.addEventListener("click", cellClicked));
//     restartBtn.addEventListener("click", restartGame);
//     statusText.textContent = `${currentPlayer}'s turn`;
//     running = true;
// }
// function cellClicked(){
//     const cellIndex = this.getAttribute("cellIndex");

//     if(options[cellIndex] != "" || !running){
//         return;
//     }

//     updateCell(this, cellIndex);
//     checkWinner();
// }
// function updateCell(cell, index){  /*-> mi celda , 4*/
// if (turnos <= 6){    
// options[index] = currentPlayer;
//     cell.textContent = currentPlayer;
// }   
// }
// function changePlayer(){
//     currentPlayer = (currentPlayer == "X") ? "O" : "X";

//     statusText.textContent = `${currentPlayer}'s turn`;
// }
// function checkWinner(){
//     let roundWon = false;

//     for(let i = 0; i < winConditions.length; i++){
//         const condition = winConditions[i];
//         const cellA = options[condition[0]];
//         const cellB = options[condition[1]];
//         const cellC = options[condition[2]];

//         if(cellA == "" || cellB == "" || cellC == ""){
//             continue;
//         }
//         if(cellA == cellB && cellB == cellC){
//             roundWon = true;
//             break;
//         }
//     }

//     if(roundWon){
//         statusText.textContent = `${currentPlayer} wins!`;
//         running = false;
//     }
//     else if(!options.includes("")){
//         statusText.textContent = `Draw!`;
//         running = false;
//     }
//     else{
//         changePlayer();
//         turnos++
//         console.log(turnos)
//         // click: window.location.href = "ganador.html";
//     }
// }
// function restartGame(){
//     currentPlayer = "X";
//     options = ["", "", "", "", "", "", "", "", ""];
//     statusText.textContent = `${currentPlayer}'s turn`;
//     cells.forEach(cell => cell.textContent = "");
//     running = true;
//      turnos = 1;
// }

//////////////////// El bueno ///////////////////////


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



