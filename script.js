// Configuração das Fases com 5 dicas progressivas para cada palavra
const fases = [
    { titulo: "<span class='material-symbols-outlined'>water</span> 1º Desafio: Navegar pelo Oceano", desc: "Para sair do porto, você precisa deste objeto:", dicas: ["País pioneiro nas Grandes Navegações", "Fica na Península Ibérica", "Faz fronteira com a Espanha", "Sua capital é Lisboa", "Sua bandeira é verde e vermelha"], palavra: "PORTUGAL" },
    { titulo: "<span class='material-symbols-outlined'>dangerous</span> 2º Desafio: Defesa do Navio", desc: "Piratas à vista! Precisamos carregar os canhões com...", dicas: ["Sou um pó escuro e perigoso que faz barulho no mar.", "Fui inventada pelos chineses", "Muito usada em canhões e mosquetes", "Pode causar grandes explosões", "Cheira a enxofre quando queimada"], palavra: "POLVORA" },
    { titulo: "<span class='material-symbols-outlined'>air</span> 3º Desafio: A Calmaria", desc: "As velas estão murchas. Precisamos aguardar o...", dicas: ["Não posso ser visto, mas empurro o navio para a frente.", "Faço as velas inflarem", "Sem mim, a calmaria é absoluta", "Mudo de direção constantemente", "Sopro sobre o oceano"], palavra: "VENTO" },
    { titulo: "<span class='material-symbols-outlined'>map</span> 4º Desafio: Encontrando Terra", desc: "Avistamos uma ilha! Onde marcamos nossa rota?", dicas: ["Navegador que chegou ao Brasil em 1500", "Seu primeiro nome é Pedro", "Seu nome do meio é Álvares", "Partiu de Lisboa com 13 embarcações", "Seu destino final era a Índia"], palavra: "CABRAL" },
    { titulo: "<span class='material-symbols-outlined'>diamond</span> 5º Desafio: O Mercado Final", desc: "Chegamos ao destino! Qual especiaria viemos buscar?", dicas: ["Quem comandou a primeira viagem ao redor do mundo", "Navegador português a serviço da Espanha", "Descobriu o estreito na América do Sul que leva seu nome", "Morreu nas Filipinas antes de terminar a viagem", "Fernão de ..."], palavra: "MAGALHÃES" },
    { titulo: "<span class='material-symbols-outlined'>public</span> 6º Desafio: O Grande Obstáculo", desc: "Qual continente contornamos para chegar às Índias?", dicas: ["É o continente onde fica o Cabo da Boa Esperança.", "Os portugueses contornaram toda a sua costa", "Berço da humanidade", "Possui o deserto do Saara", "Fica ao sul da Europa"], palavra: "AFRICA" },
    { titulo: "<span class='material-symbols-outlined'>sick</span> 7º Desafio: A Doença dos Mares", desc: "Os marinheiros estão fracos por falta de vitamina C. É o...", dicas: ["Doença comum em longas viagens por falta de frutas frescas.", "Causa fraqueza e sangramento nas gengivas", "É prevenida e curada com vitamina C", "Afetou severamente as tripulações na época", "Limões e laranjas são a cura"], palavra: "ESCORBUTO" },
    { titulo: "<span class='material-symbols-outlined'>explore</span> 8º Desafio: O Guia", desc: "Estamos perdidos na neblina! Precisamos usar a...", dicas: ["Instrumento que aponta sempre para o Norte magnético.", "Possui uma agulha imantada", "Invenção que foi trazida da China", "Essencial para não se perder em mar aberto", "Geralmente vem com a Rosa dos Ventos desenhada"], palavra: "BUSSOLA" },
    { titulo: "<span class='material-symbols-outlined'>local_fire_department</span> 9º Desafio: O Tesouro Ardente", desc: "O que viemos buscar que custa seu peso em ouro?", dicas: ["Especiaria escura, redonda e que arde na boca.", "Usada para disfarçar gosto de carne velha e conservar alimentos", "Tão valorizada que já foi usada como moeda de troca", "Pode ser do reino, branca ou preta", "Faz você espirrar se inalar o pó"], palavra: "PIMENTA" },
    { titulo: "<span class='material-symbols-outlined'>directions_boat</span> 10º Desafio: A Embarcação", desc: "Para navegar ágil contra os ventos, usamos a...", dicas: ["Navio rápido com velas triangulares criado pelos portugueses.", "Embarcação ágil, leve e de fácil manobra", "Usada nas viagens de Colombo e Cabral", "Permitia 'bolinar' (navegar em zigue-zague contra o vento)", "Seu nome soa como 'cara bela'"], palavra: "CARAVELA" },
    { titulo: "<span class='material-symbols-outlined'>stars</span> 11º Desafio: Medindo os Céus", desc: "Usamos para medir a altura das estrelas e do Sol...", dicas: ["Termina com ÁBIO.", "Usado para medir a altura dos astros acima do horizonte", "Ajuda a calcular a latitude do navio", "Antigo instrumento de metal em formato circular", "Seu nome significa 'tomador de estrelas'"], palavra: "ASTROLABIO" },
    { titulo: "<span class='material-symbols-outlined'>storm</span> 12º Desafio: O Fim do Mundo", desc: "Como Bartolomeu Dias chamou o cabo antes do Rei mudar o nome?", dicas: ["Cabo das ...", "Fica no extremo sul da África", "Foi dobrado pela primeira vez por Bartolomeu Dias", "Era um local temido por suas tempestades mortais", "Depois foi rebatizado pelo rei como Boa Esperança"], palavra: "TORMENTAS" },
    { titulo: "<span class='material-symbols-outlined'>checkroom</span> 13º Desafio: Luxo do Oriente", desc: "Além das especiarias, que tecido macio viemos comprar?", dicas: ["Produzida pelo bicho-da-...", "Tecido muito valioso que deu nome a uma famosa Rota", "Originária da China Antiga", "Material extremamente macio, leve e brilhante", "Símbolo de luxo nas roupas dos nobres europeus"], palavra: "SEDA" },
    { titulo: "<span class='material-symbols-outlined'>liquor</span> 14º Desafio: O Estoque da Tripulação", desc: "Qual bebida não pode faltar no porão para os marujos?", dicas: ["Bebida clássica de piratas e marinheiros.", "Destilada a partir do melaço da cana-de-açúcar", "Bebida alcoólica de alto teor", "Misturada com água e limão (para evitar escorbuto), virava o 'grogue'", "É a bebida favorita do Capitão Jack Sparrow"], palavra: "RUM" },
    { titulo: "<span class='material-symbols-outlined'>anchor</span> 15º Desafio: Terra Firme", desc: "Para o navio parar e descarregarmos as mercadorias, jogamos a...", dicas: ["É de ferro, pesada e vai até o fundo do mar.", "Símbolo mais comum em tatuagens de marinheiros", "Usada para fixar o navio no fundo e evitar que a maré o leve", "Possui duas pontas curvas chamadas de unhas", "Dizemos 'levantar' ela para zarpar, e 'lançar' para estacionar"], palavra: "ANCORA" }
];

