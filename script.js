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
        historia: "A Superação do Cabo da Boa Esperança (1488): Bartolomeu Dias consegue contornar o extremo sul da África. Este evento provou que o Oceano Atlântico e o Oceano Índico estavam conectado, tornando a rota para as especiarias uma possibilidade real por mar."
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
    },
    {
        titulo: "<span class='material-symbols-outlined'>public</span> 6º Desafio: O Grande Obstáculo",
        desc: "Qual continente contornamos para chegar às Índias?",
        dica: "\"É o continente onde fica o Cabo da Boa Esperança.\"",
        palavra: "AFRICA",
        historia: "O Périplo Africano: A estratégia portuguesa consistia em contornar toda a costa da África para achar uma rota marítima alternativa aos intermediários terrestres."
    },
    {
        titulo: "<span class='material-symbols-outlined'>sick</span> 7º Desafio: A Doença dos Mares",
        desc: "Os marinheiros estão fracos por falta de vitamina C. É o...",
        dica: "\"Doença comum em longas viagens por falta de frutas frescas.\"",
        palavra: "ESCORBUTO",
        historia: "A Ameaça do Escorbuto: A dieta nos navios era pobre. Muitos marinheiros morriam dessa doença até descobrirem que o suco de frutas cítricas era a cura."
    },
    {
        titulo: "<span class='material-symbols-outlined'>explore</span> 8º Desafio: O Guia",
        desc: "Estamos perdidos na neblina! Precisamos usar a...",
        dica: "\"Instrumento que aponta sempre para o Norte magnético.\"",
        palavra: "BUSSOLA",
        historia: "A Invenção da Bússola: Adotada pelos europeus, a bússola permitiu que os navegadores se orientassem mesmo em dias nublados e longe da costa."
    },
    {
        titulo: "<span class='material-symbols-outlined'>local_fire_department</span> 9º Desafio: O Tesouro Ardente",
        desc: "O que viemos buscar que custa seu peso em ouro?",
        dica: "\"Especiaria escura, redonda e que arde na boca.\"",
        palavra: "PIMENTA",
        historia: "O Comércio de Especiarias: A pimenta-do-reino era tão valiosa que servia até para pagar impostos e comprar terras na Europa daquela época."
    },
    {
        titulo: "<span class='material-symbols-outlined'>directions_boat</span> 10º Desafio: A Embarcação",
        desc: "Para navegar ágil contra os ventos, usamos a...",
        dica: "\"Navio rápido com velas triangulares criado pelos portugueses.\"",
        palavra: "CARAVELA",
        historia: "O Desenvolvimento da Caravela: Essa embarcação inovadora revolucionou a Era dos Descobrimentos por ser leve, veloz e capaz de navegar em zigue-zague."
    },
    {
        titulo: "<span class='material-symbols-outlined'>stars</span> 11º Desafio: Medindo os Céus",
        desc: "Usamos para medir a altura das estrelas e do Sol...",
        dica: "\"Termina com ÁBIO.\"",
        palavra: "ASTROLABIO",
        historia: "O Astrolábio Marítimo: Um instrumento complexo simplificado pelos portugueses. Permitia calcular a latitude da embarcação em mar aberto."
    },
    {
        titulo: "<span class='material-symbols-outlined'>storm</span> 12º Desafio: O Fim do Mundo",
        desc: "Como Bartolomeu Dias chamou o cabo antes do Rei mudar o nome?",
        dica: "\"Cabo das ...\"",
        palavra: "TORMENTAS",
        historia: "O Cabo das Tormentas: Devido às fortes tempestades que quase afundaram sua frota, Bartolomeu Dias deu este nome, mais tarde rebatizado de Boa Esperança por Dom João II com otimismo de alcançar a Ásia."
    },
    {
        titulo: "<span class='material-symbols-outlined'>checkroom</span> 13º Desafio: Luxo do Oriente",
        desc: "Além das especiarias, que tecido macio viemos comprar?",
        dica: "\"Produzida pelo bicho-da-...\"",
        palavra: "SEDA",
        historia: "O Comércio de Seda: Extremamente valorizada na nobreza europeia, a seda era um dos principais e mais lucrativos produtos nas rotas orientais."
    },
    {
        titulo: "<span class='material-symbols-outlined'>liquor</span> 14º Desafio: O Estoque da Tripulação",
        desc: "Qual bebida não pode faltar no porão para os marujos?",
        dica: "\"Bebida clássica de piratas e marinheiros.\"",
        palavra: "RUM",
        historia: "A Vida a Bordo: A água doce apodrecia rapidamente nos barris de madeira. Bebidas alcoólicas ajudavam a conservar a hidratação e manter o ânimo na tripulação, apesar dos problemas disciplinares."
    },
    {
        titulo: "<span class='material-symbols-outlined'>anchor</span> 15º Desafio: Terra Firme",
        desc: "Para o navio parar e descarregarmos as mercadorias, jogamos a...",
        dica: "\"É de ferro, pesada e vai até o fundo do mar.\"",
        palavra: "ANCORA",
        historia: "O Fim da Jornada: Chegar a um porto seguro significava não apenas o fim dos perigos marítimos, mas o início da contabilidade dos enormes lucros das especiarias e produtos exóticos trazidos na viagem."
    }
];

