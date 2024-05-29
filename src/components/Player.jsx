import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handlePlayerNameChange(event) {
    setPlayerName(event.target.value);
  }

  function handleEditClick() {
    setIsEditing((wasEditing) => !wasEditing);
  }

  let playerNameField = <span className="player-name">{playerName}</span>;
  let buttonCaption = "Edit";

  if (isEditing) {
    playerNameField = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handlePlayerNameChange}
      />
    );

    buttonCaption = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerNameField}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{buttonCaption}</button>
    </li>
  );
}
