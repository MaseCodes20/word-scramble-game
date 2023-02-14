import { useState } from "react";
import scrambleGame from "../words.json";

function Game() {
  const [correctWord, setCorrectWord] = useState("");
  const [scrambledWord, setScambledWord] = useState("");
  const [wordInput, setWordInput] = useState("");
  const [] = useState();
  const [] = useState();

  const randomWord = () => {
    const words = scrambleGame.words;
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  };

  const scrambleWord = (word: string) => {
    const scrambledWord = word.split("").reduce(
      (newArray, _, i) => {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];

        return newArray;
      },
      [...word]
    );

    return scrambledWord.join("");
  };

  const newGame = () => {
    setCorrectWord("");
    setScambledWord("");
    setWordInput("");

    const word = randomWord();
    setCorrectWord(word);
    setScambledWord(scrambleWord(word));
  };

  console.log(scrambledWord);

  return (
    <div className="border-2 border-black rounded-md min-h-[500px] w-[500px] p-3 shadow-md">
      <div className="text-center mb-3">
        <h1>Word Scramble game</h1>
      </div>

      <div>
        {/* Empty letters box */}
        <div className="flex items-center justify-center gap-4">
          {correctWord.split("").map((letter, index) => {
            return (
              <div key={`${letter}_${index}`} className="w-10 h-20 bg-gray-300">
                {" "}
                {wordInput[index]}
              </div>
            );
          })}
        </div>

        {/* Scrambled Word */}
        <div className="text-center my-5 text-2xl">{scrambledWord}</div>

        {/* word input */}
        <div>
          <input
            type="text"
            name="wordInput"
            id="wordInput"
            className="border-2 border-black"
            onChange={(e) => setWordInput(e.target.value)}
          />
          <button>Check</button>
        </div>

        <button onClick={newGame}>New Game</button>
      </div>
    </div>
  );
}

export default Game;
