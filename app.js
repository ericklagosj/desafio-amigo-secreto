// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    const input =document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    //agregar el nombre al array amigos
    amigos.push(nombre);

    // Mostrar el nombre en la lista
    const lista = document.getElementById('listaAmigos');
    const li = document.createElement('li');
    li.textContent = nombre;
    lista.appendChild(li);

    input.value = ""; // Limpiar el campo de entrada
    mostrarListaAmigos();
}

function mostrarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpiar la lista antes de mostrarla

    for (let i = 0; i <amigos.length; i++){
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }

}

function sortearAmigo() {
    if (amigos.length === 0){
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById('resultadoSorteado');
    resultado.innerHTML = `El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
}
