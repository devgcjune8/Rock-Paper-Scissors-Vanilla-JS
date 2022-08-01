let playerScore = 0;
let cpuScore = 0;

const playerScore_span = document.querySelector('#player-score');
const cpuScore_span = document.querySelector('#cpu-score');
const scoreBoard_div = document.querySelector('.score-board');

const result_p =document.querySelector('#results');

const rock_div = document.querySelector('#r');
const paper_div = document.querySelector('#p');
const scissors_div = document.querySelector('#s');

function toWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
}

function getCpuChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

    function win(playerChoice, cpuChoice) {
        playerScore++;
        playerScore_span.innerHTML = playerScore;
        cpuScore_span.innerHTML = cpuScore;
        let toSmallWordYou = "(You)".fontsize(3);
        let toSmallWordCPU = "(CPU)".fontsize(3);
        let playerChoice_div = document.getElementById(playerChoice);
        result_p.innerHTML = `${toWord(playerChoice)}${toSmallWordYou} beats ${toWord(cpuChoice)}${toSmallWordCPU}. You won!!!"`;
        playerChoice_div.classList.add('win-glow');
        setTimeout(function() { playerChoice_div.classList.remove('win-glow')}, 500);
    }


    function lose(playerChoice, cpuChoice) {
        cpuScore++;
        playerScore_span.innerHTML = playerScore;
        cpuScore_span.innerHTML = cpuScore;
        let toSmallWordYou = "(You)".fontsize(3);
        let toSmallWordCPU = "(CPU)".fontsize(3);
        let playerChoice_div = document.getElementById(playerChoice);
        result_p.innerHTML = `${toWord(playerChoice)}${toSmallWordYou} loses ${toWord(cpuChoice)}${toSmallWordCPU}. You lost!!!"`
        playerChoice_div.classList.add('lose-glow');
        setTimeout(function() { playerChoice_div.classList.remove('lose-glow')}, 500);
    }

    function draw(playerChoice, cpuChoice) {
        let toSmallWordYou = "(You)".fontsize(3);
        let toSmallWordCPU = "(CPU)".fontsize(3);
        let playerChoice_div = document.getElementById(playerChoice);
        result_p.innerHTML = `${toWord(playerChoice)}${toSmallWordYou} equals ${toWord(cpuChoice)}${toSmallWordCPU}. It's a tie!!!"`
        playerChoice_div.classList.add('draw-glow');
        setTimeout(function() { playerChoice_div.classList.remove('draw-glow')}, 500);
    }


function game(playerChoice) {
   const cpuChoice = getCpuChoice();
   switch (playerChoice + cpuChoice) {
    case "rs":
    case "pr":
    case "sp":
        win(playerChoice, cpuChoice)
    break;
    case "sr":
    case "ps":
    case "rp":
        lose(playerChoice, cpuChoice)
    break;
    case "ss":
    case "pp":
    case "rr":
        draw(playerChoice, cpuChoice)
    break;
}
}

function main() {
    rock_div.addEventListener('click', function() {
    game("r");
    } );
    paper_div.addEventListener('click', function() {
        game("p")
    } );
    scissors_div.addEventListener('click', function() {
        game("s")
    } );

}

main()