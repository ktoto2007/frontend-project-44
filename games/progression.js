import { getRandomInt } from '../src/utils.js';

export const progressionGame = () => {
  const firstNumber = getRandomInt(1, 5);
  const progressionLength = getRandomInt(5, 12);
  const progressionStep = getRandomInt(2, 5);
  const hiddenNumberPosition = getRandomInt(1, progressionLength);
  let count = firstNumber;
  const progressionList = [];
  let correctAnswer = 0;
  for (let i = 1; i <= progressionLength; i += 1) {
    if (i === hiddenNumberPosition) {
      correctAnswer = String(count);
      progressionList.push('..');
      count += progressionStep;
    } else {
      progressionList.push(count);
      count += progressionStep;
    }
  }
  const question = `Question: ${progressionList.join(' ')}`;
  return [question, correctAnswer];
};
export const description = 'What number is missing in the progression?';
