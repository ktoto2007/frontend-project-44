import { getRandomInt } from '../src/index.js'
import readlineSync from 'readline-sync'
export const primeGame = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name?');
    console.log(`Hello, ${userName}!`);
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
    for (let i = 0; i <= 2; i += 1) {
        
    }
}