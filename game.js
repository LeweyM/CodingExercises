var framecount = 0;

var score = 0;
var gameOver = false;
var scale = 20;
var xpos;
var ypos;
var fxpos;
var fypos;
var tempfxpos
var tempfypos
var keypressed = 0;
var tailx = [];
var taily = [];
var prevx;
var prevy;
var died = 0;
var highscore = 0;


function eat() {
	score += 10;
	function newTempFpos() {
		tempfxpos = Math.floor(Math.random()*(scale - 2)+1);
		tempfypos = Math.floor(Math.random()*(scale - 2)+1);
		for (let i = 0; i < tailx.length; i++) {
			if (tailx[i] == tempfxpos && taily[i] == tempfypos) {
				return newTempFpos()
			}
			else {
				fxpos = tempfxpos;
				fypos = tempfypos;
				return
			}
		}
	}
	newTempFpos();
}


function init() {
	xpos = 10;
	ypos = 10;
	fxpos = Math.floor(Math.random()*(scale - 2)+1);
	fypos = Math.floor(Math.random()*(scale - 2)+1);
	score = 0;
	tailx = [];
	taily = [];
	keypressed = 0;

	gameOver = false;


	var game = setInterval(function() {
		draw();
		input();
		logic();


		// //testing info
		// framecount++;
		// console.log("framecount: " + framecount + " keypressed: " + keypressed)
		// console.log("xpos: " + xpos + " ypos: " + ypos)
		// console.log("fxpos: " + fxpos + " fypos: " + fypos)
		// console.log("tailx: " + tailx + " taily: " + taily)
		// console.log("gameOver: " + gameOver + " score: " + score)


		//game over
		if (gameOver == true ) {
			clearInterval(game);
			if (score > highscore) {
				highscore = score;
			}
			died++;
			init();
		} 
	}, 1000/10); 

}

function draw() {

	//clear console
  	process.stdout.write('\033c');

  	var print = false;
	//draw the screen
	// i = y axis, j = x axis

	for (i = 0; i < scale; i++) {

		for (j = 0; j < scale; j++) {

			print = false;

			if (i == 0) {
				process.stdout.write("# ")
			}

			else if (i == scale - 1) {
				process.stdout.write("# ")
			}

			else if (j == 0) {
				process.stdout.write("# ")
			}

			else if (j == scale - 1) {
				process.stdout.write("# ")

			}
			else {

				if (i == ypos && j == xpos) {
					process.stdout.write("0 ")
					print = true;
				}
				else if (i == fypos && j == fxpos) {
					process.stdout.write("F ")
					print = true;
				}
				for (k=0;k<tailx.length;k++) {
					if (tailx[k] == j && taily[k] == i) {
						process.stdout.write("o ")
						print = true;
						break;
					}
				}

				if (print == false) {
					process.stdout.write("  ")					
				}		
							
			}


		}
		process.stdout.write('\n')


	}

	console.log("score:     " + score + "     died: " + died)
	if (score > highscore) {
		console.log("highscore: " + score)
	}
	else {
		console.log("highscore: " + highscore)
	}
}


function input() {

	var stdin = process.stdin;
	stdin.setRawMode(true);
	stdin.resume();
	stdin.setEncoding('utf8');

	stdin.on('data', function(key){
	    if (key == '\u001B\u005B\u0041') {
	        //process.stdout.write('up');
	        if (keypressed != 2) {
		        keypressed = 4;      	
	        } 
	    }
	    if (key == '\u001B\u005B\u0043') {
	        //process.stdout.write('right');
	        if (keypressed != 1) {
		        keypressed = 3;      	
	        } 
	    }
	    if (key == '\u001B\u005B\u0042') {
	        //process.stdout.write('down');
	        if (keypressed != 4) {
		        keypressed = 2;      	
	        } 
	    }
	    if (key == '\u001B\u005B\u0044') {
	        //process.stdout.write('left');
	        if (keypressed != 3) {
		        keypressed = 1;      	
	        } 
	    }

	    if (key == '\u0003') { process.exit(); }    // ctrl-c
	});


}



function logic() {

	prevx = xpos;
	prevy = ypos;

	switch (keypressed) {
		case 1:
			xpos--;
			break;
		case 2:
			ypos++;
			break;
		case 3:
			xpos++;
			break;
		case 4:
			ypos--;
			break;
	}

	if ( xpos < 1 || xpos >= scale - 1) {
		gameOver = true;
	}
	if ( ypos < 1 || ypos >= scale - 1 ) {
		gameOver = true;
	}

	if ( xpos == fxpos && ypos == fypos) {
		eat();
		tailx.push(prevx);
		taily.push(prevy);
	}

	//tail shrink and grow
	tailx.push(prevx);
	taily.push(prevy);
	tailx.shift();
	taily.shift();

	//

	for (i=0; i < tailx.length; i++) {
		if (tailx[i] == xpos && taily[i] == ypos) {
			gameOver = true;
		}
	}

}

//run time

init();



	