// Генератор бази питань (по 20 для кожного рівня)
function getLevelQuestions(type) {
    const questionsDB = {
        'A1': [
            { q: "Яблуко англійською це...", a: ["Apple", "Orange", "Banana"], c: 0 },
            { q: "Як перекладається 'Hello'?", a: ["Дякую", "Бувай", "Привіт"], c: 2 },
            { q: "Кіт це -", a: ["Dog", "Cat", "Rat"], c: 1 },
            { q: "Який колір 'Red'?", a: ["Червоний", "Синій", "Жовтий"], c: 0 },
            { q: "Скільки буде 'One'?", a: ["2", "1", "3"], c: 1 }
        ],
        'A2': [
            { q: "I ___ a doctor.", a: ["is", "am", "are"], c: 1 },
            { q: "She ___ to the gym.", a: ["goes", "go", "going"], c: 0 },
            { q: "Yesterday I ___ a movie.", a: ["watch", "watched", "watching"], c: 1 },
            { q: "My dog ___ big.", a: ["is", "am", "are"], c: 0 },
            { q: "We ___ at home.", a: ["is", "am", "are"], c: 2 }
        ],
        'B1': [
            { q: "If I ___ you, I wouldn't go.", a: ["was", "were", "am"], c: 1 },
            { q: "I have ___ there for 2 years.", a: ["live", "lives", "lived"], c: 2 },
            { q: "He is ___ than me.", a: ["tall", "taller", "tallest"], c: 1 },
            { q: "___ you ever been to Paris?", a: ["Do", "Has", "Have"], c: 2 },
            { q: "I'm looking forward ___ you.", a: ["to see", "seeing", "to seeing"], c: 2 }
        ],
        'C1': [
            { q: "Choose synonym for 'Precise'", a: ["Accurate", "Wrong", "Easy"], c: 0 },
            { q: "Despite ___ the rain, we went out.", a: ["of", "the", "in"], c: 1 },
            { q: "It's high time you ___ home.", a: ["go", "went", "going"], c: 1 },
            { q: "Rarely ___ such a beautiful sunset.", a: ["I saw", "have I seen", "I have seen"], c: 1 },
            { q: "I'd rather you ___ here.", a: ["don't stay", "didn't stay", "not stay"], c: 1 }
        ]
    };

    let base = questionsDB[type];
    let result = [];
    // Створюємо 20 питань (копіюємо базу 4 рази для прикладу, можна замінити унікальними)
    for(let i=0; i<4; i++) {
        base.forEach((q, index) => {
            let newQ = {...q};
            newQ.q = `[Питання ${result.length + 1}] ` + newQ.q;
            result.push(newQ);
        });
    }
    return result;
}

const allLevels = [
    { name: "Beginner", questions: getLevelQuestions('A1') },
    { name: "Elementary", questions: getLevelQuestions('A2') },
    { name: "Intermediate", questions: getLevelQuestions('B1') },
    { name: "Advanced", questions: getLevelQuestions('C1') }
];

let state = { level: null, index: 0, score: 0 };

function showSection(id) {
    document.querySelectorAll('.content-section').forEach(s => s.classList.add('hidden'));
    document.getElementById(id + '-section').classList.remove('hidden');
    window.scrollTo(0,0);
}

function startQuiz(idx) {
    state = { level: allLevels[idx], index: 0, score: 0 };
    document.getElementById('quiz-modal').style.display = 'block';
    document.getElementById('result-container').classList.add('hidden');
    document.getElementById('question-text').classList.remove('hidden');
    document.getElementById('options-list').classList.remove('hidden');
    renderStep();
}

function renderStep() {
    const q = state.level.questions[state.index];
    document.getElementById('question-text').innerText = q.q;
    document.getElementById('q-counter').innerText = `${state.index + 1} / 20`;
    document.getElementById('progress-fill').style.width = `${(state.index / 20) * 100}%`;

    const list = document.getElementById('options-list');
    list.innerHTML = '';
    q.a.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.onclick = () => {
            if(i === q.c) { btn.classList.add('correct'); state.score++; }
            else { btn.classList.add('wrong'); }
            
            setTimeout(() => {
                state.index++;
                if(state.index < 20) renderStep();
                else finishQuiz();
            }, 500);
        };
        list.appendChild(btn);
    });
}

function finishQuiz() {
    document.getElementById('progress-fill').style.width = '100%';
    document.getElementById('question-text').classList.add('hidden');
    document.getElementById('options-list').classList.add('hidden');
    document.getElementById('result-container').classList.remove('hidden');
    document.getElementById('result-score').innerText = `Ви пройшли ${state.level.name}! Правильних відповідей: ${state.score} з 20.`;
}

function closeQuiz() { document.getElementById('quiz-modal').style.display = 'none'; }
window.onclick = (e) => { if(e.target.className === 'modal') closeQuiz(); };

