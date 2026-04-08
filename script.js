// Configuração das Fases (Mude a 'historia' para editar o texto da carta de chegada)
const fases = [
    {
        titulo: "<span class='material-symbols-outlined'>water</span> 1º Desafio: Navegar pelo Oceano",
        desc: "Para sair do porto, você precisa deste objeto:",
        dica: "\"Fui herdado dos árabes. Ajudo o marinheiro a olhar para as estrelas.\"",
        palavra: "ASTROLABIO",
        historia: "Os ventos sopraram a nosso favor! Saímos do porto seguro e nossa embarcação agora navega em direção ao Cabo das Tormentas."
    },
    {
        titulo: "<span class='material-symbols-outlined'>dangerous</span> 2º Desafio: Defesa do Navio",
        desc: "Piratas à vista! Precisamos carregar os canhões com...",
        dica: "\"Sou um pó escuro e perigoso que faz barulho no mar.\"",
        palavra: "POLVORA",
        historia: "Conseguimos despistar os corsários! Chegamos às águas quentes da costa leste africana. A viagem continua."
    },
    {
        titulo: "<span class='material-symbols-outlined'>air</span> 3º Desafio: A Calmaria",
        desc: "As velas estão murchas. Precisamos aguardar o...",
        dica: "\"Não posso ser visto, mas empurro o navio para a frente.\"",
        palavra: "VENTO",
        historia: "Os ventos finalmente voltaram. Cruzamos o oceano Índico e estamos cada vez mais perto do nosso destino."
    },
    {
        titulo: "<span class='material-symbols-outlined'>map</span> 4º Desafio: Encontrando Terra",
        desc: "Avistamos uma ilha! Onde marcamos nossa rota?",
        dica: "\"Sou um desenho do mundo num pedaço de papel.\"",
        palavra: "MAPA",
        historia: "Terra à vista! Nossa embarcação ancorou com segurança no porto de Calicute, nas Índias. Chegou a hora dos negócios."
    },
    {
        titulo: "<span class='material-symbols-outlined'>diamond</span> 5º Desafio: O Mercado Final",
        desc: "Chegamos ao destino! Qual especiaria viemos buscar?",
        dica: "\"Sou pequena, preta e ardo na boca. Valho meu peso em ouro!\"",
        palavra: "PIMENTA",
        historia: "Tudo vendido e carregado! Nossos porões estão cheios de riquezas. É hora de voltar para casa e celebrar com o Rei!"
    }
];

// Variáveis de Estado
let faseAtual = 0;
let ouro = 50;
let saudeNavio = 100; // Saúde inicial
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

// Elementos de Saúde
const elHealthText = document.getElementById('health-text');
const elHealthBar = document.getElementById('health-bar');

// Elementos do Modal de História
const modalOverlay = document.getElementById('transition-modal');
const modalText = document.getElementById('transition-text');
const btnContinue = document.getElementById('btn-continue');

// Limpar texto
function formatarTexto(texto) {
    return texto.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
}

function carregarFase() {
    if (faseAtual >= fases.length) {
        vencerJogo();
        return;
    }

    const fase = fases[faseAtual];
    letrasReveladas = Array(fase.palavra.length).fill("_");
    
    elTitulo.innerHTML = fase.titulo;
    elDesc.innerHTML = `<strong>Desafio:</strong> ${fase.desc}`;
    elDica.innerHTML = `<strong>DICA:</strong> ${fase.dica}`;
    elProgresso.innerText = `${faseAtual}/${fases.length} etapas concluídas`;
    elInputPalpite.value = "";
    
    atualizarSlots();
    atualizarOuro(false);
    atualizarSaude();
}

function atualizarSlots() {
    elSlots.innerText = `PALAVRA: ${letrasReveladas.join(" ")}`;
}

