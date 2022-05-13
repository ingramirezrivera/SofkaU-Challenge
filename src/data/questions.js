import { Question } from "../../src/models/Question.js"
import { data } from "../../src/data/data.js";

//object created from data 
const questions = data.map(
  (question) =>
    new Question(
      question.id,
      question.level,  
      question.question,
      question.category,
      question.choices,
      question.answer
    )
);

export function newQuiz(){
  
  const quizQuestions = [];

  //to get random questions by level from data.js
  for (let i = 1; i < (questions.length / 5) +1 ; i++) {
      quizQuestions.push((questions.filter((question) => question.level === i))[Math.floor(Math.random() * 5)])

  }
  console.log('Quiz random questions', quizQuestions)
    return quizQuestions;
};