// Variáveis de Estado
let faseAtual = 0;
let ouro = 40;
let saudeNavio = 100;
let letrasReveladas = [];
let letrasFixas = []; 

// Elementos da Interface
const elTitulo = document.getElementById('challenge-title');
const elDesc = document.getElementById('challenge-desc');
const elDica = document.getElementById('hint-text');
const elSlots = document.getElementById('word-slots');
const elOuro = document.getElementById('gold-display');
const elProgresso = document.getElementById('progress-text');
const elInputAposta = document.getElementById('bet-amount');
const hintBox = document.getElementById('hint-box');
const mobileInput = document.getElementById('mobile-input');
const elHealthText = document.getElementById('health-text');
const elHealthBar = document.getElementById('health-bar');
const modalOverlay = document.getElementById('transition-modal');
const modalText = document.getElementById('transition-text');
const btnContinue = document.getElementById('btn-continue');
const alertModalOverlay = document.getElementById('alert-modal');
const alertTitle = document.getElementById('alert-title');
const alertText = document.getElementById('alert-text');
const btnAlertClose = document.getElementById('btn-alert-close');

// Limpar texto
function formatarTexto(texto) {
    return texto.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
}

function carregarFase() {
    if (faseAtual >= fases.length) {
        if (ouro >= 100) vencerJogo();
        else perderJogo(true);
        return;
    }

    const fase = fases[faseAtual];
    letrasReveladas = Array(fase.palavra.length).fill("_");
    letrasFixas = Array(fase.palavra.length).fill(false);
    
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

    if (saudeNavio > 50) elHealthBar.style.backgroundColor = '#4CAF50';
    else if (saudeNavio > 20) elHealthBar.style.backgroundColor = '#FF9800';
    else elHealthBar.style.backgroundColor = '#F44336';
}

function mostrarAlerta(mensagem, titulo = "⚠️ Aviso") {
    alertTitle.innerText = titulo;
    alertText.innerText = mensagem;
    alertModalOverlay.style.display = 'flex';
}

// Lógica de letras reveladas
function revelarLetraAleatoria() {
    const palavraLimpa = formatarTexto(fases[faseAtual].palavra);
    let indicesDisponiveis = [];
    
    for (let i = 0; i < palavraLimpa.length; i++) {
        if (!letrasFixas[i]) indicesDisponiveis.push(i);
    }

    if (indicesDisponiveis.length > 0) {
        const indiceSorteado = indicesDisponiveis[Math.floor(Math.random() * indicesDisponiveis.length)];
        letrasReveladas[indiceSorteado] = palavraLimpa[indiceSorteado];
        letrasFixas[indiceSorteado] = true;
        atualizarSlots();
        return true;
    }
    return false;
}

// Funções base de Digitação
function inserirLetra(letra) {
    const idx = letrasReveladas.indexOf("_");
    if (idx !== -1) {
        letrasReveladas[idx] = letra.toUpperCase();
        atualizarSlots();
    }
}

function apagarLetra() {
    for (let i = letrasReveladas.length - 1; i >= 0; i--) {
        if (letrasReveladas[i] !== "_" && !letrasFixas[i]) {
            letrasReveladas[i] = "_";
            atualizarSlots();
            break;
        }
    }
}

hintBox.addEventListener('click', () => {
    mobileInput.focus();
    mobileInput.value = " ";
});

