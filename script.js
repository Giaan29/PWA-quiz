const questions = [
    { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Modern Layout", "Hyperlink and Text Management Language"], answer: 0 },
    { question: "Which language is used for web styling?", options: ["Python", "CSS", "Java"], answer: 1 },
    { question: "What is the main purpose of JavaScript?", options: ["Styling", "Database Management", "Interactivity"], answer: 2 },
    { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Styling System", "Computer Style Syntax"], answer: 0 },
    { question: "Which programming language is known for data science?", options: ["Python", "C++", "JavaScript"], answer: 0 },
    { question: "Which symbol is used for single-line comments in JavaScript?", options: ["//", "<!-- -->", "/* */"], answer: 0 },
    { question: "Which language is primarily used for backend web development?", options: ["HTML", "PHP", "CSS"], answer: 1 },
    { question: "Which of these is a version control system?", options: ["Git", "Docker", "MySQL"], answer: 0 },
    { question: "What is the output of 'typeof []' in JavaScript?", options: ["array", "object", "undefined"], answer: 1 },
    { question: "Which of these is NOT a programming language?", options: ["Ruby", "HTML", "C#"], answer: 1 },
    { question: "What does SQL stand for?", options: ["Structured Query Language", "Simple Query Logic", "Sequential Query Layer"], answer: 0 },
    { question: "Which of these is a frontend JavaScript framework?", options: ["Django", "React", "Laravel"], answer: 1 },
    { question: "Which keyword is used to define a variable in JavaScript?", options: ["var", "define", "set"], answer: 0 },
    { question: "What is the file extension for Python scripts?", options: [".py", ".js", ".java"], answer: 0 },
    { question: "Which HTML tag is used to include JavaScript code?", options: ["<script>", "<js>", "<javascript>"], answer: 0 }
];
let score = 0;
let shuffledQuestions = [];
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const scoreEl = document.getElementById("score");

function shuffleQuestions() {
    shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
}
function loadQuestion() {
    if (shuffledQuestions.length === 0) {
        alert("Quiz Finished! Your Score: " + score);
        score = 0;
        scoreEl.textContent = score;
        shuffleQuestions();
    }
    const q = shuffledQuestions.pop();
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";
    q.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.onclick = () => checkAnswer(index, q.answer);
        optionsEl.appendChild(btn);
    });
}
function checkAnswer(selectedIndex, correctIndex) {
    if (selectedIndex === correctIndex) {
        score++;
        scoreEl.textContent = score;
    }
    loadQuestion();
}
shuffleQuestions();
loadQuestion();
