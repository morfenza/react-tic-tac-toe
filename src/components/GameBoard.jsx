export default function GameBoard({ onSelectSquareFn, board }) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((cell, cellIndex) => (
              <button
                key={cellIndex}
                className="cell"
                onClick={() => onSelectSquareFn(rowIndex, cellIndex)}
                disabled={cell !== null}
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
