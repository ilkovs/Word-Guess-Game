// Array of words
var word = ['programming', 'Javascript', 'Server', 'Rookie', 'Practice', 'Gamer', 'Surprise','University'];

// Choose random word from the ones above
var random = Math.floor(Math.random() * word.length);
var theChosenWord = word[random];
var underScore = [];

// Create underscores
var generateUnderscore = function() {
    for ( var i = 0; i < theChosenWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}

// Get what the user is guessing
document.addEventListener('keypress', function(event) {
    var keycode = event.keyCode;
    var keyword = String.fromCharCode(keycode);
    console.log(keyword);
});
    

// As the user guesses the correct letter, reveal it


// Used Letters



// Check if the guess is right




// Count the WIN



// 
