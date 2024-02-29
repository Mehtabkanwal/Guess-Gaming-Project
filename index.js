import inquirer from "inquirer";
const systemGeneratedNumber = Math.floor(Math.random() * 10);
const answers = await inquirer.prompt([{
        type: "number",
        name: "userGuess",
        message: "Guess a number between 1 to 10 and write it: "
    }]);
const { userGuess } = answers;
console.log(`Guessed No: ${userGuess} , Correct Answer is: ${systemGeneratedNumber}`);
if (userGuess === systemGeneratedNumber) {
    console.log("Correct Answer! Congratulations You have Win");
}
else {
    console.log("Wrong Answer! Better Luck Next Time");
}
;