// Variáveis de Estado
let jogoIniciado = false;
let faseAtual = 0;
let ouro = 50;
let saudeNavio = 100;
let letrasReveladas = [];
let letrasFixas = []; 
let blockInput = false; 
let dicasMostradas = 1; 

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
const alertModalOverlay = document.getElementById('alert-modal');
const alertTitle = document.getElementById('alert-title');
const alertText = document.getElementById('alert-text');
const btnAlertClose = document.getElementById('btn-alert-close');

// ==========================================
// CONTROLE DA TELA INICIAL
// ==========================================
document.getElementById('btn-start-game').addEventListener('click', () => {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';
    jogoIniciado = true;
    carregarFase();
});

// Limpar texto
function formatarTexto(texto) {
    return texto.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
}

function carregarFase() {
    if (faseAtual >= fases.length) {
        finalizarJogo();
        return;
    }

    const fase = fases[faseAtual];
    letrasReveladas = Array(fase.palavra.length).fill("_");
    letrasFixas = Array(fase.palavra.length).fill(false);
    blockInput = false;
    dicasMostradas = 1; 
    
    elTitulo.innerHTML = fase.titulo;
    elDesc.innerHTML = `<strong>Desafio:</strong> ${fase.desc}`;
    elDica.innerHTML = `<strong>DICA 1:</strong> ${fase.dicas[0]}`; 
    elProgresso.innerText = `${faseAtual}/${fases.length} etapas concluídas`;
    
    atualizarSlots();
    atualizarOuro(false);
    atualizarSaude();
}

