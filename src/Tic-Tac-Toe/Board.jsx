import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
	const [squares, setSquares] = useState(Array(9).fill(null));
	const [isXNext, setIsXNext] = useState(true);

	const handleClick = (index) => {
		if (calculateWinner(squares) || squares[index]) {
			return;
		}
		const newSquares = squares.slice();
		newSquares[index] = isXNext ? "X" : "O";
		setSquares(newSquares);
		setIsXNext(!isXNext);
	};

	const renderSquare = (index) => {
		return <Square value={squares[index]} onClick={() => handleClick(index)} />;
	};

	const winner = calculateWinner(squares);
	let status;
	if (winner) {
		status = `Player ${winner} WON!`;
	} else if (squares.every(Boolean)) {
		status = "Draw!";
	} else {
		status = `Next player: ${isXNext ? "X" : "O"}`;
	}

	const handleReset = () => {
		setSquares(Array(9).fill(null));
		setIsXNext(true);
	};

	return (
		<div>
			<div className="text-lg my-6">{status}</div>
			<div className="flex">
				{renderSquare(0)}
				{renderSquare(1)}
				{renderSquare(2)}
			</div>
			<div className="flex">
				{renderSquare(3)}
				{renderSquare(4)}
				{renderSquare(5)}
			</div>
			<div className="flex">
				{renderSquare(6)}
				{renderSquare(7)}
				{renderSquare(8)}
			</div>
			<button className="w-full my-4 bg-red-600" onClick={handleReset}>
				Reset
			</button>
		</div>
	);
};

const calculateWinner = (squares) => {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}
	return null;
};

export default Board;
