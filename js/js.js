
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


const cells = document.querySelectorAll(".celda");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");
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
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

initializeGame();

function initializeGame(){
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true;
}
function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex");

    if(options[cellIndex] != "" || !running){
        return;
    }

    updateCell(this, cellIndex);
    checkWinner();
}
function updateCell(cell, index){  /*-> mi celda , 4*/
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}
function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s turn`;
}
function checkWinner(){
    let roundWon = false;

    for(let i = 0; i < winConditions.length; i++){
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            roundWon = true;
            break;
        }
    }

    if(roundWon){
        statusText.textContent = `${currentPlayer} wins!`;
        running = false;
    }
    else if(!options.includes("")){
        statusText.textContent = `Draw!`;
        running = false;
    }
    else{
        changePlayer();
    }
}
function restartGame(){
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
}