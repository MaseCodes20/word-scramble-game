interface IWordInput {
  wordInput: string;
  setWord: (e: string) => void;
  clickFunction: () => void;
}

function WordInput({ wordInput, setWord, clickFunction }: IWordInput) {
  return (
    <div className="flex items-center">
      <input
        type="text"
        name="wordInput"
        id="wordInput"
        className="flex-1 border-2 border-black rounded-md p-2"
        value={wordInput}
        onChange={(e) => setWord(e.target.value)}
      />
      <button
        className="ml-3 p-2 bg-green-300 hover:bg-green-500 hover:text-white rounded-md font-semibold"
        onClick={clickFunction}
      >
        Check
      </button>
    </div>
  );
}

export default WordInput;
