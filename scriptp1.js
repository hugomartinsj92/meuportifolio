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

// Inicializa a animação e exibe o texto
document.addEventListener("DOMContentLoaded", () => {
    createMatrixEffect();
    document.getElementById('info-text').textContent = texto;
});