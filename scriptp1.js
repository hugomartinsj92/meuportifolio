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
Função: Atuação no campo psicossocial e comunitário.
Técnico em Eletromecânica (Instituto Federal de Brasília) 

Período: 2013-2017
Função: Manutenção técnica e resolução de problemas complexos.
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



.
`

;

// Função para animar o texto no estilo Matrix
function typeWriter(text, element, delay = 10) {
    let index = 0;
    const interval = setInterval(() => {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
        } else {
            clearInterval(interval);
        }
    }, delay);
}

// Inicializa a animação
document.addEventListener("DOMContentLoaded", () => {
    const matrixTextElement = document.getElementById("matrix-text");
    typeWriter(texto, matrixTextElement);
});