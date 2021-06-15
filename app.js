const root = document.querySelector('#root')
createGameElements()
let gameCurrent = 'O'
let gameArr = []
let gameState = 0
let gameActive = true
const gameWin = [
 [0,1,2],
 [3,4,5],
 [6,7,8],
 [0,3,6],
 [1,4,7],
 [2,5,8],
 [0,4,8],
 [2,4,6],
]


gameEngine()
function gameEngine(){
 document.querySelectorAll('.game-cell').forEach((cell) => {
   cell.addEventListener('click', (e) => {
     if (e.currentTarget.textContent === '' && gameActive === true) {
       if (gameCurrent === 'X') {
         gameCurrent = 'O'
       } else if (gameCurrent === 'O') {
         gameCurrent = 'X'
       }

       e.currentTarget.textContent = gameCurrent
       gameArr.push(gameCurrent)
       checkWin()
       if (gameState === 1) {
         winAlert(gameCurrent)
         gameActive = false
       }
     }
   })
 })
}
function winAlert(win){
 const gameContainer = document.querySelector('.game-container')
 const h1 = document.createElement('h1')
 h1.textContent = `winner: ${win}`
 gameContainer.appendChild(h1)
}

function restartGame(){
 document.querySelector('.game-container').remove() 
 createGameElements()
 gameCurrent = 'O'
 gameArr = []
 gameState = 0
 gameActive = true
 gameEngine()
}
function createGameElements(){
 const gameContainer = document.createElement('div')
 gameContainer.classList.add('game-container')
 const gameGrid = document.createElement('div')
 gameGrid.classList.add('game-grid')
 const btn = document.createElement('button')
 btn.textContent = 'restart'
 btn.classList.add('restart-btn')
 btn.addEventListener('click', restartGame)
 for(let i = 0; i < 9; i++){
  const div = document.createElement('div')
  div.classList.add('game-cell')
  gameGrid.appendChild(div)
 }
gameContainer.appendChild(btn)
 gameContainer.appendChild(gameGrid)
 root.appendChild(gameContainer)


}

function checkWin(){

 const ceGrid = document.querySelectorAll('.game-cell')
 gameWin.forEach((e) => {
   for (let i = 0; i < e.length; i++) {
  
     if (
       ceGrid[e[0]].textContent.includes(gameCurrent) &&
       ceGrid[e[1]].textContent.includes(gameCurrent) &&
       ceGrid[e[2]].textContent.includes(gameCurrent)
     ) {
       gameState = 1
     }
     
   }
 })
}

