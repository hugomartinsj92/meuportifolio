// Exemplo de JavaScript para adicionar interatividade
document.querySelectorAll('.projeto').forEach(projeto => {
    projeto.addEventListener('click', () => {
        alert(`Você clicou no ${projeto.querySelector('h2').textContent}`);
    });
});