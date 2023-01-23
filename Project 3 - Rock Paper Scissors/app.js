// BUGS TO FIX
// freeze game when won

// variables
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const playButton = document.getElementById('play-game');
const button = document.querySelectorAll('.choice');
const output1 = document.getElementById('output-1');
const output2 = document.getElementById('output-2');
const output3 = document.getElementById('output-3');
const playerOutput = document.getElementById('player-output');
const computerOutput = document.getElementById('computer-output');
const winnerOutput = document.getElementById('winner-output');
const playAgainButton = document.getElementById('play-again')

// game variables
let playerChoice = 'rock';
let playerScore = 0;
let computerScore = 0;

// event listeners
rock.addEventListener('click', () =>
{
    turnWhite();
    rock.style.backgroundColor = 'orange';
    playerChoice = 'rock';
    console.log(playerChoice);

})
paper.addEventListener('click', () =>
{
    turnWhite();
    paper.style.backgroundColor = 'orange';
    playerChoice = 'paper';
    console.log(playerChoice);

})
scissors.addEventListener('click', () =>
{
    turnWhite();
    scissors.style.backgroundColor = 'orange';
    playerChoice = 'scissors';
    console.log(playerChoice);
})

playButton.addEventListener('click', () =>
{
    playGame(playerChoice);
})

playAgainButton.addEventListener('click', () =>
{
    playerScore = 0;
    computerScore = 0;
    winnerOutput.innerText = '';
    playerOutput.innerText = `${playerScore}`;
    computerOutput.innerText = `${computerScore}`;
    playButton.disabled = false;
    playAgainButton.style.display = 'none';
    playButton.style.display = 'initial';
})

const playGame = (playerChoice) =>
{
    output1.innerText = `The player chose ${playerChoice}`;
    let computer = computerChoice();
    output2.innerText = `The computer chose ${computer}`;
    output3.innerText = `${rpsGame(playerChoice, computer)}`;
    playerOutput.innerText = `${playerScore}`;
    computerOutput.innerText = `${computerScore}`;
    if (playerScore === 3)
    {
        winnerOutput.innerText = 'Player Won!';
        playAgainButton.style.display = 'block';
        playButton.style.display = 'none';

        
    }
    else if (computerScore === 3)
    {
        winnerOutput.innerText = 'Computer Won!';
        playAgainButton.style.display = 'block';
        playButton.style.display = 'none';
    }
}
output2.innerText = `Goodbye`;
output3.innerText = `Something`;

// After 3 points : reset game - ... won


// Helper functions
const turnWhite = () =>
{
    for (let i = 0; i < button.length; i++)
    {
        button[i].style.backgroundColor = 'white'
    }
}

const computerChoice = () =>
{
    let choices = ['rock', 'paper', 'scissors'];
    let randNum = Math.floor(Math.random()*3)
    return choices[randNum];
}

const rpsGame = (player, computer) =>
{
    if (player === computer)
    {
        return 'The game is a tie';
    }
    else if (player === 'paper' && computer === 'rock' || player === 'scissors' && computer === 'paper' || player === 'rock' && computer === 'scissors')
    {
        playerScore++;
        return 'The player won';
    }
    else if (player === 'rock' && computer === 'paper' || player === 'paper' && computer === 'scissors' || player === 'scissors' && computer === 'rock')
    {
        computerScore++;
        return 'The computer won';
    }
}