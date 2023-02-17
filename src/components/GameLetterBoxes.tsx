interface IGameLetterBoxes {
  correctWord: string;
  wordInput: string;
  isWrongAnswer: boolean;
}

function GameLetterBoxes({
  correctWord,
  wordInput,
  isWrongAnswer,
}: IGameLetterBoxes) {
  return (
    <div className="flex items-center justify-center gap-4">
      {correctWord.split("").map((letter, index) => {
        return (
          <div
            key={`${letter}_${index}`}
            className={`${
              isWrongAnswer && "border-2 border-red-500"
            } w-[30px] h-[60px] rounded-md bg-gray-300 flex items-center justify-center text-xl font-bold`}
          >
            {wordInput[index]}
          </div>
        );
      })}
    </div>
  );
}

export default GameLetterBoxes;
