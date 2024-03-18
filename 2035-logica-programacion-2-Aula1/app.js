let numeroSecreto = 0;
let intentos = 0;
let numerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroSecreto === numUsuario){
        //El usuario acertó
        asignarTextoElemento('p','Acertaste el número en '+ intentos+ " " + (intentos ==1 ? "intento" : "intentos" + " ") );
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El usuario no acertó
        limpiarCampo();
        intentos++;
        if (numeroSecreto > numUsuario) {
            asignarTextoElemento('p','El número es mayor');
        } else {
            asignarTextoElemento('p','El número es menor');
        }
    }

    return;
}
//Condición de salida para evitar errores en la recursividad
function generaNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo) + 1;
    
    console.log(numeroGenerado);
    console.log(numerosSorteados);
    if (numerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se asignaron todos los números posibles.');
    }else{
        if (numerosSorteados.includes(numeroGenerado)) {
            return generaNumeroSecreto();
        } else{
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function limpiarCampo() {
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p','Indica un número del 1 al ' + numeroMaximo + ".");
    numeroSecreto = generaNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto)
}

function reiniciarJuego() {
    //Limpiar la caja
    limpiarCampo();
    //Indicar mensaje de inicio
    //Generar el número aleatorio
    //Reiniciar el número de intentos
    condicionesIniciales();
    //Desabilitar el botón
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();