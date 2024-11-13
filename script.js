let buttons = document.querySelectorAll('.faq-btn');
let clicked = false;
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let currentButton = e.target;
        let question = currentButton.closest('.qa');
        let answer = question.querySelector('p');
        answer.classList.toggle('show');
        if (answer.classList.contains('show')) {
            currentButton.style.background = "url('faq-accordion-main/assets/images/icon-minus.svg')"
            clicked = true;
        } else {
            currentButton.style.background = "url('faq-accordion-main/assets/images/icon-plus.svg')"
            clicked = false;
        }
    })
})