// run "node main.js" to start game
var Word = require('./word.js');
var prompt = require('prompt');

console.log("🤗 Welcome to Baseball Hangman! 🤔");
console.log("⚾️ Guess a letter to determine the random MLB team ⚾️");
console.log("-----------------------------");
prompt.start();


game = {
 	wordBank: ["REDSOX", "WHITESOX", "INDIANS", "TIGERS", "ASTROS", "ROYALS", "ANGELS", "TWINS", "YANKEES", "ATHLETICS", "MARINERS", "RAYS", "RANGERS", "BLUEJAYS", "NATIONALS", "CARDINALS", "GIANTS", "PADRES", "PIRATES", "PHILLIES", "METS", "BREWERS", "MARLINS", "DODGERS", "ROCKIES", "REDS", "CUBS", "BRAVES", "DIAMONDBACKS"],
 	wordsWon: 0,
 	guessesRemaining: 10,
 	currentWord: null,
 	
 	startGame: function (wrd) {
 		this.resetGuesses();
 		this.currentWord = new Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);
 		this.currentWord.getLet();
 		this.promptUser();
 	},

 	resetGuesses: function(){
 		this.guessesRemaining = 10;
 	},

 	promptUser: function(){
 		var self = this;
 		prompt.get(['guessLetter'], function(err, result){
 			console.log("You guessed: " + result.guessLetter);
 			var manyGuessed = self.currentWord.checkLetter(result.guessLetter);

 			if(manyGuessed ==0) {
 				console.log("nah");
 				self.guessesRemaining--;
 				
 			} else {
 				console.log("YASSSS");
 					if(self.currentWord.findWord()){
 						console.log("Crushed it!");
 						console.log("-------------------");
 						return;
 					}
 			}

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

game.startGame();