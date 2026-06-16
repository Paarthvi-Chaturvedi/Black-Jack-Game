let isAlive = false
let cards = []
const cardsEl = document.getElementById("cards-el")
const scoreEl = document.getElementById("score-el")
const cardBtn = document.getElementById("card-btn")
const messageEl = document.getElementById("message-el")
const startGame = document.getElementById("start-game")
let score = 0
hasBlackJack = false
let message = ""


startGame.addEventListener("click",function(){
    isAlive = true
    let firstCard = randomCard()
    let secondCard = randomCard()
    cards = [firstCard, secondCard]
    score = firstCard + secondCard
    renderGame()
})


function randomCard(){
    let randomNumber = Math.floor(Math.random()*13)+1
    if(randomNumber > 10){
        return 10
    }else if(randomNumber === 11){
        return 1
    }else{
        return randomNumber
    }
} 


function renderGame(){
    cardsEl.textContent = `Cards: `
    scoreEl.textContent = `Score: ${score}`
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    if(score === 21){
        message = "congrats. you've got black jack!!"
        hasBlackJack = true
    }else if( score > 21){
        message = "Sorry, you're out of the game"
        isAlive = false
    }else{
        message = "Do you want to draw another card?"
    }
    messageEl.textContent = `${message}`
}

cardBtn.addEventListener("click", function(){
    if(isAlive === true && hasBlackJack === false){
        let card = randomCard()
        score += card
        cards.push(card)
        renderGame()
    }
})