function atualizarSlots() {
    const spans = letrasReveladas.map((letra, index) => {
        return `<span class="letter" id="letter-${index}">${letra}</span>`;
    }).join("");
    
    elSlots.innerHTML = `<span class="word-label">PALAVRA:</span> <div class="letters-wrap">${spans}</div>`;
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
    alertText.innerHTML = mensagem;
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
    if (blockInput || !jogoIniciado) return;
    const idx = letrasReveladas.indexOf("_");
    if (idx !== -1) {
        letrasReveladas[idx] = letra.toUpperCase();
        atualizarSlots();
    }
}

function apagarLetra() {
    if (blockInput || !jogoIniciado) return;
    for (let i = letrasReveladas.length - 1; i >= 0; i--) {
        if (letrasReveladas[i] !== "_" && !letrasFixas[i]) {
            letrasReveladas[i] = "_";
            atualizarSlots();
            break;
        }
    }
}

hintBox.addEventListener('click', () => {
    if (!jogoIniciado) return;
    mobileInput.focus();
    mobileInput.value = " ";
});

mobileInput.addEventListener('input', (e) => {
    if (blockInput || !jogoIniciado) {
        mobileInput.value = " "; 
        return;
    }
    const char = e.data;
    if (e.inputType === 'deleteContentBackward') apagarLetra();
    else if (char && /^[a-zA-ZçÇ]$/.test(char)) inserirLetra(char);
    mobileInput.value = " "; 
});

document.addEventListener('keydown', (e) => {
    if (!jogoIniciado) return; 
    if (blockInput) return;
    if (alertModalOverlay.style.display === 'flex' || document.getElementById('star-modal').style.display === 'flex') return;
    if (faseAtual >= fases.length || saudeNavio <= 0 || ouro <= 0) return;

    const activeEl = document.activeElement;
    if (activeEl && activeEl.tagName === 'INPUT' && activeEl.id !== 'mobile-input') return;

    const key = e.key.toUpperCase();

    if (key === 'ENTER') {
        document.getElementById('btn-submit').click();
        return;
    }

    // CORREÇÃO: Se o input mobile estiver focado, ignoramos as letras aqui no keydown
    // pois o evento 'input' do mobileInput já vai cuidar delas. Isso evita a duplicação!
    if (activeEl && activeEl.id === 'mobile-input') return;

    if (/^[A-ZÇ]$/.test(key) && key.length === 1) inserirLetra(key);
    else if (key === 'BACKSPACE') apagarLetra();
});

// Botões do jogo
document.getElementById('btn-hint').addEventListener('click', () => {
    if (blockInput || !jogoIniciado) return;
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
    if (blockInput || !jogoIniciado) return;
    
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

    blockInput = true;

    if (palpite === respostaCerta) {
        ouro += aposta;
        atualizarOuro(true);
        
        const letters = document.querySelectorAll('.letter');
        letters.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('success-wave');
            }, index * 100); 
        });

        setTimeout(() => {
            faseAtual++;
            carregarFase();
        }, letters.length * 100 + 800);

    } else {
        ouro -= aposta;
        saudeNavio -= 25; 
        
        atualizarOuro(true);
        atualizarSaude();
        
        const letters = document.querySelectorAll('.letter');
        letters.forEach(el => el.classList.add('error-shake'));
        
        setTimeout(() => {
            if (ouro <= 0 || saudeNavio <= 0) {
                perderJogoMidGame();
            } else {
                mostrarAlerta("Resposta errada! O navio bateu nos recifes e você perdeu moedas!", "💥 Impacto!");
                
                for (let i = 0; i < letrasReveladas.length; i++) {
                    if (!letrasFixas[i]) {
                        letrasReveladas[i] = "_";
                    }
                }
                atualizarSlots();
                blockInput = false;
            }
        }, 600);
    }
});

