//basic caluculator
/*
let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
function add() {
    sum=num1+num2
    document.getElementById("sum-el").textContent =sum
}
function subtract() {
    sum=(document.getElementById("num1-el").textContent - document.getElementById("num2-el").textContent)
     document.getElementById("sum-el").textContent =sum
}
function divide() {
    sum=(document.getElementById("num1-el").textContent / document.getElementById("num2-el").textContent)
     document.getElementById("sum-el").textContent =sum
}
function multiply() {
    sum=(document.getElementById("num1-el").textContent * document.getElementById("num2-el").textContent)
     document.getElementById("sum-el").textContent =sum
}
*/
    
let sum = 0 
let cards = []

let sumEL = document.getElementById("sum-el")
let cardEL = document.getElementById("card-el")


let hasblackjack = false
let isAlvive = true

let messageEL = document.getElementById("message-el")
let message = ""
//object for players and chips
let player ={ 
    name : "sanju",
    chips : 181
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random()*13) +1
    if (randomNumber > 10){
        return 10
    } else if (randomNumber=== 1){
        return 11
    }else {
        return randomNumber
    }
}


 function startGame() {
    isAlvive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard() 
    cards =[firstCard,secondCard]
    sum =firstCard+secondCard 
    renderGame()
 }
function renderGame() {
    cardEL.textContent = "Card : " 
    for(let i = 0 ; i < cards.length ; i++) {
        cardEL.textContent += cards[i]  + " "
    }

    sumEL.textContent = "Sum : " + sum  
if (sum <= 20){
    message = "Do you want to draw a new card?"
}else if (sum === 21){
    message = "wohoo! you've got Blackjack!"
    hasblackjack = true
}else {
    message = "you've out of the game!"
    isAlvive = false
} 

console.log(messageEL.textContent=message) 
}
function newcard() {
    console.log("Drawing a new card from the deck.")
      //only allow the player to get a new card if she IS alive and does NOT have Blackjack
      if(isAlvive===true && hasblackjack===false){
    let card = getRandomCard()
    sum+=card
    //push the card to cards array
    cards.push(card)
    console.log(cards)
    renderGame()
      }
}