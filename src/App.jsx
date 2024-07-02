import { useState } from "react";
import Board from "./Tic-Tac-Toe/Board";
function App() {
	return (
		<div className="flex flex-col items-center">
			<h1 className="text-xl">TIC-TAC-TOE</h1>
			<Board />
		</div>
	);
}

export default App;
