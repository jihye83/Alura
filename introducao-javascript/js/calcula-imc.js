// querySelector só traz um unico elemento
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

// querySelectorAll traz todos os elementos
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    console.log(pacientes[i]);

    var paciente = pacientes[i];

    //buscando o peso do paciente
    var tdPeso = paciente.querySelector(".info-peso");
    //pegando somente o peso e colocando na variavel
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = validaPeso(peso);
    var alturaVAlido = validaAltura(altura);
    // validando peso
    if(!pesoValido){
        console.log("Peso Invalido");
        pesoValido = false;
        // se for false mostrar na tabela o peso invalido
        tdImc.textContent = "Peso invalido!";
        //style.color -> mundando a cor da fonte
    //   paciente.style.color = "red";
        //backgroundColor -> mudando a fundo da tabela
    //   paciente.style.backgroundColor = "lightcoral";
        //classList -> pega a classe de CSS e coloca aqui
        paciente.classList.add("paciente-invalido");
    }
    if(!alturaVAlido){
        console.log("altura invalida");
        alturaVAlido = false;
        tdImc.textContent = "Altura invalido!";
        paciente.classList.add("paciente-invalido");
    }
    if(pesoValido && alturaVAlido){
    var imc = calculaImc(peso,altura);
    tdImc.textContent = imc;
    }
}

function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura < 3.00){
        return true;
    }else{
        return false;
    }
}

    //toFixed coloca as casas decimais.
 function calculaImc(peso,altura){
     var imc = 0;
     imc = peso / (altura * altura);
     return imc.toFixed(2);
 }