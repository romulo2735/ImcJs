/*
    esse script faz um pesquisa dinamica em cima dos nomes do pacientes, 
    a medida que digita o nome ele vai filtrando
*/
var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    
    //selecionando todos os pacientes
    var pacientes = document.querySelectorAll(".paciente");

    //verificando se o campo pesquisa foi digitado algum.
    if(this.value.length > 0){
        //interando para acessar todos os nomes dos pacientes
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            //extraindo o nome do paciente
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            
            // filtrando através de expressao regular.
            var expressao = new RegExp(this.value, "i");
            if(!expressao.test(nome)){
                paciente.classList.add("invisivel");
            }
            else{
                paciente.classList.remove("invisivel");
            }
        }
    }
    else{
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});