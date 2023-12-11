let player1Card, player2Card;

function play() {
    player1Card = Math.floor(Math.random() * 52) + 1;
    player2Card = Math.floor(Math.random() * 52) + 1;

    document.getElementById('player1').style.backgroundImage = 'https://th.bing.com/th/id/OIP.3RfLDw5Db6YKzjUwZHijLQHaKX?rs=1&pid=ImgDetMain'
    document.getElementById('player2').style.backgroundImage = 'https://th.bing.com/th/id/OIP.3RfLDw5Db6YKzjUwZHijLQHaKX?rs=1&pid=ImgDetMain'

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


