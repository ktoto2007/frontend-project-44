import getRandomInt from '../src/utils.js';

export const primeGame = () => {
  const randomNumber = getRandomInt(2, 100);
  let i = 2;
  let correctAnswer = 'yes';
  while (i < randomNumber) {
    if (randomNumber % i === 0) {
      correctAnswer = 'no';
      break;
    }
    i += 1;
  }
  const question = `Question: ${randomNumber}`;
  return [question, correctAnswer];
};
export const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
