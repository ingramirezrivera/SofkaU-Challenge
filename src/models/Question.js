
//Class for questions
export class Question {

    /**
     * 
     * @param {number} id id question
     * @param {number} level this is the level of the question
     * @param {string} text this is the text of a question
     * @param {string} category this is the category of the question
     * @param {string[]} choice this is the answer option 
     * @param {string} answer this is the correct answer
     */
    constructor(id, level, text, category, choice, answer){
        this.id = id;
        this.level = level;
        this.text = text;
        this.category = category;
        this.choice = choice;
        this.answer = answer;
    }

    //Method for correct answer
    /**
     * 
     * @param {string} choice this is the answer selected
     * @returns {boolean} return true if answer is correct
     */
    correctAnswer(choice){
        return choice === this.answer;
    }
}



