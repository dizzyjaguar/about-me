import isYes from './isYes.js';

const quizButton = document.getElementById('take-quiz');
const results = document.getElementById('results');

quizButton.addEventListener('click', () => {
    const userName = prompt('Hello Friend! What is your name?');
    const agreement = confirm(`Hey there ${userName} are you ready for the quiz?`);
    if (agreement === false) return;



    let counter = 0;


});