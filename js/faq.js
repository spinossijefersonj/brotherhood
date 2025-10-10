// ...existing code...

// FAQ Accordion
document.querySelectorAll('.question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isActive = question.classList.contains('active');
        
        // Fecha todas as respostas
        document.querySelectorAll('.answer').forEach(ans => {
            ans.classList.remove('show');
        });
        document.querySelectorAll('.question').forEach(q => {
            q.classList.remove('active');
        });

        // Abre a resposta clicada
        if (!isActive) {
            answer.classList.add('show');
            question.classList.add('active');
        }
    });
});