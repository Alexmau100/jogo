let amigos = ["Alex", "Cris", "Igor", "Guga"];  

function adicionarAmigo() { 
    const nomeInput = document.getElementById('nomeInput').value;  

    if (nomeInput) {  
        amigos.push(nomeInput);  
        document.getElementById('nomeInput').value = '';  
        atualizarLista();  
    } else {
        alert("Por favor, insira um nome.");
    }
}

function atualizarLista() {
    const listaElement = document.getElementById('listaAmigos');
    listaElement.innerHTML = '';  

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaElement.appendChild(li);  
    });
}

function sortearAmigo() {
    if (amigos.length < 4) {  
        alert("Não há amigos suficientes para sortear. Adicione mais amigos!");
        return;  
    }

    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    
    
    alert("O amigo sorteado é: " + amigoSorteado);
}

