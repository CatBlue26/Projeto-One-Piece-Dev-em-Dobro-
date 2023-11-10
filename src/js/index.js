/*Passo 1: Pegar os botões do JS para poder verificar quando o usuário clicar em cima de um deles */

//obj 2 - passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover seleção.

const botoes = document.querySelectorAll('.botao');

//objetivo 2 - qdo clicar no botão do personagem mostrar as informações do personagem

//passo 1 - pegar os personagem no JS para poder mostrar ou esconder ele

const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        desselecionarBotao(); //irá remover a classe do elemento
        desselecionarPersonagem(); //ojb 2- passo 3
        /*Passo 2: adicionar a classe "adicionado" no botão que o usuário clicou */

        botao.classList.add("selecionado"); //adiciona a classe ao botão

        //obj 2 - passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou

        personagens[indice].classList.add("selecionado");

    })

});

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

/* passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover a seleção*/

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado"); //seleciona a classe "selecionado"
    botaoSelecionado.classList.remove("selecionado");
}
/*botoes.addEventListener("click", () => {

})*/
