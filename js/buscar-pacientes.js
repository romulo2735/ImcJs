var botaoAdd = document.querySelector("#buscar-pacientes");

botaoAdd.addEventListener("click", function(){

    //consumindo uma API
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    
    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200){
            erroAjax.classList.add("#invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach( function (paciente) {
                AdicionaPaciente(paciente);
            });
        }
        else{
            erroAjax.classList.remove("#invisivel");
        }
    });
    xhr.send();
});