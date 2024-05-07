//script.js
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
	    { 
        question: '?האם מותר לך לעקוף כלי רכב איטי הנוסע לפניך כשלשמאלך מסומן קו הפרדה רצוף',
		img: "images/2.7.PNG",
        choices: [".מותר לך לעקוף אותו, בתנאי שלא תחצה את קו ההפרדה הרצוף"
		, ".מותר לך לחצות את קו ההפרדה הרצוף ולעקוף את כלי הרכב האיטי אם הוא נוסע לאט במשך זמן רב"
		,".מותר לך לעקוף את כלי הרכב האיטי שלפניך רק אם הוא כלי רכב לא מנועי"
		, ".מותר לך לעקוף אותו ואף לחצות את קו ההפרדה הרצוף, אלא אם כן יש תמרור מיוחד האוסר זאת"],
        answer: ".מותר לך לעקוף אותו, בתנאי שלא תחצה את קו ההפרדה הרצוף"
    },
		{
			question: '?על מי מוטלת החובה להכיר את חוקי התנועה ולציית להם',
			choices: [".רק על נהגים מקצועיים"
				, ".רק על הולכי הרגל"
				, ".על כל אדם המשתמש בדרך"
				, ".רק על הנוהג בכלי רכב"],
			answer: ".על כל אדם המשתמש בדרך"
	},
		{
			question: '?מי רשאי לנהוג בכלי רכב מנועי',
			choices: ['.מי שעומד בתנאים שנקבעו במבחן השנתי של הרכב(ב"טסט")'
				, ".מי שעומד בתנאים הרשומים בהנחיות יצרן כלי הרכב בספר הרכב"
				, ".בעל רישיון נהיגה תקף לאותו סוג כלי רכב"
				, ".בעל כלי הרכב או בעל החזקה עליו"],
			answer: ".בעל רישיון נהיגה תקף לאותו סוג כלי רכב"
	},
		{
			question: '?באיזה מצב אסור לנהג לנהוג בכלי רכב מכל סוג',
			choices: [".כאשר מצבו הגופני או הנפשי עלול לסכן עוברי דרך אחרים"
				, ".לפני נטילת תרופה ובמשך 24 שעות רצופות לאחר מכן"
				, ".לא מוגדר בחוק מצב שבו לנהג בעל רישיון נהיגה תקף אסור לנהוג"
				, ".אם הנהג לא נח לפחות שמונה שעות לפני תחילת הנהיגה"],
			answer: ".כאשר מצבו הגופני או הנפשי עלול לסכן עוברי דרך אחרים"
	},
		{
			question: '?באיזה סוג כלי רכב מותר לבעל רישיון נהיגה מדרגה B לנהוג',
			choices: [".באופנוע שהספק מנועו עד 14.6 כ\"ס"
				, ".בכלי רכב נוסעים פרטי ובכלי רכב מסחרי שמשקלם הכולל המותר עד 4,500 ק\"ג"
				, ".בכלי רכב נוסעים פרטי ובכלי רכב מסחרי שמשקלם הכולל המותר עד 3,500 ק\"ג"
				, ".בכלי רכב ציבורי, כול ל אוטובוס זעיר ציבורי"],
			answer: ".בכלי רכב נוסעים פרטי ובכלי רכב מסחרי שמשקלם הכולל המותר עד 3,500 ק\"ג"
	},
		{
			question: '?האם חובה לאותת בעת סטייה ימינה או שמאלה מנתיב הנסיעה',
			choices: [".אין חובה לאותת אם הסטייה משמעותית וכל הנהגים מבחינים בה"
				, ".אין חובה לאותת בזמן סטייה מנתיב לנתיב"
				, ".אין חובה לאותת בזמן סטייה שאינה משמעותית, אבל חובה לאותת כאשר סוטים סטייה משמעותית"
				, ".חובה לאותת לפני כל סטייה מנתיב הנסיעה עד להשלמתה"],
			answer: ".חובה לאותת לפני כל סטייה מנתיב הנסיעה עד להשלמתה"
	},
    
		{
			question: '?מתי יפסול קצין משטרה רישיון נהיגה של נהג למשך 90 יום',
			choices: [".כאשר הנהג לא ציית לתמרור עצור"
				, ".כאשר הנהג לא נתן זכות קדימה"
				, ".כאשר הנהג היה מעורב בתאונת דרכים שבה נהרג אדם ויש חשד סביר לאשמתו"
				, ".כאשר הנהג היה מעורב בתאונה שבה נגרם נזק לרכוש"],
			answer: ".כאשר הנהג היה מעורב בתאונת דרכים שבה נהרג אדם ויש חשד סביר לאשמתו"
	},
		{
			question: '?נוסע היושב במושב האחורי של רכב נוסעים פרטי חייב לחגור חגורת בטיחות. על מי תחול האחריות אם לא חגר חגורה בזמן הנסיעה',
			choices: [".על הנוסע בלבד"
				, ".על בעל הרכב"
				, ".על הנהג ועל הנוסע"
				, ".על הנהג בלבד"],
			answer: ".על הנהג ועל הנוסע"
	},
		{
			question: '?האם מותר לנסוע על שטח הפרדה',
			choices: [".מותר, כששטח ההפרדה סלול"
				, ".מותר, בתנאי שהנסיעה זהירה ואטית"
				, "אסור"
				, ".מותר, רק לשם חצייתו"],
			answer: "אסור"
	},	
		{
			question: ':בכביש צר, כששני כלי רכב הבאים מכיוונים נגדיים אינם יכולים לעבור בעת ובעונה אחת',
			choices: [".יש זכות קדימה לרכב המהיר"
				, ".יש זכות קדימה למי שמגיע ראשון"
				, ".יש זכות קדימה לרכב המסיע יותר משמונה נוסעים"
				, ".שני כלי הרכב חייבים לסטות ימינה ככל האפשר ואף לרדת לשוליים"],
			answer: ".שני כלי הרכב חייבים לסטות ימינה ככל האפשר ואף לרדת לשוליים"
	},	
		{
			question: ':בקטע כביש דו-סטרי בעל נתיב אחד לכל כיוון שבין הנתיבים מפריד קו הפרדה רצוף',
			choices: [".אין הגבלה על עצירה וחנייה, אלא אם כן מוצב תמרור מתאים"
				, ".העצירה והחנייה אסורות אף בשול הדרך"
				, ".העצירה מותרת לאוטובוסים בלבד"
				, ".העצירה והחנייה מותרות רק במקביל למדרכה"],
			answer: ".העצירה והחנייה אסורות אף בשול הדרך"
	},
			{
			question: '?אופניים חשמליים, משאית והמכונית שאתה נוהג בה הגיעו באותו הזמן אל צומת, כפי שמתואר באיור שלפניך. מה צריך להיות סדר הכניסה של כלי הרכב לצומת',
			img: "images/8.46.PNG",
			choices: [".המכונית שבה אתה נוהג תיכנס ראשונה, אחריה המשאית, ולבסוף האופניים החשמליים"
				, ".המכונית שבה אתה נוהג תיכנס ראשונה, אחריה האופניים החשמליים, ולבסוף המשאית"
				, ".המשאית תיכנס ראשונה, אחריה המכונית שבה אתה נוהג, ולבסוף האופניים החשמליים"
				, ".האופניים החשמליים ייכנסו ראשונים, אחריהם המשאית, ו לבסוף המכונית שבה אתה נוהג"],
			answer: ".המכונית שבה אתה נוהג תיכנס ראשונה, אחריה המשאית, ולבסוף האופניים החשמליים"
	},	
		{
			question: '?איזה מהמשפטים האלה מתאר את ההתנהלות הנכונה של התנועה בצומת שבתצלום שלפניך',
			img: "images/14.42.PNG",
			choices: [".אם תרצה לפנות ימינה חובה עליך לעצור בכל מצב"
				, ".עליך לתת זכות קדימה להולכי רגל לאחר שתפנה ימינה"
				, ".מותר לך להמשיך לנסוע ישר בצומת משום שהפנייה ימינה אסורה"
				, ".חובה עליך לתת זכות קדימה להולכי רגל החוצים לפניך ולפנות ימינה בצומת"],
			answer: ".חובה עליך לתת זכות קדימה להולכי רגל החוצים לפניך ו לפנות ימינה בצומת"
		//alon's amazing questions :D
		{
		question: '?האם הוראות הרמזור מחייבות יותר מהוראות תמרור המורה על מתן זכות קדימה',
		choices: ["הוראות הרמזור, למעט רמזור שאורו הצהוב מהבהב, מחייבות יותר מהוראות כל תמרור."
			, ".לא. להוראות רמזור ולהוראות תמרור יש מעמד שווה."
			, "הוראות הרמזור מחייבות יותר מהוראת התמרור בדרך עירונית בלבד."
			, "כן, אך תמרור עצור מחייב יותר מהוראת אור ירוק ברמזור באותו כיוון נסיעה."],
		answer: "הוראות הרמזור, למעט רמזור שאורו הצהוב מהבהב, מחייבות יותר מהוראות כל תמרור."
	},
	{
		question: '?בתצלום שלפניך מוצגת דרך. באיזה מספר מסומן כביש בתצלום',
		img: "images/roadimg.PNG", //תמונה של כיבש
		choices: ["3"
			, "4"
			, "1"
			, "2"],
		answer: "3"
	},
	{
		question: '?איזה מהכבישים שבאיור שלפניך הוא חד־סטרי',
		img: "images/roadimg2.PNG", //גם תמונה של כבישש
		choices: ["רחוב ג בלבד"
			, "רחוב ב ורחוב ג"
			, "רחוב א ורחוב ג"
			, "רחוב א"],
		answer: "רחוב א"
	},
	{
		question: '?כיצד משפיעה המהירות על מרחק העצירה?',
		choices: ["ככל שהמהירות גדלה, מרחק העצירה גדל"
			, "ככל שהמהירות גדלה, מרחק העצירה קטֵן"
			, "אין למהירות כלי הרכב כל השפעה על מרחק העצירה"
			, ".ככל שהמהירות קטנה, מרחק העצירה גדֵ ל"],
		answer: "כל שהמהירות גדלה, מרחק העצירה גדלכ"
	},
	{
		question: '?מהו היתרון שיש לנהיגה במהירות נמוכה במצבים מסוכנים',
		choices: ["מרחק התגובה שלו יהיה ארוך יותר ויספיק לעצירה"
			, "מרחק התגובה, הבלימה והעצירה יהיו ארוכים יותר, ולכן הנסיעה בטוחה יותר"
			, "מרחקי התגובה, הבלימה והעצירה כולם יהיו קצרים יותר, ולכן הנסיעה בטוחה יותר"
			, "זמן התגובה יהיה קצר יותר והנהג יספיק להחליט את ההחלטה הנכונה"],
		answer: "זמן התגובה יהיה קצר יותר והנהג יספיק להחליט את ההחלטה הנכונה"
	}
];

