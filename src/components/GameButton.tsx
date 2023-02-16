export enum ButtonType {
  Game = "gameButton",
  Check = "checkButton",
}

interface IGameButton {
  clickFunction: () => void;
  text: string;
  buttonType: ButtonType;
}

function GameButton({ clickFunction, text, buttonType }: IGameButton) {
  return (
    <button onClick={clickFunction} className={buttonType}>
      {text}
    </button>
  );
}

export default GameButton;
