var tabela = document.querySelector("table");

//Removendo paciente.
tabela.addEventListener("dblclick", function (event) {
    event.target.parentNode.classList.add("fadeOut"); // colocando class css de transição

    //tempo para remover a TR
    setTimeout(function () {
        event.target.parentNode.remove();//removendo a TD através do PAI TR
    }, 450);
    //alert("Paciente Removido Com Sucesso!");
});