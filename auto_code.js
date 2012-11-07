var fs = require( "fs" );

var content = fs.readFileSync( "__in.js", "utf8" );
var file = fs.openSync( "__out.js", "a" );
var index = 0;
var length = content.length;

function writeChar() {
	var current_char = content[ index++ ],
		next_char = index < length ? content[ index ] : null,
		sleep = 0;
	fs.writeSync( file, current_char );

	// spacebar is easy to hit, do this quickly
	if (next_char == ' ') {
		sleep = rand( 20, 50 );
	} 
	// sometimes takes a moment to think of the next word
	else if (current_char == ' ') {
		sleep = rand( 100, 200 );
	} 
	// everything else
	else {
		sleep = rand( 20, 200 );
	}

	if ( index < length ) {
		setTimeout( writeChar, sleep );
	} else {
		fs.closeSync( file );
	}
}

function rand(min, max) {
	return parseInt( Math.floor( Math.random() * (max - min + 1)) + min);
}

writeChar();