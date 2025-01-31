import { getRandomInt } from '../src/utils.js';
export const gcdGame = () => {
    const number1 = getRandomInt(1, 100);
    const number2 = getRandomInt(1, 100);
    let correctAnswer
    let averageNumber
    let question = `Question: ${number1} ${number2}`
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
    return [question, String(correctAnswer)]
}
export const description = 'Find the greatest common divisor of given numbers.'