//função para salva a tarefa e descrição

function salvarTarefaDescricao() {
    let tarefa = document.getElementById('tarefaText').value;
    let descricao = document.getElementById('descricaoText').value;

    // Verifica se o campo de tarefa está vazio e retorna um alerta
    if(tarefa.trim === "") {
        alert("Por favor, preencha o nome da tarefa.");
        return; 
    }
}

//declara array
var tarefas = [];
//função para armazenar a tarefa e descrição no array
function armazenaTarefaDescricao() {
    let tarefa = document.getElementById('tarefaText').value;
    let descricao = document.getElementById('descricaoText').value;

    if(tarefa){ 
            tarefas.push(tarefa);
            criarLista(tarefa, descricao);
            document.getElementById('tarefaText').value = ""; // Limpa o campo de tarefa
            document.getElementById('descricaoText').value = ""; // Limpa o campo de descrição
    }
}
