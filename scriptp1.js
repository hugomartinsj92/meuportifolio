// Texto a ser exibido na tela
const texto = `
Código Inicial:

Inicializando...
Carregando identidade...
Nome: Hugo Martins Passos Jardim
Idade: 31 anos
Estado Civil: Solteiro
Localização: Águas Claras, Brasília 

Matriz de Formação Acadêmica:

Serviço Social (Universidade de Brasília)
Período: 2015-2021

Técnico em Eletromecânica (Instituto Federal de Brasília) 
Período: 2013-2017

Memória de Experiências Profissionais:

iFood – Motoboy Entregador (2024)
Protocolo: Entrega de alimentos via aplicativo.

P2W Poker Club – Dealer/Crupiê (2023-2024)
Protocolo: Administração de jogos de poker, resolução de conflitos e gerenciamento financeiro.

IBGE – Agente Supervisor Censitário (2022-2023)
Protocolo: Supervisão de equipes, coleta e análise de dados, elaboração de relatórios técnicos.

Unidade de Internação de Santa Maria – Estágio em Serviço Social (2018-2019)
Protocolo: Acompanhamento psicossocial, elaboração de relatórios e trabalho multidisciplinar.

Enjoy Poker Club – Dealer/Crupiê (2017-2018)
Protocolo: Gestão de jogos e suporte aos jogadores.

Elite Refrigeração – Técnico Estagiário (2016-2017) 
Protocolo: Manutenção preventiva e corretiva de sistemas de refrigeração.

Habilidades Carregadas na Matriz:

Inteligencia artificial, Machine Learning, Data Science
Linguagem: Inglês, Chines, Portugues
Software: Excel, Pacote Office, Python
Licença: Carteira Nacional de Habilitação AB 
`;

// Adiciona evento de clique no botão de voltar
document.getElementById("back-button").addEventListener("click", () => {
    window.location.href = "index.html";
});

// Função para criar o efeito de letras caindo
function createMatrixEffect() {
    const canvas = document.getElementById('matrixCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#00FF00';
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
            const text = characters.charAt(Math.floor(Math.random() * characters.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            drops[i]++;
        }
    }

    setInterval(draw, 33);
}

// Função para criar o efeito de digitação
function typeWriterEffect(element, text, speed = 50) {
    let index = 0;
    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }
    element.textContent = ""; // Limpa antes de iniciar
    type();
}

// Inicializa a animação e exibe o texto
document.addEventListener("DOMContentLoaded", () => {
    createMatrixEffect();
    const infoTextElement = document.getElementById('info-text');
    typeWriterEffect(infoTextElement, texto, 30); // Velocidade da digitação
});

// Adiciona estilos CSS
const style = document.createElement('style');
style.textContent = `
body {
    background-color: black;
    color: #00FF00;
    font-family: 'Courier New', Courier, monospace;
    margin: 0;
    overflow-y: scroll; /* Permite rolagem vertical */
}

#back-button {
    position: fixed;
    top: 10px;
    right: 10px;
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
    z-index: 1000;
}

canvas {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

#info-container {
    position: relative;
    top: 50px;
    left: 50px;
    background-color: rgba(0, 0, 0, 0.7);
    color: #00FF00;
    padding: 20px;
    border-radius: 10px;
    z-index: 1000;
    width: calc(100% - 100px);
    max-width: 800px;
}

#info-text {
    white-space: pre-wrap; /* Preserve whitespace and line breaks */
}

#video-container {
    position: relative;
    margin: 20px auto;
    width: 80%;
    max-width: 800px;
    z-index: 1000;
}

video {
    width: 100%;
    height: auto;
}
`;
document.head.appendChild(style);