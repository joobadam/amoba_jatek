import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import { useState } from "react";
import Game from "./pages/Game";

function App() {
  const [firstPlayerName, setFirstPlayerName] = useState("");
  const [secondPlayerName, setSecondPlayerName] = useState("");
  const [firstPlayerIcon, setFirstPlayerIcon] = useState(null);
  const [secondPlayerIcon, setSecondPlayerIcon] = useState(null);
  const [boardSize, setBoardSize] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/settings"
          element={
            <Settings
              setFirstPlayerName={setFirstPlayerName}
              setSecondPlayerName={setSecondPlayerName}
              setFirstPlayerIcon={setFirstPlayerIcon}
              setSecondPlayerIcon={setSecondPlayerIcon}
              setBoardSize={setBoardSize}
              firstPlayerName={firstPlayerName}
              secondPlayerName={secondPlayerName}
              firstPlayerIcon={firstPlayerIcon}
              secondPlayerIcon={secondPlayerIcon}
              boardSize={boardSize}
            />
          }
        />
        <Route
          path="/game"
          element={
            <Game
              firstPlayerName={firstPlayerName}
              secondPlayerName={secondPlayerName}
              firstPlayerIcon={firstPlayerIcon}
              secondPlayerIcon={secondPlayerIcon}
              boardSize={boardSize}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
