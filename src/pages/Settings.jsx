import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { GiCrossMark } from "react-icons/gi";
import { BsCircle } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
import { FaDog } from "react-icons/fa";
import { FaCat } from "react-icons/fa";

const Settings = ({
  setFirstPlayerName,
  setSecondPlayerName,
  setFirstPlayerIcon,
  setSecondPlayerIcon,
  setBoardSize,
  firstPlayerName,
  secondPlayerName,
  firstPlayerIcon,
  secondPlayerIcon,
  boardSize,
}) => {
  const [settingsButton, setSettingsButton] = useState(false);

  const cross = <GiCrossMark size={20} values="cross" style={{color:'dodgerblue'}}/>;
  const circle = <BsCircle size={20} values="circle" style={{color:'gold'}}/>;
  const moon = <BsMoon size={20} values="moon" style={{color:'dodgerblue'}}/>;
  const sun = <BsSun size={20} values="sun" style={{color:'gold'}}/>;
  const dog = <FaDog size={20} values="dog" style={{color:'dodgerblue'}}/>;
  const cat = <FaCat size={20} values="cat" style={{color:'gold'}}/>;

  useEffect(() => {
    if (
      firstPlayerName !== "" &&
      secondPlayerName !== "" &&
      firstPlayerIcon !== null &&
      secondPlayerIcon !== null &&
      boardSize !== 0
    ) {
      setSettingsButton(true);
    } else {
      setSettingsButton(false);
    }
  }, [
    firstPlayerName,
    secondPlayerName,
    firstPlayerIcon,
    secondPlayerIcon,
    boardSize,
  ]);

  return (
    <div className="h-screen w-full overflow-hidden">
      <div className="max-w-screen-2xl w-full flex items-center justify-center h-screen mx-auto container flex-col px-5 ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="h-1/4 w-4/5 md:w-1/3 pt-5 shadow-lg rounded-lg pl-5 glass -mt-20"
        >
          <div>
            <label
              htmlFor="firstPlayerName"
              className="block font-bold uppercase"
            >
              Első Játékos neve
            </label>
            <input
              type="text"
              onChange={(e) => setFirstPlayerName(e.target.value)}
              className="bg-transparent focus:outline-none  border-b-2 border-b-black/20 text-sm px-2 ml-2"
            />
          </div>
          <div className="my-5 font-bold ">
            <label htmlFor="firsPlayerIcon">Jele</label>
            <div id="firsPlayerIcon" className="flex gap-x-5 ml-2 text-sky-400">
              <div
                className={`h-10 w-10 flex justify-center items-center rounded-lg ${
                  firstPlayerIcon?.props.values === "cross"
                    ? "bg-black/10"
                    : "bg-red-transparent"
                }`}
              >
                <GiCrossMark
                  size={30}
                  onClick={() => setFirstPlayerIcon(cross)}
                  className="hover:scale-110 duration-100 hover:cursor-pointer"
                />
              </div>
              <div
                className={`h-10 w-10 flex justify-center items-center rounded-lg ${
                  firstPlayerIcon?.props.values === "moon"
                    ? "bg-black/10"
                    : "bg-red-transparent"
                }`}
              >
                <BsMoon
                  size={30}
                  onClick={() => setFirstPlayerIcon(moon)}
                  className="hover:scale-110 duration-100 hover:cursor-pointer"
                />
              </div>
              <div
                className={`h-10 w-10 flex justify-center items-center rounded-lg ${
                  firstPlayerIcon?.props.values === "dog"
                    ? "bg-black/10"
                    : "bg-red-transparent"
                }`}
              >
                <FaDog
                  size={30}
                  onClick={() => setFirstPlayerIcon(dog)}
                  className="hover:scale-110 duration-100 hover:cursor-pointer"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* második játékos */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="h-1/4 w-4/5 md:w-1/3 pt-5 shadow-lg rounded-lg pl-5 glass mt-3 "
        >
          <div>
            <label
              htmlFor="secondPlayerName"
              className="block font-bold uppercase"
            >
              Második Játékos neve
            </label>
            <input
              type="text"
              onChange={(e) => setSecondPlayerName(e.target.value)}
              className="bg-transparent focus:outline-none  border-b-2 border-b-black/20 text-sm px-2 ml-2"
            />
          </div>
          <div className="my-5 font-bold ">
            <label htmlFor="secondPlayerIcon">Jele</label>
            <div id="secondPlayerIcon" className="flex gap-x-5 ml-2 text-yellow-400">
              <div
                className={`h-10 w-10 flex justify-center items-center rounded-lg  ${
                  secondPlayerIcon?.props.values === "circle"
                    ? "bg-black/10"
                    : "bg-red-transparent"
                }`}
              >
                <BsCircle
                  size={30}
                  onClick={() => setSecondPlayerIcon(circle)}
                  className="hover:scale-110 duration-100 hover:cursor-pointer"
                />
              </div>
              <div
                className={`h-10 w-10 flex justify-center items-center rounded-lg ${
                  secondPlayerIcon?.props.values === "sun"
                    ? "bg-black/10"
                    : "bg-red-transparent"
                }`}
              >
                <BsSun
                  size={30}
                  onClick={() => setSecondPlayerIcon(sun)}
                  className="hover:scale-110 duration-100 hover:cursor-pointer"
                />
              </div>
              <div
                className={`h-10 w-10 flex justify-center items-center rounded-lg ${
                  secondPlayerIcon?.props.values === "cat"
                    ? "bg-black/10"
                    : "bg-red-transparent"
                }`}
              >
                <FaCat
                  size={30}
                  onClick={() => setSecondPlayerIcon(cat)}
                  className="hover:scale-110 duration-100 hover:cursor-pointer"
                />
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="h-1/7 w-4/5 md:w-1/3 font-bold glass py-2 my-3"
        >
          <label htmlFor="chooseBoard" className="ml-5">
            Válassz táblát
          </label>
          <div
            id="chooseBoard"
            className="grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-y-1 "
          >
            <div
              className={`flex justify-center items-center text-xl  hover:scale-105 duration-100 cursor-pointer ${
                boardSize === 9 ? "text-black" : "text-black/30"
              }`}
            >
              <h3 onClick={() => setBoardSize(9)}>9X9</h3>
            </div>
            <div
              className={`flex justify-center items-center text-xl hover:scale-105 duration-100 cursor-pointer ${
                boardSize === 10 ? "text-black" : "text-black/30"
              }`}
              onClick={() => setBoardSize(10)}
            >
              <h3>10X10</h3>
            </div>
            <div
              className={`flex justify-center items-center text-xl hover:scale-105 duration-100 cursor-pointer ${
                boardSize === 11 ? "text-black" : "text-black/30"
              }`}
              onClick={() => setBoardSize(11)}
            >
              <h3>11X11</h3>
            </div>
          </div>
        </motion.div>
        {!settingsButton ? (
          <div className="px-10 w-96 mt-5">
            <button className="w-full rounded-3xl btn shadow-xl h-10 text-white opacity-50 cursor-not-allowed">
              Tovább
            </button>
          </div>
        ) : (
          <Link to="/game" className="px-10 w-96 mt-5">
            <button className="w-full rounded-3xl btn shadow-xl hover:scale-105 duration-200 hover:text-green-300 h-10 text-white">
              Tovább
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Settings;
