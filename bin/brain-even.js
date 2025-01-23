import readline from 'readline-sync';
const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log('Answer "yes" if the number is even, otherwise answer "no".')

let winCount = 0
for (let i = 0; i <= 3; i += 1) {
    const randomInt = getRandomInt(0, 100)
    const correctAnswer = 'No'
    if (randomInt % 2 === 0) {
        correctAnswer = 'Yes'
    }
    console.log(`Question: ${randomInt}`)
    const userAnswer = readline.question('Your answer:')
    if (userAnswer === correctAnswer) {
        console.log('Correct!')
        winCount += 1
    }
    else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`)
        break
    }
}