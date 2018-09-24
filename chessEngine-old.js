// chessEngine.js
// [ [ 'N', 'B', '2' ], [ 'Q', 'B', '1' ] ] [ [ 'Q', 'A', '4' ] ] 1

const whites = [
        ['N', 'B', '2'],
        ['Q', 'B', '1']
    ],
    blacks = [
        ['Q', 'A', '4']
    ],
    moves = 1;

const boardLookup = {
    'A': 0,
    'B': 1,
    'C': 2,
    'D': 3,
}

let board = [
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', '']
]

const getFirstValue = function(obj) {
	for (key in obj) {
		return obj[key]
	}
}

const chessEngine = function() {

}

const generateInitialBoard = function(whites, blacks) {
    //push white pieces
    for (let i = 0; i < whites.length; i++) {
        let col = boardLookup[whites[i][1]]
        let row = whites[i][2] - 1
        let piece = whites[i][0]
        board[row][col] = { 'w': piece }
    }
    //push black pieces
    for (let i = 0; i < blacks.length; i++) {
        let col = boardLookup[blacks[i][1]]
        let row = blacks[i][2] - 1
        let piece = blacks[i][0]

        board[row][col] = { 'b': piece }
    }
}

generateInitialBoard(whites, blacks)

const queenMoves = function(board, row, col, color) {
    let newBoards = [],
        queeny = row,
        queenx = col

    //left moves
    // while (queenx > 0) {
    //     let tempBoard = board
    //     tempBoard[queeny].splice(queenx, 1, '')
    //     queenx--
    //     tempBoard[queeny].splice(queenx, 1, { color: 'Q' })
    //     newBoards.push(tempBoard)
    //     // console.log(tempBoard)
    //     tempBoard[queeny].splice(queenx, 1, '')
    // }
    // queeny = row
    // queenx = col

    // //left-down moves
    // while (queenx > 0 && queeny < 3) {
    //     let tempBoard = board
    //     tempBoard[queeny].splice(queenx, 1, '')
    //     queenx--
    //     queeny++
    //     tempBoard[queeny].splice(queenx, 1, { color: 'Q' })
    //     newBoards.push(tempBoard)
    //     // console.log(tempBoard)
    //     tempBoard[queeny].splice(queenx, 1, '')
    // }
    // queeny = row
    // queenx = col

    //move down
    // newBoards = newBoards.concat(move(board, queeny, queenx, 'Q', 'w', 1, 0))
    //move left
    // newBoards = newBoards.concat(move(board, queeny, queenx, 'Q', 'w', 0, -1))

    newBoards = newBoards.concat(move(board, queeny, queenx, 'Q', 'w', 0, -1))
    console.log('results from move function: ', newBoards)


    return newBoards
}

const move = function(board, pieceRow, pieceCol, pieceType, color, changeRow, changeCol) {
	let newBoards = []
    let tempBoard = board
    let moveResult
    
	while (pieceRow <= 3 && pieceRow >= 0 && pieceCol <= 3 && pieceCol >= 0) {
        tempBoard[pieceRow].splice(pieceCol, 1, '')
        pieceRow += changeRow
        pieceCol += changeCol

        console.log('piece row', pieceRow, 'piece col ', pieceCol, 'tempBoard', tempBoard)
        if (pieceRow <= 3 && pieceRow >= 0 && pieceCol <= 3 && pieceCol >= 0) {
        	console.log('test, passes second check for on the board')
	        moveResult = pieceMove(color, pieceType, pieceRow, pieceCol, tempBoard)
	        console.log('test: MoveResult: ', moveResult)
	        if (moveResult == 'win') {
	        	console.log('win')
	        	return 'win'
	        } else if (moveResult == 'stop') {
	        	console.log('new func: stopped')
	        	break
	        } else if (Array.isArray(moveResult)) {
	        	console.log('test: array check passed', moveResult)
	        	newBoards.push(moveResult)
	        	tempBoard = moveResult
	        	console.log('end loop test: newBoards: ', newBoards)
	        }
	    }
    }
    console.log('after loop test, newBoards', newBoards)
    return newBoards
}

const moveLeftDown = function(board, pieceRow, pieceCol, pieceType, color) {
	let newBoards = []
    let tempBoard = board
	while (pieceRow < 3 && pieceCol > 0) {
        tempBoard[pieceRow].splice(pieceCol, 1, '')
        pieceRow++
        pieceCol--

        let moveResult = pieceMove(color, pieceType, pieceRow, pieceCol, tempBoard)
        if (moveResult == 'win') {
        	console.log('win')
        	return 'win'
        } else if (moveResult == 'stop') {
        	console.log('new func: stopped')
        	break
        } else if (Array.isArray(moveResult)) {
        	newBoards.push(moveResult)
        	tempBoard = moveResult
        }
    }
    return newBoards
}

const pieceConflict = function(thisPieceColor, enemyObj) {
    if (thisPieceColor == Object.keys(enemyObj)[0]) {
        return 'stop'
    } else if ( getFirstValue(enemyObj) == 'Q') {
        return 'win'
    } else {
        return 'take'
    }
}

const pieceMove = function(thisColor, thisPiece, targetRow, targetCol, tempBoard) {
    if (tempBoard[targetRow][targetCol] == '') {
        tempBoard[targetRow].splice(targetCol, 1, { [thisColor]: thisPiece })
        return tempBoard
    } else {
        let obj = tempBoard[targetRow][targetCol]
        switch (pieceConflict(thisColor, obj)) {
            case 'win':
                console.log('win', tempBoard)
                return 'win'
            case 'take':
                console.log('take')
                tempBoard[targetRow].splice(targetCol, 1, { [thisColor]: thisPiece })
		        return tempBoard
            case 'stop':
                return 'stop'
        }
    }
    return tempBoard
}

console.log(board)
console.log(queenMoves(board, 0, 1, 'w'))