mobileInput.addEventListener('input', (e) => {
    const char = e.data;
    if (e.inputType === 'deleteContentBackward') apagarLetra();
    else if (char && /^[a-zA-ZçÇ]$/.test(char)) inserirLetra(char);
    mobileInput.value = " "; 
});

document.addEventListener('keydown', (e) => {
    if (modalOverlay.style.display === 'flex' || alertModalOverlay.style.display === 'flex' || document.getElementById('star-modal').style.display === 'flex') return;
    if (faseAtual >= fases.length || saudeNavio <= 0 || ouro <= 0) return;

    const activeEl = document.activeElement;
    if (activeEl && activeEl.tagName === 'INPUT' && activeEl.id !== 'mobile-input') return;

    const key = e.key.toUpperCase();

    if (key === 'ENTER') document.getElementById('btn-submit').click();
    else if (/^[A-ZÇ]$/.test(key) && key.length === 1) inserirLetra(key);
    else if (key === 'BACKSPACE') apagarLetra();
});

// Botões do jogo
document.getElementById('btn-hint').addEventListener('click', () => {
    const custoDica = 5;
    if (ouro < custoDica) {
        mostrarAlerta("Ouro insuficiente para comprar uma letra!");
        return;
    }
    if (revelarLetraAleatoria()) {
        ouro -= custoDica;
        atualizarOuro(true);
    } else {
        mostrarAlerta("Todas as letras já foram reveladas!");
    }
});

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
    if (palpite.includes("_")) {
        mostrarAlerta("Preencha todas as letras antes de zarpar!");
        return;
    }

    if (palpite === respostaCerta) {
        ouro += aposta;
        atualizarOuro(true);
        mostrarCartaTransicao(fases[faseAtual].historia);
    } else {
        mostrarAlerta("Resposta errada! O navio bateu nos recifes e você perdeu moedas!", "💥 Impacto!");
        ouro -= aposta;
        saudeNavio -= 25; 
        
        atualizarOuro(true);
        atualizarSaude();
        
        if (ouro <= 0 || saudeNavio <= 0) perderJogo(false);
    }
});

// Telas e Transições
function mostrarCartaTransicao(texto) {
    modalText.innerText = texto;
    modalOverlay.style.display = 'flex';
}

btnContinue.addEventListener('click', () => {
    modalOverlay.style.display = 'none'; 
    faseAtual++; 
    carregarFase(); 
});

btnAlertClose.addEventListener('click', () => {
    alertModalOverlay.style.display = 'none';
});

function vencerJogo() {
    elTitulo.innerHTML = "<span class='material-symbols-outlined'>emoji_events</span> ROTA CONCLUÍDA!";
    elDesc.innerHTML = `Parabéns, Almirante! Você chegou às Índias com a meta batida: <strong>${ouro} moedas</strong> e o navio a salvo!`;
    document.querySelector('.challenge-body').style.textAlign = "center";
    document.querySelector('.action-panel').style.display = "none";
    elSlots.innerHTML = "<span class='material-symbols-outlined' style='font-size: 2rem;'>anchor</span><br>NAVIO CARREGADO DE ESPECIARIAS";
}

function perderJogo(motivoOuroFinal = false) {
    elTitulo.innerHTML = "<span class='material-symbols-outlined'>skull</span> FIM DA JORNADA";
    if (motivoOuroFinal) elDesc.innerHTML = `Você chegou às Índias, porém com apenas <strong>${ouro} moedas</strong>. O rei exigia pelo menos 100 moedas. Você foi preso por dívidas!`;
    else if (saudeNavio <= 0) elDesc.innerHTML = "Seu navio sofreu muitos danos, partiu ao meio e afundou no oceano.";
    else elDesc.innerHTML = "Suas moedas acabaram e a tripulação organizou um motim contra você.";
    
    document.querySelector('.action-panel').style.display = "none";
    if (!motivoOuroFinal) elOuro.innerText = "0 - Falido";
}

// ==========================================
// SISTEMA DE NAVEGAÇÃO POR ESTRELAS
// ==========================================
const starModal = document.getElementById('star-modal');
const starContainer = document.getElementById('star-container');
const starErrorsDisplay = document.getElementById('star-errors');
let starAnimationId;
let starsData = [];
let starErrors = 0;
let speedMultiplier = 1;

