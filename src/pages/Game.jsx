import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import scorpion from "../assets/scorpion.gif" 
import subzero from "../assets/subzero2.gif"

const Game = ({
  firstPlayerName,
  secondPlayerName,
  firstPlayerIcon,
  secondPlayerIcon,
  boardSize,
}) => {
  const [player, setPlayer] = useState(firstPlayerIcon);
  const [board, setBoard] = useState(
    Array(boardSize).fill(Array(boardSize).fill(null))
  );
  const [gameOver, setGameOver] = useState(false);
  const [firstPlayerWin, setFirstPlayerWin] = useState(0);
  const [secondPlayerWin, setSecondPlayerWin] = useState(0);

  const [scorpionWin, setScorpionWin] = useState(false)
  const [subzeroWin, setSubzeroWin] = useState(false)

  useEffect(()=>{
    
  })

  const handleCellClick = (rowIndex, colIndex) => {
    // Ellenőrizd, hogy a kattintott cella üres-e
    if (board[rowIndex][colIndex] === null) {
      // Helyezd el a játékos jelét a cellában
      const updatedBoard = board.map((row, rIndex) =>
        rIndex === rowIndex
          ? row.map((cell, cIndex) => (cIndex === colIndex ? player : cell))
          : row
      );

      // Frissítsd a játéktábla állapotát
      setBoard(updatedBoard);

      // Váltás a következő játékosra
      setPlayer(
        player === firstPlayerIcon ? secondPlayerIcon : firstPlayerIcon
      );

      const checkWin = (board, player) => {
        // Oszlopok ellenőrzése
        for (let col = 0; col <= boardSize - 5; col++) {
          for (let row = 0; row < boardSize; row++) {
            if (
              board[row][col] === player &&
              board[row][col + 1] === player &&
              board[row][col + 2] === player &&
              board[row][col + 3] === player &&
              board[row][col + 4] === player
            ) {
              return true;
            }
          }
        }

        // Sorok ellenőrzése
        for (let row = 0; row <= boardSize - 5; row++) {
          for (let col = 0; col < boardSize; col++) {
            if (
              board[row][col] === player &&
              board[row + 1][col] === player &&
              board[row + 2][col] === player &&
              board[row + 3][col] === player &&
              board[row + 4][col] === player
            ) {
              return true;
            }
          }
        }

        // Átlók (főátlók és mellékátlók) ellenőrzése
        for (let row = 0; row <= boardSize - 5; row++) {
          for (let col = 0; col <= boardSize - 5; col++) {
            if (
              board[row][col] === player &&
              board[row + 1][col + 1] === player &&
              board[row + 2][col + 2] === player &&
              board[row + 3][col + 3] === player &&
              board[row + 4][col + 4] === player
            ) {
              return true;
            }
            if (
              board[row][col + 4] === player &&
              board[row + 1][col + 3] === player &&
              board[row + 2][col + 2] === player &&
              board[row + 3][col + 1] === player &&
              board[row + 4][col] === player
            ) {
              return true;
            }
          }
        }

        return false;
      };

      const hasWon = checkWin(updatedBoard, player);
      if (hasWon) {
        setGameOver(true);
        if (player === firstPlayerIcon) {
          setFirstPlayerWin((x) => x + 1);
          setSubzeroWin(true)
        } else {
          setSecondPlayerWin((o) => o + 1);
          setScorpionWin(true)
        }
      }
    }
  };

  const reset = () => {
    setBoard(Array(boardSize).fill(Array(boardSize).fill(null)));
    setGameOver(false);
    setScorpionWin(false)
    setSubzeroWin(false)
  };

  return (
    <div className="h-screen w-full ">
      <div className="max-w-screen-2xl w-full flex items-center justify-center h-screen mx-auto container flex-col sm:px-5 ">
        <motion.div
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          transition={{ delay: 1 }}
          className="max-w-md grid grid-rows-1 grid-cols-2 gap-x-10 glass w-80 uppercase font-bold p-2"
        >
          <div
            className={
              player === firstPlayerIcon
                ? "text-center border-8 border-b-sky-400"
                : "text-center border-8 border-b-transparent"
            }
          >
            <h3>
              {firstPlayerName} : {firstPlayerWin}
            </h3>
          </div>
          <div
            className={
              player !== firstPlayerIcon
                ? "text-center border-8 border-b-yellow-400"
                : "text-center border-8 border-b-transparent"
            }
          >
            <h3>
              {secondPlayerName} : {secondPlayerWin}
            </h3>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.5 }}
          className="glass grid mx-auto shadow-2xl  rounded-lg p-2 mt-10"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${boardSize}, 2rem)`,
          }}
        >
          {board.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
              {row.map((cell, colIndex) => (
                <div
                  key={colIndex}
                  className="cell w-6 h-6 md:w-8 md:h-8 m-1 bg-white/80 shadow-lg flex justify-center items-center hover:scale-105 duration-100"
                  onClick={() =>
                    gameOver ? "" : handleCellClick(rowIndex, colIndex)
                  }
                >
                  {cell}
                </div>
              ))}
            </div>
          ))}
        </motion.div>
        <button
          onClick={reset}
          className="w-40 mt-10 rounded-3xl btn shadow-xl hover:scale-105 duration-200 hover:text-green-300 h-10 text-white"
        >
          reset
        </button>
              <div className={subzeroWin?"absolute top-14 left-1/2 z-50" : "hidden"}>
                <img src={subzero} alt="subzero" />
              </div>    
              <div className={scorpionWin?"absolute top-14 right-1/2 z-50" : "hidden"}>
                <img src={scorpion} alt="scorpion" />
              </div>    
      </div>
    </div>
  );
};

export default Game;
