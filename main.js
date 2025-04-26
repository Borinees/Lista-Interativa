function preencher() {
    let task = document.getElementById('tarefaText').value;
    let description = document.getElementById('descricaoText').value;

    //verifica se o campo de tarefa está vazio e retorna um alerta
    if(tarefa.trim() === "") {
        alert("Por favor, preencha o nome da tarefa.");
        return; 
    }
}

//feclara array
var tarefas = [];
//função para salvar a tarefa e descrição
function salvarTarefaDescricao() {
    let taskInput = document.getElementById('tarefaText');
    let descriptionInput = document.getElementById('descricaoText');
    let tarefa = taskInput.value;
    let descricao = descriptionInput.value;
    //verifica se o campo de tarefa está vazio e retorna um alerta
    if (tarefa.trim() === "") {
        alert("Por favor, preencha o nome da tarefa.");
        return;
    }
    //chama a função para armazenar a tarefa e descrição
    armazenaTarefaDescricao(tarefa, descricao);
    //limpa os campos de input após salvar
    taskInput.value = "";
    descriptionInput.value = "";
}

//função para armazenar a tarefa e descrição no array
function armazenaTarefaDescricao(tarefa, descricao) {
    tarefas.push({ tarefa: tarefa, descricao: descricao });
    criarLista(); //chama criarLista para atualizar a exibição
}

//função para criar a lista de tarefas na tabela HTML
function criarLista() {
    let listaHTML = "<tr><th>Tarefa</th><th>Descrição</th><th>Ações</th></tr>";
    for (let i = 0; i < tarefas.length; i++) {
        listaHTML += `<tr><td>${tarefas[i].tarefa}</td><td>${tarefas[i].descricao}</td><td><button class='btn btn-success'>Concluido</button><button class='btn btn-danger' onclick='excluir(${i})'>Excluir</button></td></tr>`;
    }
    document.getElementById("lista").innerHTML = listaHTML;
}

//função para remover a tarefa
function excluir(index) {
    tarefas.splice(index, 1);
    criarLista(); //atualiza a lista após a exclusão
}
