import { Question } from "../../src/models/Question.js"
import { data } from "../../src/data/data.js";

export const questions = data.map(
  (question) =>
    new Question(
      question.question,
      question.category,
      question.level,
      question.choices,
      question.answer
    )
);

