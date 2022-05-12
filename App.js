import { questions } from "./src/data/questions.js";
import { Quiz } from "./src/models/Quiz.js";

function main() {

    const quiz = new Quiz(questions)

    console.log("quiz from main", quiz)
    console.log(quiz.getQuestionIndex())

}

console.log('questions from main', questions)

main()