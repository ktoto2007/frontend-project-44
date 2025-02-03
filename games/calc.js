import { getRandomInt } from '../src/utils.js';

export const calcGame = () => {
  const number1 = getRandomInt(0, 10);
  const number2 = getRandomInt(0, 10);
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  let correctAnswer;
  let question;
  if (operator === '+') {
    correctAnswer = (number1 + number2);
    question = `Question: ${number1} + ${number2}`;
  } else if (operator === '-') {
    correctAnswer = number1 - number2;
    question = `Question: ${number1} - ${number2}`;
  } else {
    correctAnswer = number1 * number2;
    question = `Question: ${number1} * ${number2}`;
  }
  return [question, String(correctAnswer)];
};
export const description = 'What is the result of the expression?';
