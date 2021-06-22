// const startBtn = document.querySelector("#startBtn");
// const quizDiv = document.querySelector(".container")
// const questionh1 = document.querySelector("#question")
// const answersDiv = document.querySelector(".answers")
// const answersButtons = document.querySelectorAll('.answer')

// const questions = [
//     {
//         question: 'What is 4 * 2?',
//         answers: [
//              {text: 6, isCorrect: false},
//              {text: 8, isCorrect: true}
//         ],
//         correct: 8
//     }
// ]

// startBtn.addEventListener("click", function() {
//     cleardiv()
//     addQuestion()
// });

// answersButtons.forEach(answer => {
//     answer.addEventListener("click", function() {
//         console.log(answer);
//     })
// })


// function cleardiv() {
//     questionh1.classList.remove('hide');
//     answersDiv.classList.remove('hide');
//     startBtn.classList.add('hide');
//     quizDiv.style.setProperty('padding', '1rem 3rem');
// }

// function addQuestion() {
//     const question = questions[0].question;
//     const answers = questions[0].answers;
//     console.log(answers);
//     questionh1.innerText = question;
//     for(let i = 0; i < answersButtons.length; i++) {
//         if(answers[i] === undefined) {
//             answersButtons[i].classList.add('hide')
//         } else {
//             answersButtons[i].innerText = answers[i].text;
//         }
//         // console.log(answers[i].isCorrect)
//         if(answers[i].isCorrect === true) {
//             answersButtons[i].dataset.correct = true;
//         } else {
//             answersButtons[i].dataset.correct = false;
//         }
//     }
// }

