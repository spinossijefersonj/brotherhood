// Script para navbar com efeito suave no scroll
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
// FAQ Accordion
document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.question');
    
    questions.forEach(question => {
        question.addEventListener('click', () => {
            // Remove active class from all questions
            questions.forEach(q => {
                if (q !== question) {
                    q.classList.remove('active');
                    q.nextElementSibling.style.display = 'none';
                }
            });

            // Toggle current question
            question.classList.toggle('active');
            const answer = question.nextElementSibling;
            
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });
});
