function diceSelectLeft() {
    var randomNumber1 = Math.floor(Math.random() * 6 + 1);
    var randomDice = "dice" + randomNumber1 + ".png";
    document.querySelector(".img1").setAttribute("src", "./images/" + randomDice);
}

function diceSelectRight() {
    var randomNumber1 = Math.floor(Math.random() * 6 + 1 );
    var randomDice = "dice" + randomNumber1 + ".png";
    document.querySelector(".img2").setAttribute("src", "./images/" + randomDice);
}

function winTitle() {    
    if (document.querySelector(".img1").getAttribute("src")[13] === document.querySelector(".img2").getAttribute("src")[13]) {
        document.querySelector("h1").innerText = "It's a tie!";
    } else if (document.querySelector(".img1").getAttribute("src")[13] > document.querySelector(".img2").getAttribute("src")[13]) {
        document.querySelector("h1").innerText = "🚩 Player 1 Wins!"; 
    } else {
        document.querySelector("h1").innerText = "Player 2 Wins! 🚩";
    }
}

function refreshPage() {
    diceSelectLeft();
    diceSelectRight();
    winTitle(); 
}
