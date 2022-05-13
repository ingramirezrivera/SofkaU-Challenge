export class UI {
    constructor(){}

   
    renderStart(callback) {
        const startHTML = `
        <img id="img-logo" src="https://ik.imagekit.io/lvh0tltbeph/SofkaU/logo-sofkau_1Fn3uH-1S.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645658493330" alt="">
        <h1>Welcome to Sofka U Challenge</h1>
        <hr>
        <div class="info-container">
            <p><b>In this challenge you will take a Quiz</b></p>
            <br>
            <p><b>1.</b> The Quiz has 5 rounds with 4 multiple choices.</p>
            <p><b>2.</b> Youn can select only one choice.</p>
            <p><b>3.</b> If your choice is correct pass to the next level, and you win awards for each level.</p>
            <p><b>4.</b> If your choice is incorrect you lose the quiz and the awards.
            <p><b>5.</b> Please click in the button below to start and good Look.
        </div>
        <button id='button' class='button-start'>Start Quiz</button>
        `
        //rendering quizHTML on the <div id="root"></div>
        const startRender = document.querySelector("#root");
        startRender.innerHTML = startHTML;
        //event listener to get action to the next renderQuiz
        const button = document.querySelector("#button")
        button.addEventListener("click", () => callback())
    
    }

    renderQuiz(category, text, choices, callback, questionIndex, totalQuestions, callbackEnd){
        const quizHTML = `
        <div class="container">
            <img id="img-logo" src="https://ik.imagekit.io/lvh0tltbeph/SofkaU/logo-sofkau_1Fn3uH-1S.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645658493330" alt="Sofka logo">
            <div id="quiz">
                <h1>Quiz</h1>
                <hr/>
                <h2 id="category">${category}</h2>
                <hr />
                <h2 id="question">${text}</h2>
                <hr />
                <div id="choices">
                    
                </div>
                <hr/>
                <footer>
                    <div id="round">Round 1 of 5</div>
                    <button id='button-end'>End Quiz</button>
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
        //
        choices.map((choice, index) => {
            const button = document.createElement("button")
            button.innerHTML = choices[index];
            button.id = "button-choice";
            choicesContainer.append(button);
            button.addEventListener("click", () => callback(choices[index]));
          });

    }


}