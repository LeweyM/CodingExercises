// ChessPredictionEngine.js

const chessEngine = require('./chessEngine');

let initialBoard = chessEngine.generateInitialBoard([ [ 'R', 'B', '2' ], [ 'R', 'C', '3' ], [ 'Q', 'B', '1' ] ], [ [ 'Q', 'A', '4' ] ])
// let initialBoard = chessEngine.generateInitialBoard([ [ 'N', 'B', '1' ] ], [ [ 'N', 'A', '4' ] ])


// Can white make a move where, no matter what black does, white can make a winning move?

// Base Cases:
// 1) black wins
// 2) white wins
// 3) max stack depth surpassed 

console.log('\n', '----------------------', '\n')

const whiteHasWinningMove = function(board, depth, maxDepth) {

	let whiteMoves,
		blackMoveBoards,
		nextMove,
		result = 'win',
		blackMoves = [];

	depth++;

	console.log('\ndepth: ', depth)

	if (depth <= maxDepth) {

		whiteMoves = chessEngine.getNewBoards(board, 'w', 'b');
		console.log('white moves: ', whiteMoves)
		// can white take the queen here?
		if (whiteMoves == 'win') {
			return 'win'
		// if white can't win, calculate black's moves
		} else {
			depth++;
			for (let i = 0; i < whiteMoves.length; i++) {
				blackMoveBoards = chessEngine.getNewBoards(whiteMoves[i], 'b', 'w');
				// for each new position based on black's response..
				// can black win? if so, return, because white's move is a losing move
				if (blackMoveBoards == 'win') {
					continue
				} else {
					for (let j = 0; j < blackMoveBoards.length; j++) {
						blackMoves.push(blackMoveBoards[j])
					}
				}
			}
			console.log('blackmoves: ', blackMoves)
			if (depth < maxDepth) {
				for (let i = 0; i < blackMoves.length; i++) {
					nextMove = whiteHasWinningMove(blackMoves[i], depth, maxDepth);
					console.log('next Move: ', nextMove)
					if (nextMove == 'no win') {
						result = 'no win'
					}
				}
				return result		
			} else {
				console.log('reason for ending: MaxDepth reached')
				return 'no win'
			}
		}
	} else {
		console.log('reason for ending: MaxDepth reached')
		return 'no win'
	}
}

let res = whiteHasWinningMove(initialBoard, 0, 3)

console.log(res)
