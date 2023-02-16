import React from "react";

interface IGameButton {
  newGame: () => void;
  text: string;
}

function GameButton({ newGame, text }: IGameButton) {
  return (
    <button
      onClick={newGame}
      className="p-2 bg-yellow-300 hover:bg-yellow-500 hover:text-white rounded-md font-semibold"
    >
      {text}
    </button>
  );
}

export default GameButton;