btnAlertClose.addEventListener('click', () => {
    alertModalOverlay.style.display = 'none';
});


// ==========================================
// EFEITOS DE PARTÍCULAS
// ==========================================
function criarChuvaDeOuro() {
    const duration = 6000;
    const end = Date.now() + duration;
    
    (function frame() {
        const coin = document.createElement('div');
        coin.classList.add('coin-particle');
        coin.style.left = Math.random() * 100 + 'vw';
        coin.style.animationDuration = (Math.random() * 2 + 2) + 's';
        document.body.appendChild(coin);
        
        setTimeout(() => coin.remove(), 4000);
        
        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

function criarChuvaTriste() {
    const duration = 5000;
    const end = Date.now() + duration;
    
    (function frame() {
        const drop = document.createElement('div');
        drop.classList.add('rain-particle');
        drop.style.left = Math.random() * 100 + 'vw';
        drop.style.animationDuration = (Math.random() * 0.5 + 0.5) + 's';
        document.body.appendChild(drop);
        
        setTimeout(() => drop.remove(), 1000);
        
        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

// ==========================================
// TELAS DE FINALIZAÇÃO DA JORNADA
// ==========================================
function finalizarJogo() {
    document.querySelector('.action-panel').style.display = "none";
    document.querySelector('.challenge-body').style.textAlign = "center";
    
    let titulo = "";
    let desc = "";
    let icone = "";
    let animClass = "";
    
    const container = document.getElementById('game-screen');

    if (ouro < 60) {
        titulo = "FIM DA JORNADA: RUÍNA TOTAL";
        icone = "skull";
        animClass = "icon-anim-ruina";
        container.classList.add('end-ruina');
        criarChuvaTriste();
        desc = `<h2>💰 Ouro Final: ${ouro}</h2><p><strong>Tragédia!</strong> Você chegou às Índias, mas retornou quase sem mercadorias. A Coroa considerou a expedição um desperdício. Seus bens foram confiscados e você passará o resto dos seus dias nas úmidas masmorras de Lisboa.</p>`;
    
    } else if (ouro >= 60 && ouro <= 99) {
        titulo = "FIM DA JORNADA: DÍVIDA REAL";
        icone = "warning";
        animClass = "icon-anim-divida";
        container.classList.add('end-divida');
        desc = `<h2>💰 Ouro Final: ${ouro}</h2><p><strong>Sobrevivemos, mas a que custo?</strong> Você completou a rota, porém os lucros não cobriram os altos custos do Rei. Você e sua tripulação terão que trabalhar exaustivamente por muitos anos para quitar a enorme dívida.</p>`;
    
    } else if (ouro >= 100 && ouro <= 199) {
        titulo = "ROTA CONCLUÍDA: SUCESSO!";
        icone = "emoji_events";
        animClass = "icon-anim-sucesso";
        container.classList.add('end-sucesso');
        desc = `<h2>💰 Ouro Final: ${ouro}</h2><p><strong>Missão cumprida, Capitão!</strong> Você retornou a Portugal com os porões abarrotados de especiarias valiosas. O Rei está satisfeito e sua glória como explorador está garantida.</p>`;
    
    } else {
        titulo = "ROTA CONCLUÍDA: LENDA DOS MARES";
        icone = "diamond";
        animClass = "icon-anim-lenda";
        container.classList.add('end-lenda');
        criarChuvaDeOuro();
        desc = `<h2>💰 Ouro Final: ${ouro}</h2><p><strong>Inacreditável!</strong> Você não apenas completou a missão, mas acumulou uma fortuna colossal, desafiando todos os prognósticos. Os bardos e poetas cantarão sobre a sua imbatível frota por séculos. Você é uma lenda viva!</p>`;
    }

    elTitulo.innerHTML = `<span class='material-symbols-outlined ${animClass}'>${icone}</span> ${titulo}`;
    elDesc.innerHTML = desc;
    elSlots.innerHTML = `<span class='material-symbols-outlined ${animClass}' style='font-size: 3rem;'>anchor</span><br><br>FIM DA EXPEDIÇÃO`;
}

function perderJogoMidGame() {
    elTitulo.innerHTML = "<span class='material-symbols-outlined icon-anim-ruina'>skull</span> FIM DA JORNADA";
    document.getElementById('game-screen').classList.add('end-ruina');
    criarChuvaTriste();

    if (saudeNavio <= 0) {
        elDesc.innerHTML = "<h3>💥 Naufrágio</h3>Seu navio sofreu muitos danos durante as investidas, partiu ao meio e afundou nas profundezas do oceano sem deixar rastros.";
    } else {
        elDesc.innerHTML = "<h3>⚔️ Motim</h3>Suas moedas acabaram e a ração da tripulação chegou ao fim. Sem esperança de lucro, seus marinheiros organizaram um motim sanguinário contra você.";
        elOuro.innerText = "0 - Falido";
    }
    
    document.querySelector('.action-panel').style.display = "none";
    document.querySelector('.challenge-body').style.textAlign = "center";
    elSlots.innerHTML = "<span class='material-symbols-outlined icon-anim-ruina' style='font-size: 3rem;'>water_drop</span><br><br>EXPEDIÇÃO FRACASSADA";
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
    if (blockInput || !jogoIniciado) return;
    const custoNav = 10;
    if (ouro < custoNav) {
        mostrarAlerta("Ouro insuficiente para a Navegação Estelar!");
        return;
    }
    
    const temLetra = letrasFixas.includes(false);
    const temDica = dicasMostradas < 5 && dicasMostradas < fases[faseAtual].dicas.length;
    
    if (!temLetra && !temDica) {
        mostrarAlerta("Todas as letras e dicas já foram reveladas nesta fase!");
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
    
    const estrelasAntigas = starContainer.querySelectorAll('.star-entity');
    estrelasAntigas.forEach(e => e.remove());
    starsData = [];

    const width = starContainer.clientWidth;
    const height = starContainer.clientHeight;

    for(let i=0; i<25; i++) criarEstrela(false, width, height);
    
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
    
    const baseSpeed = isTarget ? 1.0 : (Math.random() * 0.4 + 0.1);
    const angle = Math.random() * Math.PI * 2;
    const vx = Math.cos(angle) * baseSpeed;
    const vy = Math.sin(angle) * baseSpeed;

    const star = { el, x, y, vx, vy, size, isTarget };
    starsData.push(star);

    if (isTarget) {
        el.addEventListener('click', (e) => {
            e.stopPropagation(); 
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
    
    let mensagemAlerta = "Você focou na estrela certa e descobriu uma pista!<br><br>";
    
    const letraRevelada = revelarLetraAleatoria();
    if (letraRevelada) {
        mensagemAlerta += "⭐ <strong>1 Letra Revelada!</strong><br>";
    }
    
    const fase = fases[faseAtual];
    if (dicasMostradas < 5 && dicasMostradas < fase.dicas.length) {
        const novaDica = fase.dicas[dicasMostradas];
        dicasMostradas++;
        elDica.innerHTML += `<br><br><strong>DICA ${dicasMostradas}:</strong> ${novaDica}`;
        mensagemAlerta += `💡 <strong>Você ganhou uma NOVA DICA!</strong>`;
    }

    mostrarAlerta(mensagemAlerta, "✨ Sucesso Estelar!");
}

function encerrarNavegacaoEstrelas() {
    cancelAnimationFrame(starAnimationId);
    starContainer.removeEventListener('click', clickEstrelaErrada);
    starModal.style.display = 'none';
}
