// Elements 
const envelope = document.getElementById("envelope");
const carta = document.getElementById("carta-container");
const botaoSim = document.querySelector(".botao-sim");
const botaoNao = document.querySelector(".botao-nao");

const titulo = document.getElementById("titulo-carta");
const gato = document.getElementById("carta-gato");
const botoes = document.getElementById("botoes-carta");
const textoCarta = document.getElementById("texto-carta");



// Envelope Clique 

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    carta.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".janela-carta").classList.add("aberta");
    },50);
});



// Lógica do botao SIM

let simScale = 1;
botaoSim.style.position = "relative";
botaoSim.style.transformOrigin = "center center";
botaoSim.style.transition = "transform 0.3s ease";

botaoNao.addEventListener("click", () => {
    simScale += 1.025;

    if (botaoSim.style.position !== "fixed") {
        botaoSim.style.position = "fixed";
        botaoSim.style.top = "50%";
        botaoSim.style.left = "50%"
        botaoSim.style.transform = `translate(-50%, -50%) scale(${simScale})`;
    }

    else {
        botaoSim.style.transform = `translate(-50%, -50%) scale(${simScale})`;
    }

})



// Se SIM for clicado

botaoSim.addEventListener("click", () => {
    titulo.textContent = "Parabéns!";

    gato.src = "gato_danca.gif";

    document.querySelector(".janela-carta").classList.add("final");

    botoes.style.display = "none";

    textoCarta.style.display = "inline-block";

})



// Lógica para mover o botao NAO

botaoNao.addEventListener("click", () => {
    const min = 200;
    const max = 200;

    const distancia = Math.random() * (max - min) + min;
    const angulo = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angulo) * distancia;
    const moveY = Math.sin(angulo) * distancia;

    botaoNao.style.transition = "transform 0.3s ease";
    botaoNao.style.transform = `translate(${moveX}px, ${moveY}px)`
})