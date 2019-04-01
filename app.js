let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score"); 
const compScore_span = document.getElementById("comp-score");
const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");

rock_div.addEventListener('click', () => {
    game('Rock');
})

paper_div.addEventListener('click', () => {
    game('Paper');
})

scissors_div.addEventListener('click', () => {
    game('Scissors');
})

function game(userChoice){
    const choices = ['Rock', 'Paper', 'Scissors'];
    const compChoice = choices[Math.floor(Math.random() * choices.length)];

    switch(userChoice + compChoice){
        case 'RockScissors':
        case 'PaperRock':
        case 'ScissorsPaper':
            win(userChoice, compChoice);
            break;

        case 'RockPaper':
        case 'PaperScissors':
        case 'ScissorsRock':
            loss(userChoice, compChoice);
            break;

        default:
            const userChoice_div = document.getElementById(userChoice);
            result_p.innerHTML = 'You both chose ' + userChoice + '. Draw! 🤷‍♂️😂🤷‍';
            userChoice_div.classList.add('yellow-glow');
            setTimeout(() => { userChoice_div.classList.remove('yellow-glow')}, 500);
            gameOver();
    }
}

function win(userChoice, compChoice){
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = userChoice + ' beats ' + compChoice + '. You win! 👍';
    userChoice_div.classList.add('green-glow'); 
    setTimeout(() => { userChoice_div.classList.remove('green-glow')}, 500); 
    gameOver();
}

function loss(userChoice, compChoice){
    const userChoice_div = document.getElementById(userChoice);
    compScore++;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = compChoice + ' beats ' + userChoice + '. You lose! 👎 ';
    userChoice_div.classList.add('red-glow');
    setTimeout(() => { userChoice_div.classList.remove('red-glow')}, 500);
    gameOver();
}

function gameOver(){
    if(userScore === 3){
        setTimeout(() => {alert('Game Over. You win! Close to restart game.'); location.reload()}, 300)  
    }
    else if(compScore === 3){
        setTimeout(() => {alert('Game Over. You lose! Close to restart game.'); location.reload()}, 300)
    }
    else{
        return;
    }
}



