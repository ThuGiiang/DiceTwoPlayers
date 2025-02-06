function rollDice(){
    let randomNumber1 = Math.floor(Math.random()*6) + 1;
    let randomImage1 = "./images/dice" + randomNumber1 + ".png";

    let randomNumber2 = Math.floor(Math.random()*6) + 1;
    let randomImage2 = "./images/dice" + randomNumber2 + ".png";

    document.querySelector("#dicePlayer1").setAttribute("src", randomImage1);

    document.querySelector("#dicePlayer2").setAttribute("src", randomImage2);

    if (randomNumber1 === randomNumber2) {
        document.querySelector("#title").textContent = "Draw!";
    } else if (randomNumber1 > randomNumber2) {
        document.querySelector("#title").textContent = "Player 1 Wins!";
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("#title").textContent = "Player 2 Wins!";
    }
}

const delay = ms => new Promise(res => setTimeout(res, ms));

const yourFunction = async () => {
    await delay(5000);
    rollDice();
  };
  