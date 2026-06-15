// Seleciona todos os botões e todas as abas de conteúdo
const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

// Laço de repetição para adicionar o evento de clique em cada botão
for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        // Remove a classe "ativo" de todos os botões e textos antes de ativar o próximo
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        // Adiciona a classe "ativo" apenas no botão e no texto que foram clicados
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

// Configuração das datas objetivo para os contadores regressivos
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2027-01-20T00:00:00");
const tempoObjetivo2 = new Date("2027-09-14T00:00:00");
const tempoObjetivo3 = new Date("2027-01-01T00:00:00");
const tempoObjetivo4 = new Date("2027-08-15T00:00:00");

// Array que guarda todas as datas para usar na lógica do cronômetro futuramente
const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];