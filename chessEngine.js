// chessEngine2.js

// [ [ 'N', 'B', '2' ], [ 'Q', 'B', '1' ] ] [ [ 'Q', 'A', '4' ] ] 1

const chessEngine = {}

chessEngine.generateInitialBoard = function(whites, blacks) {
	const boardLookup = {
	    'A': 0,
	    'B': 1,
	    'C': 2,
	    'D': 3,
	}
	let board = Array(16);
	whites.forEach(piece => {
		let col = boardLookup[piece[1]]
		let row = (piece[2] - 1) * 4
		board[col + row] = "w" + piece[0]
	})
	blacks.forEach(piece => {
		let col = boardLookup[piece[1]]
		let row = (piece[2] - 1) * 4
		board[col + row] = "b" + piece[0]
	})
	return board
}

chessEngine.movePiece = function(initialPos, newPos, enemyColor, board, pieceType, pieceColor, orientation) {
	let piece = pieceColor + pieceType;
	let tempBoard;

	//LOGIC for on board / off board / take piece / win... will return an array for a valid move.
	if (newPos >= 0 && newPos < 16 && chessEngine.isOnBoard(initialPos, orientation, newPos)) { 
		if (board[newPos]) {
			// console.log('another piece!')
			if (board[newPos][0] == enemyColor) {
				if (board[newPos][1] == 'Q') {
					return 'win'
				} else {
					//take!
					tempBoard = board.slice()
					tempBoard.splice(initialPos, 1, null)
					tempBoard.splice(newPos, 1, piece)	
				}
			} else {
				//move invalid, stop moving
				return 'stop'
			}
		} else {
			// make new board and add to array
			tempBoard = board.slice()
			tempBoard.splice(initialPos, 1, null)
			tempBoard.splice(newPos, 1, piece)
		}
		return tempBoard;		
	} else {
		return 'stop'
	} 
}	

chessEngine.queenMovements = {
	'up'		: 4,
	'upright'	: 5,
	'right'		: 1,
	'downright'	: -3,
	'down'		: -4,
	'downleft'	: -5,
	'left'		: -1,
	'upleft'	: 3,
}

chessEngine.bishopMovements = {
	'upright'	: 5,
	'downright'	: -3,
	'downleft'	: -5,
	'upleft'	: 3,
}

chessEngine.knightMovements = {
	'upLeft'	: 7,
	'upRight'	: 9,
	'rightUp'	: 6,
	'rightDown'	: -2,
	'downright'	: -7,
	'downleft'	: -9,
	'leftDown'	: -6,
	'leftUp'	: 2,
}

chessEngine.rookMovements = {
	'up'		: 4,
	'right'		: 1,
	'down'		: -4,
	'left'		: -1,
}

chessEngine.getPieceMoves = function(board, pos, pieceColor, enemyColor, pieceType) {

	let pieceMovements = {}
	if (pieceType == 'Q') {pieceMovements = chessEngine.queenMovements}
	else if (pieceType == 'B') {pieceMovements = chessEngine.bishopMovements}
	else if (pieceType == 'R') {pieceMovements = chessEngine.rookMovements}
	else if (pieceType == 'N') {pieceMovements = chessEngine.knightMovements}

	const collection = [];
	let newPos;
	let nextMove;
	for (key in pieceMovements) {
		let dir = pieceMovements[key]
		let orientation = chessEngine.getLeftOrRight(dir)
		let i = 0;
		//while loop incrementing the pos by direction, 
		//adds the returned arrays to a collection
		//untill
		//--> returns 'stop' or 'win'

		nextMove = chessEngine.movePiece(pos, pos + dir, enemyColor, board, pieceType, pieceColor, orientation);
		while (Array.isArray(nextMove)) {
			i++
			nextMove = chessEngine.movePiece(pos, pos + (dir * i), enemyColor, board, pieceType, pieceColor, orientation)
			if (Array.isArray(nextMove)) {
				collection.push(nextMove);
			}
		}
		if (nextMove == 'stop') {
			continue
		} else if (nextMove == 'win') {
			return 'win'
		}
	}
	return collection
}

chessEngine.getNewBoards = function(board, yourColor, enemyColor) {
	let newBoards = []
	for (let i = 0; i < board.length; i++) {
		if (board[i] && board[i][0] == yourColor) {
			let col = chessEngine.getPieceMoves(board, i, yourColor, enemyColor, board[i][1])
			if (col === 'win') {
				return 'win'
			} else {
				col.forEach(board => {
					newBoards.push(board)
				})				
			}

		}
	}
	// For testing -->
	// console.log('newBoards: ', newBoards)
	return newBoards
}


chessEngine.getLeftOrRight = function(dir) {
		if (dir == 5 ||
		dir == 1 	 || 
		dir == -3 	 || 
		dir == 9 	 || 
		dir == 6 	 || 
		dir == -2 	 || 
		dir == -7
		) {
			return 'right'
		} else if (dir == -5 ||
		dir == -1 	 || 
		dir == 3 	 || 
		dir == -9 	 || 
		dir == -6 	 || 
		dir == 2 	 || 
		dir == 7
		) {
			return 'left'
		} else {
			return 'null'
		}
	}

chessEngine.isOnBoard = function(pos, orientation, target) {
	let initCol,
		tarCol;

	if (pos % 4 == 0) {
		initCol = 0;
	} else if ((pos - 1) % 4 == 0) {
		initCol = 1;
	} else if ((pos - 2) % 4 == 0) {
		initCol = 2;
	} else if ((pos - 3) % 4 == 0) {
		initCol = 3;
	}

	if (target % 4 == 0) {
		tarCol = 0;
	} else if ((target - 1) % 4 == 0) {
		tarCol = 1;
	} else if ((target - 2) % 4 == 0) {
		tarCol = 2;
	} else if ((target - 3) % 4 == 0) {
		tarCol = 3;
	}

	// For Testing -->
	// console.log('initial col: ', initCol, ' target col: ', tarCol, ' orientation: ', orientation)

	if (orientation == 'right' && tarCol <= initCol) {
		return false
	} else if (orientation == 'left' && tarCol >= initCol) {
		return false
	} else { 
		return true 
	}
}

//Initial conditions
// const whites = [
//         ['N', 'B', '2'],
//         ['Q', 'B', '1']
//     ],
//     blacks = [
//         ['Q', 'A', '4']
//     ],
//     moves = 1;

// let board = chessEngine.generateInitialBoard(whites, blacks);

// let newBoards = chessEngine.getQueenMoves(board, 1, 'b', 'w')
// // console.log(newBoards)

// let res = chessEngine.movePiece(1, 'b', board, 1, 'Q', 'w');
// quickConsole(res)

module.exports = chessEngine;




