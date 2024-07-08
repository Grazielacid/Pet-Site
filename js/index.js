function selectService(service) {
    document.querySelectorAll('.service').forEach(el => el.classList.remove('selected'));
    document.getElementById(service).classList.add('selected');

    const additionalInputs = document.getElementById('additional-inputs');
    additionalInputs.innerHTML = '';

    if (service === 'drop-in') {
        const repeatOptions = `
            <select id="frequency">
                <option value="one-time">Uma vez</option>
                <option value="repeat-weekly">Repetir semanalmente</option>
            </select>
        `;
        additionalInputs.innerHTML = repeatOptions;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    selectService('boarding');
});

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    const topBtn = document.getElementById("topBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
}

document.addEventListener('DOMContentLoaded', function() {
    var questions = document.querySelectorAll('.faq-question');
    
    questions.forEach(function(question) {
        question.addEventListener('click', function() {
            var answer = this.nextElementSibling;
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });
});

function irParaFunc() {
    window.location.href = "func.html";
}
