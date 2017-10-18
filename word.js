// 'word.js' checks user guesses
// list of letters object
var letter = require('./letter.js');

// target word constructor function
function Word(target) {
	this.target = target;
	this.lets = [];
	// a boolean that says if word is guessed or not
	this.found = false;
	// display text function
	this.getLet = function() {
		// loop through letter object array
		for (var i = 0; i < this.target.length; i++) {
			this.lets.push(new letter(this.target[i]));
		}
	};

	// function that gets the current letter
	this.findWord = function() {
		this.found = this.lets.every(function(currentLetter) {
			return currentLetter.appear;
		});
		return this.found;
	};
	// function that checks if the letter is correct
	this.checkLetter = function(guessLet) {
		var toReturn = 0;
		// loops through letter object array
		for (var i = 0; i < this.lets.length; i++) {
			if (this.lets[i].character == guessLet){
				this.lets[i].appear = true;
				toReturn++;
			}
		}
		return toReturn;
	};
	// function that generates the target word string
	this.wordRender = function() {
		var string = '';
		for (var i=0; i < this.lets.length; i++){
			string += this.lets[i].letterRender();
		}
		return string;
	};
}

// exports constructors
module.exports = Word;