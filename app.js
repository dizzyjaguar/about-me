import isYes from './isYes.js';

const quizButton = document.getElementById('take-quiz');
const results = document.getElementById('results');

quizButton.addEventListener('click', () => {
    const userName = prompt('Hello Friend! What is your name?');
    const agreement = confirm(`Hey there ${userName} are you ready for the quiz?`);
    if (agreement === false) return;

    answerOne = prompt('Was Jazz was invented in the 1960\'s?');
    answerTwo = prompt('Was Charlie Parker is the godfather of Bebop?');
    answerThree = prompt('Did Thelonius Monk played Alto Saxophone?');
    answerFour = prompt('Miles Davis played with Charlie Parker');
    answerFive = prompt('Ragtime is a mdoern form of Jazz that first started in 1980s')

    let counter = 0;
    

});