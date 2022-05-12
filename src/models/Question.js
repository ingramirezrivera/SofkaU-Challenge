
//Class for questions
export class Question {

    constructor(id, text, category, level, choice, answer){
        this.id = id;
        this.text = text;
        this.category = category;
        this.level = level;
        this.choice = choice;
        this.answer = answer;
    }

    correctAnswer(choice){
        return choice === this.answer;
    }
}



