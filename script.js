class Card {
    constructor(rank, suit) {
        this.rank = rank;
        this.suit = suit;
    }
}

class Deck {
    constructor() {
        this.cards = [];
        this.initializeDeck();
        this.shuffle();
    }

    initializeDeck() {
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];

        for (const suit of suits) {
            for (const rank of ranks) {
                this.cards.push(new Card(rank, suit));
            }
        }
    }

    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    deal() {
        return this.cards.pop();
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
        this.score = 0;
    }

    playCard() {
        return this.hand.pop();
    }
}

class WarGame {
    constructor() {
        this.deck = new Deck();
        this.player1 = new Player('Player 1');
        this.player2 = new Player('Player 2');
    }

    dealHands() {
        for (let i = 0; i < 26; i++) {
            this.player1.hand.push(this.deck.deal());
            this.player2.hand.push(this.deck.deal());
        }
    }

    playRound() {
        const card1 = this.player1.playCard();
        const card2 = this.player2.playCard();

        if (card1.rank > card2.rank) {
            this.player1.score++;
        } else if (card2.rank > card1.rank) {
            this.player2.score++;
        }

        // Display the played cards (optional)

        // Continue playing rounds
    }

    playGame() {
        this.dealHands();

        for (let i = 0; i < 26; i++) {
            this.playRound();
        }

        this.displayResults();
    }

    displayResults() {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `
            <p>${this.player1.name} Score: ${this.player1.score}</p>
            <p>${this.player2.name} Score: ${this.player2.score}</p>
            <p>${this.getWinner()}</p>
        `;
    }

    getWinner() {
        if (this.player1.score > this.player2.score) {
            return `${this.player1.name} wins!`;
        } else if (this.player2.score > this.player1.score) {
            return `${this.player2.name} wins!`;
        } else {
            return 'It\'s a tie!';
        }
    }
}

function startGame() {
    const warGame = new WarGame();
    warGame.playGame();
    document.getElementById('startButton').disabled = true;
}
