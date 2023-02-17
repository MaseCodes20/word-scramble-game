import { FormEvent } from "react";
import GameButton, { ButtonType } from "./GameButton";

interface IWordInput {
  wordInput: string;
  setWord: (word: string) => void;
  checkWord: () => void;
}

function WordInput({ wordInput, setWord, checkWord }: IWordInput) {
  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    checkWord();
  };

  return (
    <form onSubmit={submitForm} className="flex items-center">
      <input
        type="text"
        name="wordInput"
        id="wordInput"
        className="flex-1 border-2 text-black border-black rounded-md p-2"
        value={wordInput}
        onChange={(e) => setWord(e.target.value)}
      />
      <GameButton buttonType={ButtonType.Check} text="Check" />
    </form>
  );
}

export default WordInput;
