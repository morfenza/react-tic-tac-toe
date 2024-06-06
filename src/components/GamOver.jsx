export default function GameOver({ winner, onRestartFn }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It's a draw!</p>}
      <p>
        <button onClick={onRestartFn}>Rematch!</button>
      </p>
    </div>
  );
}
