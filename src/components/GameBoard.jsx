import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleGameBoardCells(rowIndex, cellIndex) {
    setGameBoard((previousGameBoard) => {
      const deepGameBoardCopy = [
        ...previousGameBoard.map((nestedArray) => [...nestedArray]),
      ];
      deepGameBoardCopy[rowIndex][cellIndex] = "X";
      return deepGameBoardCopy;
    });
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
                onClick={() => handleGameBoardCells(rowIndex, cellIndex)}
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
