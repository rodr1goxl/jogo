// Configuração das Fases
const fases = [
    {
        titulo: "<span class='material-symbols-outlined'>water</span> 1º Desafio: Navegar pelo Oceano",
        desc: "Para sair do porto, você precisa deste objeto:",
        dica: "\"País pioneiro nas Grandes Navegações\"",
        palavra: "PORTUGAL",
        historia: "O Pioneirismo Português e o Bojador (1415–1434): Tudo começa com a conquista de Ceuta e a exploração da costa africana. O grande marco mental foi a passagem do Cabo Bojador por Gil Eanes, que desmistificou as lendas de monstros marinhos e abriu caminho para o Atlântico Sul."
    },
    {
        titulo: "<span class='material-symbols-outlined'>dangerous</span> 2º Desafio: Defesa do Navio",
        desc: "Piratas à vista! Precisamos carregar os canhões com...",
        dica: "\"Sou um pó escuro e perigoso que faz barulho no mar.\"",
        palavra: "POLVORA",
        historia: "A Superação do Cabo da Boa Esperança (1488): Bartolomeu Dias consegue contornar o extremo sul da África. Este evento provou que o Oceano Atlântico e o Oceano Índico estavam conectados, tornando a rota para as especiarias uma possibilidade real por mar."
    },
    {
        titulo: "<span class='material-symbols-outlined'>air</span> 3º Desafio: A Calmaria",
        desc: "As velas estão murchas. Precisamos aguardar o...",
        dica: "\"Não posso ser visto, mas empurro o navio para a frente.\"",
        palavra: "VENTO",
        historia: "O Encontro com a América e Tordesilhas (1492–1494): Cristóvão Colombo, navegando pela Espanha, chega às Antilhas buscando o Oriente. Para evitar uma guerra entre as potências ibéricas, assina-se o Tratado de Tordesilhas, dividindo o mundo em duas esferas de influência."
    },
    {
        titulo: "<span class='material-symbols-outlined'>map</span> 4º Desafio: Encontrando Terra",
        desc: "Avistamos uma ilha! Onde marcamos nossa rota?",
        dica: "\"Navegador que chegou ao Brasil em 1500\"",
        palavra: "CABRAL",
        historia: "A Rota das Índias e o Brasil (1498–1500): Vasco da Gama finalmente chega a Calecute, na Índia, estabelecendo a rota comercial mais lucrativa da época. Dois anos depois, a frota de Pedro Álvares Cabral oficializa a posse das terras do Brasil no caminho para o Oriente."
    },
    {
        titulo: "<span class='material-symbols-outlined'>diamond</span> 5º Desafio: O Mercado Final",
        desc: "Chegamos ao destino! Qual especiaria viemos buscar?",
        dica: "\"Quem comandou a primeira viagem ao redor do mundo\"",
        palavra: "MAGALHÃES",
        historia: "A Primeira Volta ao Mundo (1519–1522): A expedição iniciada por Fernão de Magalhães completa a primeira circunavegação do globo. Isso confirmou a imensidão do Oceano Pacífico e provou, de forma definitiva, que todas as águas do mundo estavam interligadas."
    }
];

// Variáveis de Estado
let faseAtual = 0;
let ouro = 40;
let saudeNavio = 100;
let letrasReveladas = [];
let letrasFixas = []; // NOVO: Impede que o jogador apague as letras compradas com Dica

// Elementos da Interface
const elTitulo = document.getElementById('challenge-title');
const elDesc = document.getElementById('challenge-desc');
const elDica = document.getElementById('hint-text');
const elSlots = document.getElementById('word-slots');
const elOuro = document.getElementById('gold-display');
const elProgresso = document.getElementById('progress-text');
const elInputAposta = document.getElementById('bet-amount');

// Elementos de Saúde
const elHealthText = document.getElementById('health-text');
const elHealthBar = document.getElementById('health-bar');

// Elementos do Modal de História
const modalOverlay = document.getElementById('transition-modal');
const modalText = document.getElementById('transition-text');
const btnContinue = document.getElementById('btn-continue');

// Elementos do Modal de Alerta
const alertModalOverlay = document.getElementById('alert-modal');
const alertTitle = document.getElementById('alert-title');
const alertText = document.getElementById('alert-text');
const btnAlertClose = document.getElementById('btn-alert-close');

// Limpar texto (remove acentos e espaços)
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
    letrasFixas = Array(fase.palavra.length).fill(false); // Reinicia as letras fixas
    
    elTitulo.innerHTML = fase.titulo;
    elDesc.innerHTML = `<strong>Desafio:</strong> ${fase.desc}`;
    elDica.innerHTML = `<strong>DICA:</strong> ${fase.dica}`;
    elProgresso.innerText = `${faseAtual}/${fases.length} etapas concluídas`;
    
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

    if (saudeNavio > 50) {
        elHealthBar.style.backgroundColor = '#4CAF50';
    } else if (saudeNavio > 20) {
        elHealthBar.style.backgroundColor = '#FF9800';
    } else {
        elHealthBar.style.backgroundColor = '#F44336';
    }
}

