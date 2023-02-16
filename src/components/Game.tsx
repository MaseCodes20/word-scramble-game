import { useState } from "react";
import scrambleGame from "../words.json";
import GameButton from "./GameButton";
import GameLetterBoxes from "./GameLetterBoxes";

const GAME_TITLE = "Word Scramble Game";

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
    if (wordInput === "") return;

    correctWord.toLowerCase() === wordInput.toLowerCase()
      ? setMessage("Correct Answer")
      : setMessage("Wrong Answer");
  };

  const newGame = () => {
    setCorrectWord("");
    setScambledWord("");
    setWordInput("");
    setGameStarted(true);
    setMessage("");

    const word = randomWord();
    setCorrectWord(word);
    setScambledWord(scrambleWord(word));
  };

  return (
    <div className="border-2 border-black rounded-md min-h-[500px] w-[500px] p-3 shadow-md">
      <div className="text-center mb-3">
        <h1 className="font-bold text-2xl">{GAME_TITLE}</h1>
      </div>

      {!gameStarted ? (
        <div className="h-[400px] flex items-center justify-center">
          <GameButton newGame={newGame} text="Start Game" />
        </div>
      ) : (
        <>
          <div className="h-[380px] flex items-center justify-center">
            <div>
              {/* Empty letters box */}
              <GameLetterBoxes
                correctWord={correctWord}
                wordInput={wordInput}
              />
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
              </div>
            </div>
          </div>
          <GameButton newGame={newGame} text="New Game" />
        </>
      )}
    </div>
  );
}

export default Game;
