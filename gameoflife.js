// gameoflife.js

//console game of life conway's simulator.

// how to build the grid... array of objects? 2d objects? example grid[5][7]... 

let gridsize = 4;

let grid = [];

function randombool() {
    if (Math.random() <= 0.5) {
        return true
    } else {
        return false
    }
};

let Cell = function(x, y) {
    this.x = x;
    this.y = y;
    this.alive = true;
}

//generate grid
for (let i = 0; i < gridsize; i++) {
    for (let j = 0; j < gridsize; j++) {
        let cell = new Cell
        cell.x = j;
        cell.y = i;
        cell.alive = randombool();
        grid.push(cell);
    }
}

function buildRow(col) {
    let row = "";
    for (let i = 0; i < gridsize; i++) {
        // if (grid[i].x == )
    }
}

console.log(grid)

let test = grid.find(function () {
	return this.x ==
});

console.log(test)