import GameButton, { ButtonType } from "./GameButton";

interface IWordInput {
  wordInput: string;
  setWord: (word: string) => void;
  clickFunction: () => void;
}

function WordInput({ wordInput, setWord, clickFunction }: IWordInput) {
  return (
    <div className="flex items-center">
      <input
        type="text"
        name="wordInput"
        id="wordInput"
        className="flex-1 border-2 text-black border-black rounded-md p-2"
        value={wordInput}
        onChange={(e) => setWord(e.target.value)}
      />
      <GameButton
        buttonType={ButtonType.Check}
        text="Check"
        clickFunction={clickFunction}
      />
    </div>
  );
}

export default WordInput;
