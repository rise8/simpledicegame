let button = document.querySelector("button");

button.addEventListener("click", () => {
    //CREATE RANDOM NUMBER
    let randomNumber = () => Math.floor(Math.random() * (7 - 1) + 1);
    let number1 = randomNumber();
    let number2 = randomNumber();
    let head = document.querySelector("#head");
    let images = document.querySelectorAll("img");

    //ASSIGN # TO DICE 1
    let dice1 = images[0].setAttribute("src", "images/dice" + number1 + ".png");

    //ASSIGN # TO DICE 2
    let dice2 = images[1].setAttribute("src", "images/dice" + number2 + ".png");

    //LOGIC TO FIND WINNER
    if (number1 > number2) {
        // head.innerHTML = '<i class="fa fa-angellist"> <span class="win">Player 1 Wins!</span></i>';
        head.innerHTML = '<span class="win">&#129313 Player 1 Wins!</span></i>';
    } else if (number1 < number2) {
        // head.innerHTML = '<i class="fa fa-angellist"> <span class="win">Player 2 Wins!</span></i>';
        head.innerHTML = '<span class="win">Player 2 Wins! &#129313</span></i>';
    } else {
        // head.innerHTML = '<i class="fa fa-angellist"> <span class="win">DRAW!</span></i>';
        head.innerHTML = '<span class="win">&#128539 DRAW &#128539</span></i>';
    }
});