let currentQuestionIndex = 0;

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const resultElement = document.getElementById("result");
const carElement = document.getElementById("car");

const progress = document.getElementById("progressBar");
const progressNum = document.getElementById("progressNum");

progress.setAttribute("max", questions.length + "");
progress.setAttribute("value", "1");
progressNum.innerText = "1/" + questions.length;

let selectedChoice = null; // Declare selectedChoice variable outside displayQuestion function

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    choicesElement.innerHTML = ""; // Clear previous choices

    currentQuestion.choices.forEach((choice, index) => {
        const choiceButton = document.createElement("button");
        choiceButton.textContent = choice;
        choiceButton.classList.add("choice");
        choiceButton.addEventListener("click", () => {
            // Remove background color from all choice buttons
            document.querySelectorAll(".choice").forEach(btn => {
                btn.style.backgroundColor = "";
            });
            // Set background color for the selected choice
            choiceButton.style.backgroundColor = "#0056b3"; // Dark blue color
            // Store the selected choice
            selectedChoice = choice;
        });
        choicesElement.appendChild(choiceButton);
    });

    // Display the image if it exists
    if (currentQuestion.img) {
        const imgElement = document.createElement("img");
        imgElement.src = currentQuestion.img;
        imgElement.style.height = "300px";
        choicesElement.appendChild(imgElement);
    }
}




