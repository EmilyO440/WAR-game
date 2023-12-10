let player1Card, player2Card;

function play() {
    player1Card = Math.floor(Math.random() * 13) + 1;
    player2Card = Math.floor(Math.random() * 13) + 1;

    document.getElementById('player1').style.backgroundImage = `url('images/card${player1Card}.png')`;
    document.getElementById('player2').style.backgroundImage = `url('images/card${player2Card}.png')`;

    determineWinner();
}

function determineWinner() {
    let result = '';

    if (player1Card > player2Card) {
        result = 'Player 1 Wins!';
    } else if (player2Card > player1Card) {
        result = 'Player 2 Wins!';
    } else {
        result = 'It\'s a Tie!';
    }

    document.getElementById('result').innerText = result;
}

