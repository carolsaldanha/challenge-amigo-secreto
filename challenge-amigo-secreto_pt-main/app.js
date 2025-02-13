document.addEventListener("DOMContentLoaded", () => {
    let amigos = [];
    const inputNome = document.getElementById("amigo");
    const listaNomes = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");
    const btnAdicionar = document.querySelector(".button-add");
    const btnSortear = document.querySelector(".button-draw");

    btnAdicionar.addEventListener("click", adicionarAmigo);
    btnSortear.addEventListener("click", sortearAmigo);

    function adicionarAmigo() {
        const nome = inputNome.value.trim();

        if (nome === "") {
            alert("Por favor, insira um nome válido.");
            return;
        }

        amigos.push(nome);
        atualizarLista();
        inputNome.value = "";
    }

    function sortearAmigo() {
        if (amigos.length === 0) {
            alert("Adicione pelo menos um nome antes de sortear.");
            return;
        }
        const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
        resultado.innerHTML = `<li>O amigo secreto é: <strong>${sorteado}</strong>!</li>`;
    }

    function atualizarLista() {
        listaNomes.innerHTML = "";
        amigos.forEach(nome => {
            const li = document.createElement("li");
            li.textContent = nome;
            listaNomes.appendChild(li);
        });
    }
});