const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquareFn, turns }) {
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, cell } = square;

    gameBoard[row][cell] = player;
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((cell, cellIndex) => (
              <button
                key={cellIndex}
                className="cell"
                onClick={() => onSelectSquareFn(rowIndex, cellIndex)}
              >
                {cell}
              </button>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
