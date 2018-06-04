// Press any key to start


// Arrays of words and letters
var word = ['programming', 'Javascript', 'Server', 'Rookie', 'Practice', 'Gamer', 'Surprise','University'];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Create alphabet list

var buttons = function() {
    myButtons = document.getElementById("buttons");
    letters = document.createElement('ul');

    for ( var i = 0; i < alphabet.length; i++) {
        letters.id = 'alphabet';
        list = document.createElement('li');
        list.id = 'letters';
        list.innerHTML = alphabet[i];
        myButtons.appendChild("letters");
        letters.appendChild(list);
    }
}

// Choose random word from the ones above
var random = Math.floor(Math.random() * word.length);
var theChosenWord = word[random];
var underScore = [];

// Create underscores based on the length of the random word
var generateUnderscore = function() {
    for ( var i = 0; i < theChosenWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}


// Get what the user is guessing and remove it from the alphabet
document.addEventListener('keypress', function(event) {
    var keyword = String.fromCharCode(event.keyCode);

})


// Number of remaining tries


// Count the WIN

