//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];  // Array para armazenar os nomes


function adicionarAmigo() {
    const amigoInput = document.querySelector('input');  // Captura o campo de entrada
    const amigo = amigoInput.value.trim();  // Remove espaços extras antes e depois do nome
  
    // Validar se o campo não está vazio
    if (amigo === '') {
        alert('Por favor, insira um nome.');  // Exibe a mensagem de erro.
    } else {
        amigos.push(amigo);  // Adiciona o nome ao array
        amigoInput.value = '';  // Limpa o campo de entrada
        atualizarListaDeAmigos();  // Atualiza a lista de amigos na tela
    }
}
   
   

function atualizarListaDeAmigos() {
    const listaElement = document.getElementById('listaAmigos'); // Obtém a lista de amigos
    listaElement.innerHTML = '';  // Limpa a lista antes de atualizar

    //Percorre o array de amigos e cria um item na lista para cada amigo
    for (let i = 0; i < amigos.length; i++) {
        const item = document.createElement('li');  // Cria um novo <li> para cada amigo
        item.textContent = amigos[i];  // Define o texto do <li> como o nome do amigo
        listaElement.appendChild(item);  // Adiciona o <li> à lista
    }
}

function sortearAmigo() {
    //verificar se há amigos disponíveis para o sorteio
    if (amigos.length === 0){
        alert('Não tem amigos disponíveis para sorteas.'); // Se não houver amigos para, exibe a mensagem de alerta.
    } else{
        //Gerar um índice aleatório entre 0 e número de amigos
        const indiceAleatorio = Math.floor(Math.random()*amigos.length);
        const amigoSorteado = amigos[indiceAleatorio]; // Obtém sorteado com no índice aleatório

        //Exibir o amigo sorteado
        const resultadoElement = document.getElementById('resultado');
        resultadoElement.innerHTML = `O amigo sorteado é: ${amigoSorteado}`; // Atualiza o resultado
    }    
    }
