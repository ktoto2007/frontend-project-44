import { getRandomInt } from '../src/utils.js';
export const evenGame = () => {
  const number = getRandomInt(0, 100);
  let correctAnswer = 'no';
  if (number % 2 === 0) {
    correctAnswer = 'yes';
  }
  const question = `Question: ${number}`
  return [question, correctAnswer]
};
export const description = 'Answer "yes" if the number is even, otherwise answer "no".'