import { getRandomInt } from '../src/index.js'
import readlineSync from 'readline-sync'
export const primeGame = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name?');
    console.log(`Hello, ${userName}!`);
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
    for (let i = 0; i <= 2; i += 1) {
        const randomNumber = getRandomInt(1, 100)
        let i = 2
        let correctAnswer = 'yes'
        while (i < randomNumber) {
            if (randomNumber % i === 0) {
                correctAnswer = 'no'
                break
            }
            i += 1
        }
        console.log(`Question ${randomNumber}`)
        const userAnswer = readlineSync.question('Your answer:');
        if (userAnswer === correctAnswer) {
            console.log('Correct!')
        }
        else {
            return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}' \nLet's try again, ${userName}!`);
        }
    }
    return console.log(`Congratulations,${userName}`);
}