function checkAnswer() {
    if (selectedChoice) {
        const selectedAnswer = selectedChoice; // No need to access .textContent
        const correctAnswer = questions[currentQuestionIndex].answer;
        if (selectedAnswer === correctAnswer) {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                displayQuestion();
            }
            // Remove the error message if it exists
            const errorMessage = resultElement.querySelector("h1");
            if (errorMessage) {
                errorMessage.remove();
            }
        } else {
            // Display error message
            let errorMessage = resultElement.querySelector("h1");
            if (!errorMessage) {
                errorMessage = document.createElement("h1");
                errorMessage.style.color = "red";
                errorMessage.textContent = "טעות. נסו שוב";
                resultElement.appendChild(errorMessage); // Append the message to the resultElement
            }
        }
        moveCar();
		if (currentQuestionIndex != 8){
			progress.setAttribute("value", currentQuestionIndex + 1 + "");
			progressNum.innerText = Math.min(currentQuestionIndex, questions.length - 1) + 1 + "/" + questions.length;
		}
    }
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

// Get the back button element
const backButton = document.getElementById("backButton");

// Add event listener to the back button
backButton.addEventListener("click", () => {
    // Move to the previous question if it's not the first question
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
        moveCar();
        progress.setAttribute("value", currentQuestionIndex + "");
        const errorMessage = resultElement.querySelector("h1");
        if (errorMessage) {
            errorMessage.remove();
        }
    }
});

const sendButton = document.getElementById("sendButton");

sendButton.addEventListener("click", () => {

    checkAnswer(); // Call the checkAnswer function when the send button is clicked
});


