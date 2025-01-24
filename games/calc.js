import readlineSync from 'readline-sync'
import { getRandomInt } from '../src/index.js'
export const calcGame = () => {
    console.log('Welcome to the Brain Games!')
    const userName = readlineSync.question('May I have your name?')
    console.log(`Hello, ${userName}!`)
    console.log('What is the result of the expression?')
    for (let i = 0; i <= 2; i += 1) {
        const number1 = getRandomInt(0, 10)
        const number2 = getRandomInt(0, 10)
        const operators = ['+', '-', '*']
        const operator = operators[Math.floor(Math.random() * operators.length)]
        let correctAnswer
        let question
        if (operator === '+') {
            correctAnswer = number1 + number2
            question = `${number1} + ${number2}`
        }
        else if (operator === '-') {
            correctAnswer = number1 - number2
            question = `${number1} - ${number2}`
        }
        else {
            correctAnswer = number1 * number2
            question = `${number1} * ${number2}`
        }
        console.log(`Question: ${question}`)
        const userAnswer = readlineSync.question('Your answer:')
        if (+userAnswer === correctAnswer) {
            console.log('Correct!')
        }
        else {
            return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}' \nLet's try again, ${userName}!`)
        }
    }
    return console.log('Congratulations,' + userName)
}