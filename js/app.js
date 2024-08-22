let amigos = []; 
function adicionar() {
    let amigo = document.getElementById("nome-amigo");
    let lista = document.getElementById("lista-amigos");
    if (amigo.value == "") {
        alert("Preencha o nome corretamente");
        return;
    }
    if (amigos.includes(amigo.value)) {
        alert("Este nome já está sendo utilizado")
        amigo.value = ""
        return;
    }

    if (lista.textContent == "") {
        lista.textContent = amigo.value;
    }
    else {
        lista.textContent += ", " + amigo.value;
    }
    amigos.push(amigo.value);
    amigo.value = "";
}

function sortear() {
    if (amigos.length <= 2) {
        alert("É necessário no mínimo 3 pessoas para sortear")
        return;
    }

    let sorteio = document.getElementById("lista-sorteio");
    sorteio.innerHTML = ""

    if (amigos.length <= 2) {
        alert("É necessário no mínimo 3 pessoas para sortear")
        return;
    }
    embaralha(amigos)
    for (let i = 0; i < amigos.length; i++) {

        if (i == amigos.length - 1) {
            sorteio.innerHTML += amigos[i] + "-->" + amigos[0] + "<br>";
        }
        else {
            sorteio.innerHTML += amigos[i] + "-->" + amigos[i + 1] + "<br>";

        }
    }

}

function atualizarListaDosAmigos(){
    let lista = document.getElementById("lista-amigos");
    lista.textContent = amigosSemDuplicatas
    amigos = amigosSemDuplicatas()

}

function reiniciar() {
    amigos = [];
    document.getElementById("nome-amigo").value = "";
    document.getElementById("lista-amigos").innerHTML = "";
    document.getElementById("lista-sorteio").innerHTML = "";
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}
