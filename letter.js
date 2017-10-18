// 'letter.js' controls whether or not a letter appears as a "_" or as itself on-screen
// pass in latter into function

var letter = function(let){
	this.character = let;
	this.appear = false;
	this.letterRender = function(){
		return !(this.appear) ? "_" : this.character;
	};
};

// export the letter constructor
module.exports = letter;