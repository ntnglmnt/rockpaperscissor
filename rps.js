
computerItems = ['rock', 'paper', 'scissor'];

function pick(arr) {
   return arr[Math.floor(Math.random()*3)];
}


function round() {
    
    let playerChoice = prompt('Choose wisely');   
    let computerChoice = pick(computerItems);
     

    if (playerChoice === 'rock' && computerChoice === 'rock' || playerChoice === 'paper' && computerChoice === 'paper' || playerChoice === 'scissor' && computerChoice === 'scissor') {
        console.log (`Player chose : ${playerChoice}`,`Computer chose : ${computerChoice}`,'What are the chances huh') 
        return 'Tie'
    }else if (playerChoice === 'rock' && computerChoice === 'scissor' || playerChoice === 'paper' && computerChoice === 'rock' || playerChoice === 'scissor' && computerChoice === 'paper') {
        console.log(`Player chose : ${playerChoice}`,`Computer chose : ${computerChoice}`,'Explicit choice') 
        return 'Player'
    }else if (playerChoice === 'rock' && computerChoice === 'paper' || playerChoice === 'paper' && computerChoice === 'scissor' || playerChoice === 'scissor' && computerChoice === 'rock') {
        console.log(`Player chose : ${playerChoice}`,`Computer chose : ${computerChoice}`,'Beaten by a computer huh')
        return 'Computer'
    }else console.log('Make a choice out of rock, paper or scissor')
        return 'error'
    
}


function game() {

    let playerwon = 0; 
    let computerwon = 0; 

    for (let i=0; i < 5; i++) {
        let result = round()
        if (result === 'Player') {
        playerwon++
        } else if (result === 'Computer') {
        computerwon++
        }    
    }
    if (playerwon > computerwon) {
        console.log('Player wins this game')
    } else if (playerwon < computerwon) {
        console.log('Computer wins this game')
    } else if (playerwon === computerwon) {
        console.log('You both suck')
    }
        
}





game()

