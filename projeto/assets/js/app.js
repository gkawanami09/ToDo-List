var listaTarefa = []

var formCadastro = document.getElementById("formCadastroTarefa")
formCadastro.addEventListener('submit', function(event){
    event.preventDefault()

    var form = new FormData(this)

    var tarefa = form.get("tarefa")
    listaTarefa.push(tarefa)
    console.log(listaTarefa)
})