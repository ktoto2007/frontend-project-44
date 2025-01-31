import readlineSync from 'readline-sync'
export const logic = (description, gameFunction) => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name?');
    console.log(`Hello, ${userName}!`);
    console.log(description)
    for (let i = 0; i <= 2; i += 1){
        const game = gameFunction()
        console.log(game[0])
        const userAnswer = readlineSync.question('Your answer:');
        if (userAnswer === game[1]) {
            console.log('Correct!')
        }
        else {
            return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${game[1]}' \nLet's try again, ${userName}!`);
        }
    }
    return console.log(`Congratulations,${userName}!`);
}