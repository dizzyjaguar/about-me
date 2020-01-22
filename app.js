import isYes from './isYes.js';

const quizButton = document.getElementById('take-quiz');
const results = document.getElementById('results');

quizButton.addEventListener('click', () => {
    const userName = prompt('Hello Friend! What is your name?');
    const agreement = confirm(`Hey there ${userName} are you ready for the quiz?`);
    
    if (agreement === false) return;

    const answerOne = prompt('Was Jazz was invented in the 1960\'s?');
    const answerTwo = prompt('Was Charlie Parker is the godfather of Bebop?');
    const answerThree = prompt('Did Thelonius Monk played Alto Saxophone?');
    const answerFour = prompt('Miles Davis played with Charlie Parker');
    const answerFive = prompt('Ragtime is a modern form of Jazz that first started in 1980s')

    alert(`Great job you\'re all done ${userName}, here are the results`);

    let counter = 0;

    if (isYes(answerOne) === false) counter++;
    if (isYes(answerTwo) === true) counter++;
    if (isYes(answerThree) === false) counter++;
    if (isYes(answerFour) === true) counter++;
    if (isYes(answerFive) === false) counter++;


    if (counter <= 2) {
        results.textContent = (`Sorry ${userName} you didn\'t do so well, you got ${counter} out of 5... looks like you need to study some more`);
    } else if (counter <= 4) {
        results.textContent = (`Not too shabby ${userName}. You got ${counter} out of 5`);
    } else if (counter === 5) {
        results.textContent = (`El Perfecto Amigo! You got ${counter} out of 5. Your a Jazz history Pro!!!`);
    }
});