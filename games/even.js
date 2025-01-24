import readlineSync from 'readline-sync';
import { getRandomInt } from '../src/index.js';

export const evenGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i <= 2; i += 1) {
    const question = getRandomInt(0, 100);
    let correctAnswer = 'no';
    if (question % 2 === 0) {
      correctAnswer = 'yes';
    }
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer:');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}' \nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations,${userName}`);
};
