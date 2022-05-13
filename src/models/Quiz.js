import { Question } from "./Question.js";
import { renderGameOver } from "../../App.js";

//this class inherits from Questions
export class Quiz {
    level = 0;
    score = 0;
    questionIndex = 0;
    awards = [100, 200, 500, 1000, 2000];


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
   * @param {string} answer choice selected
   * @param {object} quiz the quiz object
   * @param {object} ui the ui object
   */
    getAnswer(answer, quiz, ui){
        (this.getQuestionIndex().correctAnswer(answer)) ?
            (this.score += this.awards[this.questionIndex],
            console.log(this.score))
        :
            (this.questionIndex = this.questions.length,
            renderGameOver(ui))
        
        this.questionIndex++;
    }

    //to know when the quiz traverse all the questions
    isEnded() {
        return this.questions.length === this.questionIndex;
    }
}