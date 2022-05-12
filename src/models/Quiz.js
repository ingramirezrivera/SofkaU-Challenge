import { Question } from "./Question.js";

//this class inherits from Questions
export class Quiz {
    score = 0;
    questionIndex = 0;

    /**
   *
   * @param {Question[]} questions
   */
    constructor(questions){
        this.questions = questions;
    }

    //to get de index of question
    /**
   *
   * @returns {Question} the question found
   */
    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }

    //to get the user answer
    /**
   * @param {string} answer
   * @param {object} quiz
   * @param {object} ui 
   */
    getAnswer(answer){
        if (this.getQuestionIndex().correctAnswer(answer)) {
            this.score += this.awards[this.questionIndex]
            console.log(this.score)
        }
        this.questionIndex++;
    }

    //to know when the quiz traverse all the questions
    isEnded() {
        return this.questions.length === this.questionIndex;
    }
}