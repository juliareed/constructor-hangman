// run "node main.js" to start game
var Word = require('./word.js');
var prompt = require('prompt');

// log directions
console.log("🤗 Welcome to Baseball Hangman! 🤔");
console.log("⚾️ Guess a lowercase letter to determine the random MLB team ⚾️");
console.log("-----------------------------");
// run prompt
prompt.start();

// game object
game = {
 	wordBank: ["redsox", "whitesox", "indians", "tigers", "astros", "royals", "angels", "twins", "yankees", "athletics", "mariners", "rays", "rangers", "bluejays", "nationals", "cardinals", "giants", "padres", "pirates", "phillies", "mets", "brewers", "marlins", "dodgers", "rockies", "reds", "cubs", "braves", "diamondbacks"],
 	wordsWon: 0,
 	guessesRemaining: 10,
 	currentWord: null,
 	
 	// resets game, 
 	startGame: function (wrd) {
 		this.resetGuesses();
 		this.currentWord = new Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);
 		this.currentWord.getLet();
 		this.promptUser();
 	},

 	// resets guess count to 10
 	resetGuesses: function(){
 		this.guessesRemaining = 10;
 	},

 	// checks guessed letters, responds with console.log message
 	promptUser: function(){
 		var self = this;
 		prompt.get(['guessLetter'], function(err, result){
 			console.log("You guessed: " + result.guessLetter);
 			var manyGuessed = self.currentWord.checkLetter(result.guessLetter);

 			if(manyGuessed ==0) {
 				console.log("NAH, TRY AGAIN.");
 				self.guessesRemaining--;
 				
 			} else {
 				console.log("YASSSS, QWEEN!");
 					if(self.currentWord.findWord()){
 						console.log("YOU WON!");
 						console.log("-------------------");
 						return;
 					}
 			}
 			// notifies guesses left
 			console.log("Guesses left: " + self.guessesRemaining);
 			console.log("-------------------");
 			if((self.guessesRemaining > 0) && (self.currentWord.found == false)){
 				self.promptUser();
 			}
 			else if(self.guessesRemaining ==0){
 				console.log("Game over, fam. The correct team is ", self.currentWord.target);
 			} else {
 				console.log(self.currentWord.wordRender());
 			}
 		});

 	}


};
// runs start game function
game.startGame();