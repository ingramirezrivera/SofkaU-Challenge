export class UI {
    constructor(){}

    //this method render the first layout 
    renderStart(callback) {
        const startHTML = `
        <img id="img-logo" src="https://ik.imagekit.io/lvh0tltbeph/SofkaU/logo-sofkau_1Fn3uH-1S.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645658493330" alt="">
        <h1>Welcome to Sofka U Challenge</h1>
        <div id="line-grad"></div>
        <div class="info-container">
            <p><b>In this challenge you will take a Quiz</b></p>
            <br>
            <p><b>1.</b> The Quiz has 5 rounds with 4 multiple choices.</p>
            <p><b>2.</b> Youn can select only one choice.</p>
            <p><b>3.</b> If your choice is correct pass to the next level, and you win awards for each level.</p>
            <p><b>4.</b> If your choice is incorrect you lose the quiz and the awards.
            <p><b>5.</b> Please click in the button below to start and good Look.
        </div>
        <div id="line-grad"></div>
        <button id='button' class='button-start'>Start Quiz</button>
        `
        //rendering quizHTML on the <div id="root"></div>
        const startRender = document.querySelector("#root");
        startRender.innerHTML = startHTML;
        //event listener to get action to the next renderQuiz
        const button = document.querySelector("#button")
        button.addEventListener("click", () => callback())
    
    }

    //this method renders the quiz layout and add 
    renderQuiz(category, text, choices, callback, questionIndex, totalQuestions, callbackEnd){
        const quizHTML = `
        <div class="container">
            <img id="img-logo" src="https://ik.imagekit.io/lvh0tltbeph/SofkaU/logo-sofkau_1Fn3uH-1S.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645658493330" alt="Sofka logo">
            <div id="quiz">
                <h1>Quiz</h1>
                <div id="line-grad"></div>
                <div id="choices-container">
                    <h2 id="category">${category}</h2>
                    <h2 id="question">${text}</h2>
                    <div id="choices">
                </div>
                    
                </div>
                <div id="line-grad"></div>
                <footer>
                    <div id="round">Round ${questionIndex} of ${totalQuestions}</div>
                    <button id="button-end">End Quiz</button>
                </footer>
            </div>
        </div>`

        //rendering quizHTML on the <div id="root"></div>
        const quizRender = document.querySelector("#root");
        quizRender.innerHTML = quizHTML;
        //rendering the category quiz parameters
        const categoryTitle = document.querySelector("#category");
        categoryTitle.innerHTML = "About: " + category;
        //rendering the text question parameters
        const questionTitle = document.querySelector("#question");
        questionTitle.innerHTML = text;
        //taking the div to render the button choices
        const choicesContainer = document.querySelector("#choices");
        choicesContainer.innerHTML = "";
            //render the button's choices
            choices.map((choice, index) => {
                const button = document.createElement("button")
                button.innerHTML = choices[index];
                button.id = "button-choice";
                choicesContainer.append(button);
                button.addEventListener("click", () => callback(choices[index]));
            });
        //quiz End button to callback to renderEnd
        const buttonEnd = document.querySelector("#button-end")
        buttonEnd.addEventListener("click", () => callbackEnd())

    }
    //this method renders the player scores and ahve the form to save the name
    renderScore(score, callbackSave){
        const quizEnd = `
        <div class="container">
            <img id="img-logo" src="https://ik.imagekit.io/lvh0tltbeph/SofkaU/logo-sofkau_1Fn3uH-1S.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645658493330" alt="Sofka logo">
            <h1>Total Score</h1> 
            <h2 id="score">${score}</h2>
            <form id="form" action="/" method="GET">
                <label for="name"></label>
                <input id="name" type="text" name="name" placeholder="Your name Here" required/>
                <button type="submit" id="button-scores" class="button-form">Save your Scores</button>
            </form>
        </div>`;
        
        //
        const scores = document.querySelector("#root");
        scores.innerHTML = quizEnd;

        const name = document.querySelector("#name")
        const form = document.querySelector("#form")

        form.addEventListener('submit', (e) => {
            e.preventDefault()
            callbackSave(name.value)
        })


    }

    //this method render the Game Over Layout
    renderGameOver(){
        const gameOverHTML =`
        <div class="container">
            <img id="img-logo" src="https://ik.imagekit.io/lvh0tltbeph/SofkaU/logo-sofkau_1Fn3uH-1S.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645658493330" alt="Sofka logo">
            <h1>Thanks for participating</h1> 
            <h2 id="player">Game Over</h2>
        </div>`

        const scores = document.querySelector("#root");
        scores.innerHTML = gameOverHTML;


    }

    renderTableRanking(rankingPlayers, callback){
        const tableRankingHTML = `
        <div class="container">
            <img id="img-logo" src="https://ik.imagekit.io/lvh0tltbeph/SofkaU/logo-sofkau_1Fn3uH-1S.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645658493330" alt="Sofka logo">
            <h1>Ranking players</h1> 
            <div id="line-grad"></div>
            <div id="ranking-players">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Pos</th>
                            <th>Player</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    
                    <tbody id="ranking-table">
                    </tbody>
                    
                </table>
            </div>
            <div id="line-grad"></div>
            <button id='button' class='button-start'>Continue</button>
    </div>`

        const tableRank = document.querySelector("#root");
        tableRank.innerHTML = tableRankingHTML;

        const table = document.querySelector("#ranking-table")
        table.innerHTML = '';

        rankingPlayers.map((playerRank, index) => {
            let row = `
            <tr>
                <td id="pos-bk">${index + 1}</td>
                <td>${playerRank.name}</td>
                <td id="score-bk">${playerRank.score}</td>
            </tr>`
            
            table.innerHTML += row;

        })

        const button = document.querySelector("#button")
        button.addEventListener("click", () => callback())
    }

    renderThanksEnd(playerName){
        const thanksHTML = `
        <div class="container">
            <img id="img-logo" src="https://ik.imagekit.io/lvh0tltbeph/SofkaU/logo-sofkau_1Fn3uH-1S.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645658493330" alt="Sofka logo">
            <h1>Thanks for participating</h1> 
            <h2 id="player">${playerName}</h2>
        </div>`

        const thanks = document.querySelector("#root")
        thanks.innerHTML = thanksHTML;
    }

}