function atualizarOuro(animar = true) {
    elOuro.innerText = `${ouro} moedas`;
    if (animar) {
        elOuro.classList.remove('gold-pulse');
        void elOuro.offsetWidth;
        elOuro.classList.add('gold-pulse');
    }
}

function atualizarSaude() {
    elHealthText.innerText = `Saúde do Navio: ${saudeNavio}%`;
    elHealthBar.style.width = `${saudeNavio}%`;

    // Mudança de cores baseada no dano
    if (saudeNavio > 50) {
        elHealthBar.style.backgroundColor = '#4CAF50';
    } else if (saudeNavio > 20) {
        elHealthBar.style.backgroundColor = '#FF9800';
    } else {
        elHealthBar.style.backgroundColor = '#F44336';
    }
}

// Botão de Dica
document.getElementById('btn-hint').addEventListener('click', () => {
    const custoDica = 5;
    if (ouro < custoDica) {
        alert("Ouro insuficiente para comprar uma letra!");
        return;
    }

    const palavraLimpa = formatarTexto(fases[faseAtual].palavra);
    let indicesEscondidos = [];
    
    for (let i = 0; i < letrasReveladas.length; i++) {
        if (letrasReveladas[i] === "_") indicesEscondidos.push(i);
    }

    if (indicesEscondidos.length > 0) {
        const indiceSorteado = indicesEscondidos[Math.floor(Math.random() * indicesEscondidos.length)];
        letrasReveladas[indiceSorteado] = palavraLimpa[indiceSorteado];
        
        ouro -= custoDica;
        atualizarOuro(true);
        atualizarSlots();
    } else {
        alert("Todas as letras já foram reveladas!");
    }
});

// Botão de Enviar
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
        // ACERTOU!
        ouro += aposta;
        atualizarOuro(true);
        
        // Exibe a carta da história da fase concluída ANTES de ir pra próxima
        mostrarCartaTransicao(fases[faseAtual].historia);

    } else {
        // ERROU! (Perde ouro E vida do navio)
        alert("Resposta errada! O navio bateu nos recifes e você perdeu moedas!");
        ouro -= aposta;
        saudeNavio -= 25; // Tira 25% da saúde a cada erro
        
        atualizarOuro(true);
        atualizarSaude();
        
        if (ouro <= 0 || saudeNavio <= 0) perderJogo();
    }
});

// Função para mostrar a carta
function mostrarCartaTransicao(texto) {
    modalText.innerText = texto;
    modalOverlay.style.display = 'flex'; // Exibe o modal
}

// Botão "Zarpar" para fechar a carta e ir pra próxima fase
btnContinue.addEventListener('click', () => {
    modalOverlay.style.display = 'none'; // Esconde o modal
    faseAtual++; // Avança de fato a fase
    carregarFase(); // Carrega o próximo desafio
});

// Telas finais
function vencerJogo() {
    elTitulo.innerHTML = "<span class='material-symbols-outlined'>emoji_events</span> ROTA CONCLUÍDA!";
    elDesc.innerHTML = `Parabéns, Almirante! Você chegou às Índias com <strong>${ouro} moedas</strong> e o navio intacto.`;
    document.querySelector('.challenge-body').style.textAlign = "center";
    document.querySelector('.action-panel').style.display = "none";
    elSlots.innerHTML = "<span class='material-symbols-outlined' style='font-size: 2rem;'>anchor</span><br>NAVIO CARREGADO DE ESPECIARIAS";
}

function perderJogo() {
    elTitulo.innerHTML = "<span class='material-symbols-outlined'>skull</span> FIM DA JORNADA";
    
    if (saudeNavio <= 0) {
        elDesc.innerHTML = "Seu navio sofreu muitos danos, partiu ao meio e afundou no oceano.";
    } else {
        elDesc.innerHTML = "Suas moedas acabaram e a tripulação organizou um motim contra você.";
    }
    
    document.querySelector('.action-panel').style.display = "none";
    elOuro.innerText = "0 - Falido";
}

// Início imediato
carregarFase();
