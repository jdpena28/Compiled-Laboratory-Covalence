const cells = Array.from(document.getElementsByClassName('cell'))
let textWinner = document.querySelector('#text-winner')
let player = 'X' 
let thereIsAWinner = false

const cellClicked = () => {
    cells.forEach(cell => {
        cell.addEventListener('click',onGame)
    });
}

function onGame (index) {
    indices = parseInt(index.target.id)
    if (thereIsAWinner===false && cells[indices].textContent==='') {
        if (player === 'X') {
            index.target.textContent = player;
            checkBoard(player)
            player = 'O'
        }
        else if (player==='O') {
            index.target.textContent = player;
            checkBoard(player)
            player = 'X'
        }
    }
}
function checkBoard (whosPlayer) {
    if(cells[0].textContent===whosPlayer) {
        if(cells[1].textContent===whosPlayer && cells[2].textContent===whosPlayer)
        {
            textWinner.textContent = `${whosPlayer} is the Winner`
        }
    }
    
}

cellClicked()