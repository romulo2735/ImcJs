//utilizando a classe CSS, é não mais a TAG HTML.
var titulo = document.querySelector(".titulo");
//console.log(titulo); // imprimi a TAG e o conteudo dentro dela.
//console.log(titulo.textContent); // imprimi o conteudo dentro da tag HTML

//calculando o IMC
var pacientes = document.querySelectorAll(".paciente"); //pega todos os dados

for(var i = 0; i < pacientes.length; i++){

    var tdPeso = pacientes[i].querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = pacientes[i].querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = pacientes[i].querySelector(".info-imc");

    var pesoValido = ValidaPeso(peso);
    var alturaValida = ValidaAltura(altura);

    //verifica se o peso é valido
    if (!pesoValido) {
        console.log("Peso inválido");
        pesoValido = false;
        tdImc.textContent = "Peso Inválido";
        pacientes[i].classList.add("paciente-invalido");
    }
    //verifica se a altura é valida
    if (!alturaValida) {
        console.log("Altura inválida");
        alturaValida = false;
        tdImc.textContent = "Altura Válida";
        pacientes[i].classList.add("paciente-invalido");
    }
    //calcula o IMC
    if (pesoValido && alturaValida) {
        var imc = CalculaImc(peso,altura);
        tdImc.textContent = imc;
    }
}

function CalculaImc(pese,altura){
    var imc = 0;

    imc = peso/(altura*altura);
    return imc.toFixed(2);
}

function ValidaPeso(peso){
    if(peso > 0 && peso <= 1000){
        return true;
    }
    else{
        return false;
    }
}

function ValidaAltura(altura){
    if (altura >= 0 && altura <= 3) {
        return true;
    }
    else{
        return false;
    }
}