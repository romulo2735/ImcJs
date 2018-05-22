var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener('click', function (event) {
    event.preventDefault();

    var form = document.querySelector(".form-paciente");
    //dados do formulario.
    var paciente = DadosForm(form);
    //cria TR e TD do paciente.
    var pacienteTr = MontarTR(paciente);

    //se a variavel for maior que 0 mostra um erro
    var erros = ValidaPaciente(paciente);
    if(erros.length > 0){
        MensagensErros(erros);
        return;
    }

    //verificar se os dados estão conrretos, se estiver invalido não preenche os campos na tabela e retorna nada, além do alert.
    if(!ValidaPaciente(paciente)){
        alert('Paciente Inválido');
        return;
    }

    //adicionando o paciente na tabela.
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
    form.reset();

    var MensagensErro = document.querySelector("#msgs-erros");
    MensagensErro.innerHTML = "";
});

function MensagensErros(erros) {
    var ul = document.querySelector("#msgs-erros");
    ul.innerHTML = "";

    erros.forEach( function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

//valores inseridos no formulario.
function DadosForm(form) {
    
    //criando objeto paciente
    var paciente = {
        nome:       form.nome.value,
        peso:       form.peso.value,
        altura:     form.altura.value,
        gordura:    form.gordura.value,
        imc:        CalculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function MontarTR(paciente){
    // criando uma TR dentro do HTML
    var pacienteTr = document.createElement("tr");
    //adicionado a classe paciente
    pacienteTr.classList.add("paciente");

    // aplicando o TD como Filho de TR.
    pacienteTr.appendChild(MontaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(MontaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(MontaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(MontaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(MontaTd(paciente.imc, "info-imc"));

    return pacienteTr;
} 

function MontaTd(dado,classe){
    
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function ValidaPaciente(paciente){
    var erros = [];

    if(!ValidaPeso(paciente.peso)){
        erros.push("Peso é Inválido");
    }

    if (!ValidaAltura(paciente.altura)) {
        erros.push("Altura é Inválida");
    }

    if (paciente.nome.length == 0){
        erros.push("Nome não pode ser vazio");
    }

    if(paciente.altura.length == 0){
        erros.push("Altura não pode ser vazia");
    }

    if(paciente.peso.length == 0){
        erros.push("Peso não pode ser vazio");
    }

    if(paciente.gordura.length == 0){
        erros.push("Gordura não pode ser Vazio");
    }

    return erros;
}