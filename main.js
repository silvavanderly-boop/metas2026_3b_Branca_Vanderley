// ==========================================
// 1. LÓGICA DE ALTERNAR AS ABAS (CLIQUE)
// ==========================================
const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

// ==========================================
// 2. LÓGICA DO CRONÔMETRO REGRESSIVO
// ==========================================

// Datas objetivo para cada uma das 4 abas
const tempoObjetivo1 = new Date("2027-01-20T00:00:00");
const tempoObjetivo2 = new Date("2027-09-14T00:00:00");
const tempoObjetivo3 = new Date("2027-01-01T00:00:00");
const tempoObjetivo4 = new Date("2027-08-15T00:00:00");

// Array com os tempos objetivos
const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

// Função que calcula o tempo restante baseado em uma data final
function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;

    // Se o tempo já acabou, zera o cronômetro
    if (tempoFinal < 0) {
        return [0, 0, 0, 0];
    }

    // Cálculos matemáticos para converter milissegundos em dias, horas, minutos e segundos
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    return [dias, horas, minutos, segundos];
}

// Função que atualiza os números na tela para cada uma das abas
function atualizaCronometro() {
    for (let i = 0; i < tempos.length; i++) {
        let resultado = calculaTempo(tempos[i]);

        // Procura os IDs corretos correspondentes a cada aba (ex: dias0, dias1, dias2...)
        document.getElementById(`dias${i}`).textContent = resultado[0];
        document.getElementById(`horas${i}`).textContent = resultado[1];
        document.getElementById(`min${i}`).textContent = resultado[2];
        document.getElementById(`seg${i}`).textContent = resultado[3];
    }
}

// Função principal que inicia o cronômetro e faz ele atualizar a cada 1 segundo (1000 milissegundos)
function comecarCronometro() {
    atualizaCronometro(); // Executa uma vez imediatamente
    setInterval(atualizaCronometro, 1000); // Repete a cada 1 segundo
}

// Inicializa o cronômetro assim que a página carrega
comecarCronometro();