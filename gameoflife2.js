//gameoflife2.js

let gameSize = 200

function randombool() {
    if (Math.random() <= 0.5) {
        return 1
    } else {
        return 0
    }
};

function make2dArray(size) {
    let arr = new Array(size);
    for (let i = 0; i < size; i++) {
        arr[i] = new Array(size);
        for (let j = 0; j < arr[i].length; j++) {
            arr[i][j] = randombool();
        }
    }
    return arr;
}

let grid = make2dArray(gameSize);

function draw(array) {
    for (let i = 0; i < array.length; i++) {
        let row = ""
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] == 1) {
                row += "O";
            } else {
                row += " ";
            }
        }
        console.log(row)
    }
}

function calculateNewGrid(oldgrid) {
    //if alive && has <2 neighbours, cell dies
    //if alive && has >3 neighbours, cell dies
    //if dead && has 3, cell comes to life

    let newgrid = make2dArray(oldgrid.length);

    for (let i = 0; i < oldgrid.length; i++) {
        for (let j = 0; j < oldgrid[i].length; j++) {
            let neighbours = countNeighbours(j, i);
            cellChange(neighbours, j, i);
        }
    }

    function countNeighbours(col, row) {
        let sum = 0;
        for (i = -1; i < 2; i++) {
        	for (j = -1; j < 2; j++) {
        		if (oldgrid[(col + i + gameSize) % gameSize][(row + j + gameSize) % gameSize] == 1) {
        			sum += 1;
        		}
        	}
        }
        sum -= oldgrid[col][row]
        return sum;
    }

    function cellChange(neighbourCount, col, row) {
        let cell = oldgrid[col][row]
        if (cell == 1 && neighbourCount < 2) {
            newgrid[col][row] = 0;
        } else if (cell == 1 && neighbourCount > 3) {
            newgrid[col][row] = 0;
        } else if (cell == 0 && neighbourCount == 3) {
            newgrid[col][row] = 1;
        } else {
            newgrid[col][row] = oldgrid[col][row];
        }
    }

    return newgrid;

}

let gameGrid = grid;
var game = setInterval(function() {
    process.stdout.write('\033c');
    draw(gameGrid);
    newGrid = calculateNewGrid(gameGrid);
    gameGrid = newGrid;
}, 1000 / 30);