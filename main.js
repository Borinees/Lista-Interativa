//declara array
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
    tarefas.push({ tarefa: tarefa, descricao: descricao, concluida: false });
    criarLista(); //chama criarLista para atualizar a exibição
    atualizarContadores(); //atualiza os contadores de tarefas
}

//função para criar a lista de tarefas na tabela HTML
function criarLista() {
    let listaHTML = '<tr><th>Tarefa</th><th>Descrição</th><th>Ações</th></tr>';

    if (tarefas.length === 0) {
        listaHTML += '<tr><td coldspan= "3" style=text-align: center; padding: 20px;">Nenhuma tarefa ainda</td></tr>';
    }
    else{
        for (let i = 0; i < tarefas.length; i++) {
            let classe = tarefas[i].concluida ? "concluida" : "";
            listaHTML += `
            <tr>
                <td>${tarefas[i].tarefa}</td>
                <td>${tarefas[i].descricao}</td>
                    <td>
                        <button class='btn btn-success' onclick='concluir(${i})'>Concluir</button>
                        <button class='btn btn-danger' onclick='excluir(${i})'>Excluir</button>
                    </td>
            </tr>`;
        }
    }
    document.getElementById("lista").innerHTML = listaHTML;
}

//função para remover a tarefa
function excluir(index) {
    tarefas.splice(index, 1);
    criarLista(); //atualiza a lista
    atualizarContadores(); //atualiza os contadores
}

//função para concluir a tarefa
function concluir(index) {
    tarefas[index].concluida = true;
    criarLista();
    atualizarContadores();
}

//função para atualizar os contadores
function atualizarContadores() {
    let totalTarefas = tarefas.length;
    let tarefasConcluidas = tarefas.filter(tarefa => tarefa.concluida).length;
    let tarefasNaoConcluidas = tarefas.filter(tarefa => !tarefa.concluida).length;
    document.getElementById("totalTarefas").textContent = totalTarefas;
    document.getElementById("tarefasConcluidas").textContent = tarefasConcluidas;
    document.getElementById("tarefasNaoConcluidas").textContent = tarefasNaoConcluidas;
}
