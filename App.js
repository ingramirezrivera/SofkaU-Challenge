import { newQuiz } from "./src/data/questions.js";
import { Player } from "./src/models/Player.js";
import { Quiz } from "./src/models/Quiz.js";
import { UI } from "./src/models/UI.js"

//this function render the first layout of the App
function renderStartInfo(quiz, ui){
    ui.renderStart(() => {
        renderQuiz(quiz,ui)  
    })
}

//this function render de quiz
function renderQuiz(quiz, ui){
    (quiz.isEnded()) ? renderEnd(quiz, ui)
        : ui.renderQuiz(
            quiz.getQuestionIndex().category,
                quiz.getQuestionIndex().text,
                quiz.getQuestionIndex().choice, (currentChoice) => { 
                console.log(currentChoice)
                quiz.getAnswer(currentChoice, quiz, ui)
                renderQuiz(quiz,ui)
                },
                quiz.questionIndex + 1,
                quiz.questions.length,
                () => {
                    renderEnd(quiz,ui)   
                }
        )
}

function renderEnd(quiz, ui){
    
    ui.renderScore(quiz.score, (name) => {
        console.log(name)
        const player = new Player(name, quiz.score)
        const rankingPlayers = player.savePlayer()  
        renderRanking(quiz, ui, name, rankingPlayers)
    })
}

function renderRanking(quiz, ui, name, rankingPlayers){
    ui.renderTableRanking(rankingPlayers, () => {
        renderThanks(quiz, ui, name)
        })
}

// function renderRanking(quiz, ui, name, rankingPlayers){
//     ui.renderTableRanking(name, quiz.score, () => {
//         renderThanks(quiz, ui, name)
//         },
//         rankingPlayers)
// }

function renderThanks(quiz, ui, name){
    ui.renderThanksEnd(name)

}


export function renderGameOver(ui){
    ui.renderGameOver()
}

//This is the main function of the App
/**
     * @param {Quiz} quiz mian quiz object
     * @param {UI} ui main ui object
     */
 function main() {
    const quiz = new Quiz(newQuiz());
    const ui = new UI();
    //const player = new Player(console.log('toLS'));

    renderStartInfo(quiz, ui);
}
main();