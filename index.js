const MAX_ROLL = 6;

function rollDice() {
  const player1Roll = Math.floor(Math.random() * MAX_ROLL) + 1;
  const player2Roll = Math.floor(Math.random() * MAX_ROLL) + 1;
  return { player1Roll, player2Roll };
}

function updateUI(player1Roll, player2Roll) {
  const image1 = `images/dice${player1Roll}.png`;
  const image2 = `images/dice${player2Roll}.png`;

  const imgElements = document.querySelectorAll("img");
  imgElements[0].setAttribute("src", image1);
  imgElements[1].setAttribute("src", image2);

  const result = determineWinner(player1Roll, player2Roll);
  document.querySelector("h1").innerHTML = result;
}

function determineWinner(player1Roll, player2Roll) {
  if (player1Roll > player2Roll) {
    return " Player 1 Wins!";
  } else if (player2Roll > player1Roll) {
    return "Player 2 Wins! ";
  } else {
    return "Draw!";
  }
}

const { player1Roll, player2Roll } = rollDice();
updateUI(player1Roll, player2Roll);