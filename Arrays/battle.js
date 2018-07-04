var randomPos = Math.floor(Math.random() * 5);
var pos1 = randomPos;
var pos2 = pos1 + 1;
var pos3 = pos2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
    guess = prompt('Ready to fire! enter a number 0-6 :');

    if (guess < 0 || guess > 6) {
        alert('Please enter a proper number!');
    }
        else {
        guesses = guesses + 1;
    }
    if (guess == pos1 || guess == pos2 || guess == pos3) {
        hits = hits + 1;
        alert('HIT!');
    }
        else {
        alert('MISS!');
    }
    if (hits == 3) {
        isSunk = true;
        alert('Ship is no more!');
    }
}
    var stats = 'You have destroyed the ship within' + guesses + ', with accuracy of' + (3/guesses);
    alert(stats);

