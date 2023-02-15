import { useState } from "react";
import scrambleGame from "../words.json";

function Game() {
  const [correctWord, setCorrectWord] = useState("");
  const [scrambledWord, setScambledWord] = useState("");
  const [wordInput, setWordInput] = useState("");
  const [message, setMessage] = useState("");
  const [gameStarted, setGameStarted] = useState(false);

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

  const checkWord = () => {
    correctWord.toLowerCase() === wordInput.toLowerCase()
      ? setMessage("Correct Answer")
      : setMessage("Wrong Answer");
  };

  const newGame = () => {
    setCorrectWord("");
    setScambledWord("");
    setWordInput("");
    setGameStarted(true);

    const word = randomWord();
    setCorrectWord(word);
    setScambledWord(scrambleWord(word));
  };

  return (
    <div className="border-2 border-black rounded-md min-h-[500px] w-[500px] p-3 shadow-md">
      <div className="text-center mb-3">
        <h1>Word Scramble game</h1>
      </div>

      {!gameStarted ? (
        <div className="h-[400px] flex items-center justify-center">
          <button
            onClick={newGame}
            className="p-2 bg-yellow-300 hover:bg-yellow-500 hover:text-white rounded-md font-semibold"
          >
            Start Game
          </button>
        </div>
      ) : (
        <>
          <div className="h-[380px] flex items-center justify-center">
            <div>
              {/* Empty letters box */}
              <div className="flex items-center justify-center gap-4">
                {correctWord.split("").map((letter, index) => {
                  return (
                    <div
                      key={`${letter}_${index}`}
                      className="w-[30px] h-[60px] rounded-md bg-gray-300 flex items-center justify-center text-xl font-bold"
                    >
                      {" "}
                      {wordInput[index]}
                    </div>
                  );
                })}
              </div>
              {/* Scrambled Word */}
              <div className="text-center my-10 text-2xl">
                {scrambledWord.toLowerCase()}
              </div>
              {/* word input */}
              <div className="flex items-center">
                <input
                  type="text"
                  name="wordInput"
                  id="wordInput"
                  className="flex-1 border-2 border-black rounded-md p-2"
                  value={wordInput}
                  onChange={(e) => setWordInput(e.target.value)}
                />
                <button
                  className="ml-3 p-2 bg-green-300 hover:bg-green-500 hover:text-white rounded-md font-semibold"
                  onClick={checkWord}
                >
                  Check
                </button>
              </div>{" "}
            </div>
          </div>
          <button
            onClick={newGame}
            className="p-2 bg-yellow-300 hover:bg-yellow-500 hover:text-white rounded-md font-semibold"
          >
            New Game
          </button>
        </>
      )}
    </div>
  );
}

export default Game;
