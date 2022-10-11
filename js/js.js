
////////// AYUDAS //////////////

// if (arrayPlayerTurn.length == 3) {
//     if (arrayPlayerTurn[0].position == pos1 && arrayPlayerTurn[1].position == pos2 &&
//         arrayPlayerTurn[2].position == pos3)




// let caja1 = document.getElementById("caja1");
// let caja2 = document.getElementById("caja2");
// let caja3 = document.getElementById("caja3");

let cuadricula = ["", "", "", "", "", "", "", "", ""]
// const restart = getElementById("restart");

const restart = () => {
    caja1.innerHTML = "";
    caja2.innerHTML = "";
    caja3.innerHTML = "";
    caja4.innerHTML = "";
    caja5.innerHTML = "";
    caja6.innerHTML = "";
    caja7.innerHTML = "";
    caja8.innerHTML = "";
    caja9.innerHTML = "";

};



let interruptor = true;

const marcarCasilla = (posicion) => {
    switch (posicion) {
        case '1':
            if (caja1.innerHTML == "") {
                caja1.innerHTML = (interruptor) ? `<p style="font-size: 10vh">X</p>` : `<p style="font-size: 10vh">O</p>`;
                interruptor = !interruptor;
            };
            break;
        case '2':
            if (caja2.innerHTML == "") {
                caja2.innerHTML = (interruptor) ? `<p style="font-size: 10vh">X</p>` : `<p style="font-size: 10vh">O</p>`;
                interruptor = !interruptor;
            };
            break;
        case '3':
            if (caja3.innerHTML == "") {
                caja3.innerHTML = (interruptor) ? `<p style="font-size: 10vh">X</p>` : `<p style="font-size: 10vh">O</p>`;
                interruptor = !interruptor;
            };
            break;
        case '4':
            if (caja4.innerHTML == "") {
                caja4.innerHTML = (interruptor) ? `<p style="font-size: 10vh">X</p>` : `<p style="font-size: 10vh">O</p>`;
                interruptor = !interruptor;
            };
            break;
        case '5':
            if (caja5.innerHTML == "") {
                caja5.innerHTML = (interruptor) ? `<p style="font-size: 10vh">X</p>` : `<p style="font-size: 10vh">O</p>`;
                interruptor = !interruptor;
            };
            break;
        case '6':
            if (caja6.innerHTML == "") {
                caja6.innerHTML = (interruptor) ? `<p style="font-size: 10vh">X</p>` : `<p style="font-size: 10vh">O</p>`;
                interruptor = !interruptor;
            };
            break;
        case '7':
            if (caja7.innerHTML == "") {
                caja7.innerHTML = (interruptor) ? `<p style="font-size: 10vh">X</p>` : `<p style="font-size: 10vh">O</p>`;
                interruptor = !interruptor;
            };
            break;
        case '8':
            if (caja8.innerHTML == "") {
                caja8.innerHTML = (interruptor) ? `<p style="font-size: 10vh">X</p>` : `<p style="font-size: 10vh">O</p>`;
                interruptor = !interruptor;
            };
            break;
        case '9':
            if (caja9.innerHTML == "") {
                caja9.innerHTML = (interruptor) ? `<p style="font-size: 10vh">X</p>` : `<p style="font-size: 10vh">O</p>`;
                interruptor = !interruptor;
            };
            break;


        default:
            console.log("error");
    };
};

let winer = "ganador";

let caja1 = document.getElementById("caja1");
let caja2 = document.getElementById("caja2");
let caja3 = document.getElementById("caja3");
let caja4 = document.getElementById("caja4");
let caja5 = document.getElementById("caja5");
let caja6 = document.getElementById("caja6");
let caja7 = document.getElementById("caja7");
let caja8 = document.getElementById("caja8");
let caja9 = document.getElementById("caja9");

let arrayWiner1 = [caja1, caja2, caja3]

if (caja1 == 'X' && caja2 == 'X' && caja3 == 'X') {
    console.log("ganador")
}
else {

};
