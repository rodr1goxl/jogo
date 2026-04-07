// Configuração das 5 Fases
const fases = [
    {
        titulo: "🌊 1º Desafio: Navegar pelo Oceano",
        desc: "Para sair do porto, você precisa deste objeto:",
        dica: "\"Fui herdado dos árabes. Ajudo o marinheiro a olhar para as estrelas.\"",
        palavra: "ASTROLABIO"
    },
    {
        titulo: "🏴‍☠️ 2º Desafio: Defesa do Navio",
        desc: "Piratas à vista! Precisamos carregar os canhões com...",
        dica: "\"Sou um pó escuro e perigoso que faz barulho no mar.\"",
        palavra: "POLVORA"
    },
    {
        titulo: "🧭 3º Desafio: A Calmaria",
        desc: "As velas estão murchas. Precisamos aguardar o...",
        dica: "\"Não posso ser visto, mas empurro o navio para a frente.\"",
        palavra: "VENTO"
    },
    {
        titulo: "🏝️ 4º Desafio: Encontrando Terra",
        desc: "Avistamos uma ilha! Onde marcamos nossa rota?",
        dica: "\"Sou um desenho do mundo num pedaço de papel.\"",
        palavra: "MAPA"
    },
    {
        titulo: "💰 5º Desafio: O Mercado Final",
        desc: "Chegamos ao destino! Qual especiaria viemos buscar?",
        dica: "\"Sou pequena, preta e ardo na boca. Valho meu peso em ouro!\"",
        palavra: "PIMENTA"
    }
];

// Variáveis de Estado
let faseAtual = 0;
let ouro = 50;
let letrasReveladas = [];

// Elementos da Interface
const elTitulo = document.getElementById('challenge-title');
const elDesc = document.getElementById('challenge-desc');
const elDica = document.getElementById('hint-text');
const elSlots = document.getElementById('word-slots');
const elOuro = document.getElementById('gold-display');
const elProgresso = document.getElementById('progress-text');
const elInputPalpite = document.getElementById('player-guess');
const elInputAposta = document.getElementById('bet-amount');

// Função para limpar acentos e converter para maiúsculas
function formatarTexto(texto) {
    return texto.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
}

function carregarFase() {
    if (faseAtual >= fases.length) {
        vencerJogo();
        return;
    }

    const fase = fases[faseAtual];
    // Reinicia as letras escondidas para a nova palavra
    letrasReveladas = Array(fase.palavra.length).fill("_");
    
    elTitulo.innerText = fase.titulo;
    elDesc.innerHTML = `<strong>Desafio:</strong> ${fase.desc}`;
    elDica.innerHTML = `<strong>DICA:</strong> ${fase.dica}`;
    elProgresso.innerText = `${faseAtual}/${fases.length} etapas concluídas`;
    elInputPalpite.value = "";
    
    atualizarSlots();
    atualizarOuro();
}

function atualizarSlots() {
    elSlots.innerText = `PALAVRA: ${letrasReveladas.join(" ")}`;
}

function atualizarOuro() {
    elOuro.innerText = `${ouro} moedas`;
}

// LÓGICA DE REVELAR LETRA (CORRIGIDA)
document.getElementById('btn-hint').addEventListener('click', () => {
    const custoDica = 5;
    
    if (ouro < custoDica) {
        alert("Ouro insuficiente para comprar uma letra!");
        return;
    }

    // Pegamos a palavra da fase atual formatada
    const palavraLimpa = formatarTexto(fases[faseAtual].palavra);
    let indicesEscondidos = [];
    
    // Mapeia quais posições ainda têm "_"
    for (let i = 0; i < letrasReveladas.length; i++) {
        if (letrasReveladas[i] === "_") {
            indicesEscondidos.push(i);
        }
    }

    if (indicesEscondidos.length > 0) {
        // Sorteia um dos índices que ainda estão escondidos
        const indiceSorteado = indicesEscondidos[Math.floor(Math.random() * indicesEscondidos.length)];
        
        // Revela a letra correta naquela posição
        letrasReveladas[indiceSorteado] = palavraLimpa[indiceSorteado];
        
        ouro -= custoDica;
        atualizarOuro();
        atualizarSlots();
    } else {
        alert("Todas as letras já foram reveladas!");
    }
});

// LÓGICA DE ENVIAR PALPITE
document.getElementById('btn-submit').addEventListener('click', () => {
    const palpite = formatarTexto(elInputPalpite.value);
    const aposta = parseInt(elInputAposta.value);
    const respostaCerta = formatarTexto(fases[faseAtual].palavra);

    if (isNaN(aposta) || aposta < 1) {
        alert("Defina uma aposta válida!");
        return;
    }
    if (aposta > ouro) {
        alert("Você não tem ouro suficiente!");
        return;
    }

    if (palpite === respostaCerta) {
        alert(`Magnífico! Você ganhou ${aposta} moedas.`);
        ouro += aposta;
        faseAtual++;
        carregarFase();
    } else {
        alert("Resposta errada! Perdemos tesouros nessa manobra...");
        ouro -= aposta;
        atualizarOuro();
        
        if (ouro <= 0) perderJogo();
    }
});

function vencerJogo() {
    elTitulo.innerText = "🏆 ROTA CONCLUÍDA!";
    elDesc.innerHTML = `Parabéns, Almirante! Você chegou às Índias com <strong>${ouro} moedas</strong>.`;
    document.querySelector('.challenge-body').style.textAlign = "center";
    document.querySelector('.action-panel').style.display = "none";
    elSlots.innerText = "⚓ NAVIO CARREGADO DE ESPECIARIAS";
}

function perderJogo() {
    elTitulo.innerText = "☠️ NAVIO NAUFRAGADO";
    elDesc.innerHTML = "Suas moedas acabaram e sua jornada terminou no fundo do mar.";
    document.querySelector('.action-panel').style.display = "none";
    elOuro.innerText = "0 - Falido";
}

// Início imediato
carregarFase();
