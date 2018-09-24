// gameoflife.js

//console game of life conway's simulator.

// how to build the grid... array of objects? 2d objects? example grid[5][7]... 

let gridsize = 30;

let cols = [];

let Cell = function(x, y) {
	this.x = x;
	this.y = y;
	return this;
}

for (let i = 0; i < gridsize; i++) {
	let cell = new Cell
	cell.x = i;
	cols.push(cell);
}


function draw() {

}

console.log(cols)