const quizData = [
    {
        question: 'La Vía Láctea​ es una galaxia espiral donde se encuentra el sistema solar y a su vez la Tierra. ¿ Cuántos planetas hay en la Vía Láctea ?',
        a : '50 mil millones',
        b : '100 mil millones',
        c : '150 mil millones',
        d : '200 mil millones',
        correct: 'b'
    },{
        question: '100 mil millones de planetas y hasta 400 mil millones de estrellas. ¿Cuántos años tiene la estrella más vieja?',
        a : '3 mil millones',
        b : '6 mil millones',
        c : '13 mil millones',
        d : '16 mil millones',
        correct: 'c'
    },{
        question: 'Cuáles son las coordenadas galácticas de la Vía Láctea?',
        a : 'Long. = 0,01 · Lat. = 0,01',
        b : 'Long. = 0,66 · Lat. = 0,66',
        c : 'Long. = 0,00 · Lat. = 0,00',
        d : 'Long. = 1,11 · Lat. = 1,11',
        correct: 'c'
    },{
        question: 'Cuántos años le quedan a la Vía Láctea?',
        a : '1 mil millones de años',
        b : '2 mil millones de años',
        c : '3 mil millones de años',
        d : '4 mil millones de años',
        correct: 'd'
    }
]
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});