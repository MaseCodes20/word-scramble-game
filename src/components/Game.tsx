import { useEffect, useState } from "react";
import scrambleGame from "../words.json";
import GameButton, { ButtonType } from "./GameButton";
import GameLetterBoxes from "./GameLetterBoxes";
import MessageModal from "./MessageModal";
import WordInput from "./WordInput";

const GAME_TITLE = "Word Scramble Game";

function Game() {
  const [correctWord, setCorrectWord] = useState("");
  const [scrambledWord, setScambledWord] = useState("");
  const [wordInput, setWordInput] = useState("");
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isWrongAnswer, setIsWrongAnswer] = useState(false);
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

    if (correctWord.toLowerCase() === wordInput.toLowerCase()) {
      setMessage("Correct Answer");
      setIsWrongAnswer(false);
    } else {
      setMessage("Wrong Answer");
      setIsWrongAnswer(true);
    }
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

  useEffect(() => {
    if (message) {
      setIsOpen(true);
      setTimeout(() => {
        setMessage("");
        setIsOpen(false);
      }, 3000);
    }
  }, [message]);

  return (
    <div className="relative border-2 border-black rounded-md min-h-[500px] w-[500px] p-3 shadow-md">
      <div className="text-center mb-3">
        <h1 className="font-bold text-2xl">{GAME_TITLE}</h1>
      </div>

      {!gameStarted ? (
        <div className="h-[400px] flex items-center justify-center">
          <GameButton
            clickFunction={newGame}
            text="Start Game"
            buttonType={ButtonType.Game}
          />
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
              <WordInput
                wordInput={wordInput}
                setWord={setWordInput}
                clickFunction={checkWord}
              />
            </div>
          </div>
          <GameButton
            clickFunction={newGame}
            text="New Game"
            buttonType={ButtonType.Game}
          />
        </>
      )}

      <MessageModal setIsOpen={setIsOpen} isOpen={isOpen} message={message} />
    </div>
  );
}

export default Game;
