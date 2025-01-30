import { getRandomInt } from '../src/index.js'
import readlineSync from 'readline-sync'
export const progressionGame = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name?');
    console.log(`Hello, ${userName}!`);
    console.log('What number is missing in the progression?')
    for (let i = 0; i <= 2; i += 1) {
        const firstNumber = getRandomInt(1, 5)
        const progressionLength = getRandomInt(5, 12)
        const progressionStep = getRandomInt(2, 5)
        const hiddenNumberPosition = getRandomInt(1, progressionLength)
        let count = firstNumber
        let progressionList = []
        let correctAnswer = 0 
        for (let i = 1; i <= progressionLength; i += 1) {
            if (i === hiddenNumberPosition) {
                correctAnswer = count
                progressionList.push('..')
                count += progressionStep
            }
            else {
                progressionList.push(count)
                count += progressionStep
            }
        }
        console.log(`Question ${progressionList.join(' ')}`)
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