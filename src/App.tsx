import DarkModeButton from "./components/DarkModeButton";
import Game from "./components/Game";

function App() {
  return (
    <div className="relative flex items-center justify-center min-h-screen">
      <div className="absolute top-0 right-0 mt-5 mr-5">
        <DarkModeButton />
      </div>
      <Game />
    </div>
  );
}

export default App;