function mostrarAlerta(mensagem, titulo = "⚠️ Aviso") {
    alertTitle.innerText = titulo;
    alertText.innerText = mensagem;
    alertModalOverlay.style.display = 'flex';
}

// ==========================================
// NOVO: SISTEMA DE DIGITAÇÃO PELO TECLADO
// ==========================================
document.addEventListener('keydown', (e) => {
    // Trava a digitação se algum modal estiver aberto ou o jogo tiver acabado
    if (modalOverlay.style.display === 'flex' || alertModalOverlay.style.display === 'flex') return;
    if (faseAtual >= fases.length || saudeNavio <= 0 || ouro <= 0) return;

    const isInputFocused = (document.activeElement && document.activeElement.tagName === 'INPUT');
    const key = e.key.toUpperCase();

    // Permitir enviar pelo ENTER
    if (key === 'ENTER') {
        document.getElementById('btn-submit').click();
        return;
    }

    // Não processar letras ou backspace se o usuário estiver digitando a aposta de ouro
    if (isInputFocused) return;

    // Se for uma letra (A-Z ou Ç)
    if (/^[A-ZÇ]$/.test(key)) {
        // Encontra o primeiro espaço vazio "_"
        const idx = letrasReveladas.indexOf("_");
        if (idx !== -1) {
            letrasReveladas[idx] = key;
            atualizarSlots();
        }
    } 
    // Se for apagar (Backspace)
    else if (key === 'BACKSPACE') {
        // Procura da direita para a esquerda a última letra que NÃO é fixa (comprada por dica)
        for (let i = letrasReveladas.length - 1; i >= 0; i--) {
            if (letrasReveladas[i] !== "_" && !letrasFixas[i]) {
                letrasReveladas[i] = "_";
                atualizarSlots();
                break;
            }
        }
    }
});

// Botão de Dica (Adaptado para o novo sistema)
document.getElementById('btn-hint').addEventListener('click', () => {
    const custoDica = 5;
    if (ouro < custoDica) {
        mostrarAlerta("Ouro insuficiente para comprar uma letra!");
        return;
    }

    const palavraLimpa = formatarTexto(fases[faseAtual].palavra);
    let indicesDisponiveis = [];
    
    // Procura índices que ainda não foram travados pela dica
    for (let i = 0; i < palavraLimpa.length; i++) {
        if (!letrasFixas[i]) indicesDisponiveis.push(i);
    }

    if (indicesDisponiveis.length > 0) {
        // Sorteia um índice para revelar
        const indiceSorteado = indicesDisponiveis[Math.floor(Math.random() * indicesDisponiveis.length)];
        
        // Revela a letra correta e trava ela na posição
        letrasReveladas[indiceSorteado] = palavraLimpa[indiceSorteado];
        letrasFixas[indiceSorteado] = true;
        
        ouro -= custoDica;
        atualizarOuro(true);
        atualizarSlots();
    } else {
        mostrarAlerta("Todas as letras já foram reveladas!");
    }
});

// Botão de Enviar (Lê diretamente da variável letrasReveladas agora)
document.getElementById('btn-submit').addEventListener('click', () => {
    const palpite = letrasReveladas.join("");
    const aposta = parseInt(elInputAposta.value);
    const respostaCerta = formatarTexto(fases[faseAtual].palavra);

    if (isNaN(aposta) || aposta < 1) {
        mostrarAlerta("Defina uma aposta válida!");
        return;
    }
    if (aposta > ouro) {
        mostrarAlerta("Você não tem ouro suficiente!");
        return;
    }
    
    // Alerta se a palavra não estiver totalmente preenchida
    if (palpite.includes("_")) {
        mostrarAlerta("Preencha todas as letras antes de zarpar!");
        return;
    }

    if (palpite === respostaCerta) {
        // ACERTOU!
        ouro += aposta;
        atualizarOuro(true);
        mostrarCartaTransicao(fases[faseAtual].historia);
    } else {
        // ERROU!
        mostrarAlerta("Resposta errada! O navio bateu nos recifes e você perdeu moedas!", "💥 Impacto!");
        ouro -= aposta;
        saudeNavio -= 25; 
        
        atualizarOuro(true);
        atualizarSaude();
        
        if (ouro <= 0 || saudeNavio <= 0) perderJogo();
    }
});

// Modal História
function mostrarCartaTransicao(texto) {
    modalText.innerText = texto;
    modalOverlay.style.display = 'flex';
}

// Botão Zarpar
btnContinue.addEventListener('click', () => {
    modalOverlay.style.display = 'none'; 
    faseAtual++; 
    carregarFase(); 
});

// Fechar Alerta Customizado
btnAlertClose.addEventListener('click', () => {
    alertModalOverlay.style.display = 'none';
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
