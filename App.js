import { questions } from "./src/data/questions.js";
//import { Player } from "./src/models/Player.js";
import { Quiz } from "./src/models/Quiz.js";
import { UI } from "./src/models/UI.js"


function renderStartInfo(quiz, ui){
    ui.renderStart(() => {
        console.log('clicked start')
    })
}

/**
     * @param {Quiz} quiz mian quiz object
     * @param {UI} ui main ui object
     */
 function main() {
    const quiz = new Quiz(questions);
    const ui = new UI();
    //const player = new Player(console.log('toLS'));

    renderStartInfo(quiz, ui);
}
main();