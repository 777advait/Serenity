let score = 0;
let currentQuestionIndex = 0;
const questions = [
    {
        question: "Over the last two weeks, how often have you felt down, depressed, or hopeless?",
        options: [
            { text: "Not at all", score: 0 },
            { text: "Several days", score: 1 },
            { text: "More than half the days", score: 2 },
            { text: "Nearly every day", score: 3 }
        ]
    },
    {
        question: "Have you had little interest or pleasure in doing things you normally enjoy?",
        options: [
            { text: "Not at all", score: 0 },
            { text: "Several days", score: 1 },
            { text: "More than half the days", score: 2 },
            { text: "Nearly every day", score: 3 }
        ]
    },
    {
        question: "How often have you felt nervous, anxious, or on edge?",
        options: [
            { text: "Not at all", score: 0 },
            { text: "Several days", score: 1 },
            { text: "More than half the days", score: 2 },
            { text: "Nearly every day", score: 3 }
        ]
    },
    {
        question: "Have you had trouble falling or staying asleep, or have you been sleeping too much?",
        options: [
            { text: "Not at all", score: 0 },
            { text: "Several days", score: 1 },
            { text: "More than half the days", score: 2 },
            { text: "Nearly every day", score: 3 }
        ]
    },
    {
        question: "How often do you experience an 'attack' of fear, anxiety, or panic?",
        options: [
            { text: "Not at all", score: 0 },
            { text: "Several days", score: 1 },
            { text: "More than half the days", score: 2 },
            { text: "Nearly every day", score: 3 }
        ]
    },
    {
        question: "How often do feelings of anxiety or discomfort around others bother you?",
        options: [
            { text: "Not at all", score: 0 },
            { text: "Several days", score: 1 },
            { text: "More than half the days", score: 2 },
            { text: "Nearly every day", score: 3 }
        ]
    },
    {
        question: "How often do you feel that you've been affected by feelings of edginess, anxiety, or nerves?",
        options: [
            { text: "Not at all", score: 0 },
            { text: "Several days", score: 1 },
            { text: "More than half the days", score: 2 },
            { text: "Nearly every day", score: 3 }
        ]
    },
    {
        question: "How often do you feel that you've been bothered by low feelings, stress, or sadness?",
        options: [
            { text: "Not at all", score: 0 },
            { text: "Several days", score: 1 },
            { text: "More than half the days", score: 2 },
            { text: "Nearly every day", score: 3 }
        ]
    },
    {
        question: "How often during the past 3 months have you felt as though your moods, or your life, were not under your control?",
        options: [
            { text: "Not at all", score: 0 },
            { text: "Several days", score: 1 },
            { text: "More than half the days", score: 2 },
            { text: "Nearly every day", score: 3 }
        ]
    },
    {
        question: "How frequently have you been bothered by not being able to stop worrying?",
        options: [
            { text: "Not at all", score: 0 },
            { text: "Several days", score: 1 },
            { text: "More than half the days", score: 2 },
            { text: "Nearly every day", score: 3 }
        ]
    },
    {
        question: "How often you have felt dissatisfied with yourself over the past 3 months?",
        options: [
            { text: "Not at all", score: 0 },
            { text: "Several days", score: 1 },
            { text: "More than half the days", score: 2 },
            { text: "Nearly every day", score: 3 }
        ]
    },
];

function startScreening() {
    // const startButton = document.getElementById("startButton");
    // const questionContainer = document.getElementById("questionContainer");
    questionContainer.style.display = "block";
    nextQuestion();
}

function nextQuestion() {
    const questionText = document.getElementById("questionText");
    const optionsContainer = document.getElementById("optionsContainer");

    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionText.innerText = currentQuestion.question;

        // Generate option buttons
        optionsContainer.innerHTML = "";
        currentQuestion.options.forEach((option, index) => {
            const optionButton = document.createElement("button");
            optionButton.className = "option-btn"
            optionButton.innerText = option.text;
            optionButton.addEventListener("click", () => recordResponse(index));
            optionsContainer.appendChild(optionButton);
        });
    } else {
        evaluateScore();
    }
}

function recordResponse(responseIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const selectedOption = currentQuestion.options[responseIndex];
    score += selectedOption.score;

    currentQuestionIndex++;
    nextQuestion();
}

function evaluateScore() {
    const resultContainer = document.getElementById("resultContainer");
    const resultText = document.getElementById("resultText");

    let result = "";
    if (score <= 4) {
        result = "Your risk level is low. There is no immediate cause for concern.\n\nAlso check out challenges that we curated for our users to feel better!";
    } else if (score <= 9) {
        result = "Your risk level is moderate. Consider reaching out to a mental health professional or a trusted person to talk about your feelings.\n\nAlso check out challenges that we curated for our users to feel better!";
    } else {
        result = "Your risk level is high. It's important to seek help from a mental health professional as soon as possible.\n\nAlso check out challenges that we curated for our users to feel better!";
    }

    resultText.innerText = result;
    resultContainer.style.display = "block";

    document.querySelector(".overlay").classList.remove("hidden")
}

document.querySelector(".close-modal").addEventListener(
    "click", () => {
        resultContainer.style.display = "none";
        document.querySelector(".overlay").classList.add("hidden")
        location.reload()
    }
)

document.querySelector(".send-btn").addEventListener(
    "click", () => {
        // e.preventDefault();
        resultContainer.style.display = "none";
        document.querySelector(".overlay").classList.add("hidden")
        location.reload()
    }
)


startScreening()