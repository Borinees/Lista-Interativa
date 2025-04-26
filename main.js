//função para salva a tarefa e descrição

function salvarTarefaDescricao() {
    let task = document.getElementById('tarefaText').value;
    let description = document.getElementById('descricaoText').value;

    // Verifica se o campo de tarefa está vazio e retorna um alerta
    if(tarefa.trim() === "") {
        alert("Por favor, preencha o nome da tarefa.");
        return; 
    }
}

//declara array
var tarefas = [];
// Função para salvar a tarefa e descrição (acionada por um evento, por exemplo, um clique de botão)
function salvarTarefaDescricao() {
    let taskInput = document.getElementById('tarefaText');
    let descriptionInput = document.getElementById('descricaoText');
    let tarefa = taskInput.value;
    let descricao = descriptionInput.value;
    // Verifica se o campo de tarefa está vazio e retorna um alerta
    if (tarefa.trim() === "") {
        alert("Por favor, preencha o nome da tarefa.");
        return;
    }
    // Chama a função para armazenar a tarefa e descrição
    armazenaTarefaDescricao(tarefa, descricao);
    // Limpa os campos de input após salvar
    taskInput.value = "";
    descriptionInput.value = "";
}

// Função para armazenar a tarefa e descrição no array
function armazenaTarefaDescricao(tarefa, descricao) {
    tarefas.push({ tarefa: tarefa, descricao: descricao });
    criarLista(); // Chama criarLista para atualizar a exibição
}

// Função para criar a lista de tarefas na tabela HTML
function criarLista() {
    let listaHTML = "<tr><th>Tarefa</th><th>Descrição</th><th>Ações</th></tr>";
    for (let i = 0; i < tarefas.length; i++) {
        listaHTML += `<tr><td>${tarefas[i].tarefa}</td><td>${tarefas[i].descricao}</td><td><button class='btn btn-success'>Concluido</button><button class='btn btn-danger' onclick='excluir(${i})'>Excluir</button></td></tr>`;
    }
    document.getElementById("lista").innerHTML = listaHTML;
}

// Função para remover a tarefa
function excluir(index) {
    tarefas.splice(index, 1);
    criarLista(); // Atualiza a lista após a exclusão
}