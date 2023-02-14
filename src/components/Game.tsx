import { useState } from "react";
import scrambleGame from "../words.json";

function Game() {
  const [correctWord, setCorrectWord] = useState("");
  const [scrambledWord, setScambledWord] = useState("");
  const [] = useState();
  const [] = useState();
  const [] = useState();

  const randomWord = () => {
    const words = scrambleGame.words;
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  };

  return (
    <div className="border-2 border-black rounded-md min-h-[500px] w-[500px] p-3 shadow-md">
      <div className="text-center mb-3">
        <h1>Word Scramble game</h1>
      </div>

      <div>
        {/* Empty letters box */}
        {/* Scrambled Word */}
        {/* word input */}
      </div>
    </div>
  );
}

export default Game;
