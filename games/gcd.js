import { getRandomInt } from '../src/index.js';
import readlineSync from 'readline-sync';
export const gcdGame = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name?');
    console.log(`Hello, ${userName}!`);
    console.log('Find the greatest common divisor of given numbers.')
    for (let i = 0; i <= 2; i += 1) {
        const number1 = getRandomInt(1, 100);
        const number2 = getRandomInt(1, 100);
        let correctAnswer
        let averageNumber
        if (number1 > number2) {
            averageNumber = number1
        }
        else if (number1 < number2) {
            averageNumber = number2
        }
        else {averageNumber = number1}
        for (let i = 1; i <= Math.floor(averageNumber / 2); i += 1) {
            if (number1 % i === 0 & number2 % i === 0) {
                correctAnswer = i
            }
        }
        console.log(`Question: ${number1} ${number2}`)
        const userAnswer = readlineSync.question('Your answer:');
        if (+userAnswer === correctAnswer) {
            console.log('Correct!')
        }
        else {
            return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}' \nLet's try again, ${userName}!`);
        }
    }
    return console.log(`Congratulations,${userName}`);
}