document.getElementById('btn-star-nav').addEventListener('click', () => {
    const custoNav = 5;
    if (ouro < custoNav) {
        mostrarAlerta("Ouro insuficiente para a Navegação Estelar!");
        return;
    }
    
    // Verifica se ainda tem letra para revelar antes de gastar
    const palavraLimpa = formatarTexto(fases[faseAtual].palavra);
    let temLetra = letrasFixas.includes(false);
    
    if (!temLetra) {
        mostrarAlerta("Todas as letras já foram reveladas nesta fase!");
        return;
    }

    ouro -= custoNav;
    atualizarOuro(true);
    iniciarNavegacaoEstrelas();
});

document.getElementById('btn-star-close').addEventListener('click', () => {
    encerrarNavegacaoEstrelas();
});

function iniciarNavegacaoEstrelas() {
    starModal.style.display = 'flex';
    starErrors = 0;
    speedMultiplier = 1;
    starErrorsDisplay.innerText = "0";
    
    // Limpa as estrelas antigas preservando a UI
    const estrelasAntigas = starContainer.querySelectorAll('.star-entity');
    estrelasAntigas.forEach(e => e.remove());
    starsData = [];

    const width = starContainer.clientWidth;
    const height = starContainer.clientHeight;

    // Criar estrelas falsas (lentas)
    for(let i=0; i<25; i++) criarEstrela(false, width, height);
    
    // Criar estrela alvo (mais brilhante)
    criarEstrela(true, width, height);

    starContainer.addEventListener('click', clickEstrelaErrada);
    animarEstrelas();
}

function criarEstrela(isTarget, maxWidth, maxHeight) {
    const el = document.createElement('div');
    el.className = isTarget ? 'star-entity bright' : 'star-entity fake';
    starContainer.appendChild(el);

    const size = isTarget ? 10 : 4;
    const x = Math.random() * (maxWidth - size);
    const y = Math.random() * (maxHeight - size);
    
    // Alvo se move um pouco mais rápido desde o começo
    const baseSpeed = isTarget ? 1.0 : (Math.random() * 0.4 + 0.1);
    const angle = Math.random() * Math.PI * 2;
    const vx = Math.cos(angle) * baseSpeed;
    const vy = Math.sin(angle) * baseSpeed;

    const star = { el, x, y, vx, vy, size, isTarget };
    starsData.push(star);

    if (isTarget) {
        el.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita contabilizar erro
            vencerNavegacao();
        });
    }
}

function clickEstrelaErrada() {
    starErrors++;
    starErrorsDisplay.innerText = starErrors;
    
    if (starErrors >= 3) {
        encerrarNavegacaoEstrelas();
        mostrarAlerta("Você perdeu a estrela de vista no céu noturno...", "☁️ Tempo Fechado");
    } else {
        // Punição: Aumenta bastante a velocidade da estrela certa a cada erro
        speedMultiplier += 1.2; 
    }
}

function animarEstrelas() {
    const width = starContainer.clientWidth;
    const height = starContainer.clientHeight;

    starsData.forEach(star => {
        let curVx = star.vx;
        let curVy = star.vy;
        
        if (star.isTarget) {
            curVx *= speedMultiplier;
            curVy *= speedMultiplier;
        }

        star.x += curVx;
        star.y += curVy;

        // Rebater nas bordas
        if (star.x <= 0 || star.x + star.size >= width) {
            star.vx *= -1;
            star.x = Math.max(0, Math.min(star.x, width - star.size));
        }
        if (star.y <= 0 || star.y + star.size >= height) {
            star.vy *= -1;
            star.y = Math.max(0, Math.min(star.y, height - star.size));
        }

        star.el.style.left = star.x + 'px';
        star.el.style.top = star.y + 'px';
    });

    starAnimationId = requestAnimationFrame(animarEstrelas);
}

function vencerNavegacao() {
    encerrarNavegacaoEstrelas();
    mostrarAlerta("Você focou na estrela certa e descobriu uma pista! (1 Letra Revelada)", "⭐ Sucesso Estelar!");
    revelarLetraAleatoria();
}

function encerrarNavegacaoEstrelas() {
    cancelAnimationFrame(starAnimationId);
    starContainer.removeEventListener('click', clickEstrelaErrada);
    starModal.style.display = 'none';
}

// Início imediato
carregarFase();
