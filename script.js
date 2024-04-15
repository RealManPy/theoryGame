const questions = [
    { 
        question: '?מהי דרגת הרישיון הדרושה לנהיגה בכלי רכב מנועי שמשקלו הכולל עד 3,500 ק"ג',
        choices: ["A", "B", "C", "D"],
        answer: "B"
    },
    { 
        question: "?האם חובה לציית להוראות ולאותות של פקח עירוני במדים",
        choices: [".לא. חובה לציית לפקח רק לעניין הוראות חנייה בתחום העיר"
		, ".כן, אם ההוראות קשורות לסדרי התנועה"
		,".לא. חובה לציית לפקח רק לעניין הצגת רישיון נהיגה"
		, ".פקח עירוני אינו מוסמך להורות לנהגים על הסדרי תנועה"],
        answer: ".כן, אם ההוראות קשורות לסדרי התנועה"
    },
    // Add more questions here
];

let currentQuestionIndex = 0;

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const resultElement = document.getElementById("result");
const carElement = document.getElementById("car");

const progress = document.getElementById("progressBar");
progress.setAttribute("max", questions.length + "");


function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    choicesElement.innerHTML = ""; // Clear previous choices

    currentQuestion.choices.forEach((choice, index) => {
        const choiceButton = document.createElement("button");
        choiceButton.textContent = choice;
        choiceButton.classList.add("choice");
        choiceButton.addEventListener("click", () => {
            checkAnswer(choice);
        });
        choicesElement.appendChild(choiceButton);
    });
}

function checkAnswer(selectedChoice) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedChoice === correctAnswer) {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
            
        }
    }
	moveCar();
	progress.setAttribute("value", currentQuestionIndex + "");
	
}



// Display the first question when the page loads
displayQuestion();

// Function to move the car
// Adjust the animation duration based on the total number of questions

const animationDuration = questions.length * 5 + 's'; // 5 seconds per question

// Function to move the car
function moveCar() {
    const pathWidth = document.getElementById("road").offsetWidth;
    const increment = pathWidth / questions.length;
    const newPosition = increment * currentQuestionIndex;
    carElement.style.animationDuration = animationDuration; // Set animation duration first
    carElement.style.left = newPosition + "px";
}

