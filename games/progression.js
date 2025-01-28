import { getRandomInt } from '..src/index.js'
import readlineSync from 'readline-sync'
export const progressionGame = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name?');
    console.log(`Hello, ${userName}!`);
    for (let i = 0; i <= 2; i += 1) {
        const firstNumber = getRandomInt(1, 5)
        const progressionLength = getRandomInt(5, 12)
        const progressionStep = getRandomInt(2, 5)
    }
}