    
// let caja1 = document.getElementById("caja1");
// let caja2 = document.getElementById("caja2");
// let caja3 = document.getElementById("caja3");

let cuadricula = ["","","","","","","","",""]
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
    switch(posicion){
        case '1':
            if(caja1.innerHTML == ""){
                caja1.innerHTML = (interruptor) ? `<p style="font-size: 10vh">X</p>` : `<p style="font-size: 10vh">O</p>`;
                interruptor = !interruptor;
            };
        break;
        case '2':
            if(caja2.innerHTML == ""){
                caja2.innerHTML = (interruptor) ? `<p style="font-size: 10vh">X</p>` : `<p style="font-size: 10vh">O</p>`;
                interruptor = !interruptor;
            };
        break;
        case '3':
            if(caja3.innerHTML == ""){
                caja3.innerHTML = (interruptor) ? `<p style="font-size: 10vh">X</p>` : `<p style="font-size: 10vh">O</p>`;
                interruptor = !interruptor;
            };
        break;
        case '4':
            if(caja4.innerHTML == ""){
                caja4.innerHTML = (interruptor) ? `<p style="font-size: 10vh">X</p>` : `<p style="font-size: 10vh">O</p>`;
                interruptor = !interruptor;
            };
        break;
        case '5':
            if(caja5.innerHTML == ""){
                caja5.innerHTML = (interruptor) ? `<p style="font-size: 10vh">X</p>` : `<p style="font-size: 10vh">O</p>`;
                interruptor = !interruptor;
            };
        break;
        case '6':
            if(caja6.innerHTML == ""){
                caja6.innerHTML = (interruptor) ? `<p style="font-size: 10vh">X</p>` : `<p style="font-size: 10vh">O</p>`;
                interruptor = !interruptor;
            };
        break;
        case '7':
            if(caja7.innerHTML == ""){
                caja7.innerHTML = (interruptor) ? `<p style="font-size: 10vh">X</p>` : `<p style="font-size: 10vh">O</p>`;
                interruptor = !interruptor;
            };
        break;
        case '8':
            if(caja8.innerHTML == ""){
                caja8.innerHTML = (interruptor) ? `<p style="font-size: 10vh">X</p>` : `<p style="font-size: 10vh">O</p>`;
                interruptor = !interruptor;
            };
        break;
        case '9':
            if(caja9.innerHTML == ""){
                caja9.innerHTML = (interruptor) ? `<p style="font-size: 10vh">X</p>` : `<p style="font-size: 10vh">O</p>`;
                interruptor = !interruptor;
            };
        break;


        default:
            console.log("error");
    };
};
