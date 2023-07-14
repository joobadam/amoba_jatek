import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import icon from "../assets/icon.png";
import { motion } from "framer-motion";

const Login = () => {
  const [loginButton, setLoginButton] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (email === "vendeg@gmail.com" && password === "frontend") {
      setLoginButton(true);
    } else {
      setLoginButton(false);
    }
  }, [password, email]);

  return (
    <div className="h-screen w-full overflow-hidden">
      <div className="max-w-screen-2xl w-full flex items-center justify-center h-screen mx-auto container px-5">
        <motion.div
          initial={{ y: "-100vw" }}
          animate={{ y: 0 }}
          transition={{ delay: 0.5 }}
          className="h-2/3 w-96 xl:w-2/6 flex justify-center items-center flex-col shadow-2xl rounded-lg z-50 glass p-10"
        >
          <div className="h-20 w-20 -mt-14">
            <img src={icon} alt="icon" />
          </div>
          <div className="uppercase font-bold text-xl mb-10 drop-shadow-2xl pink_gradient">
            <h2>Jelentkezz be a fiókodba</h2>
          </div>
          <div className="flex flex-col w-full px-14">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              name=""
              id="email"
              className="w-full h-8 border rounded-md px-2 focus:outline-none text-sm"
              placeholder="vendeg@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-full px-14 py-10">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id=""
              className="w-full h-8 border rounded-md px-2 focus:outline-none text-sm"
              placeholder="frontend"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {!loginButton ? (
            <div className="px-10 w-full">
              <button className="w-full rounded-3xl btn shadow-xl h-10 text-white opacity-50 cursor-not-allowed">
                Belépek
              </button>
            </div>
          ) : (
            <Link to="/settings" className="px-10 w-full">
              <button className="w-full rounded-3xl btn shadow-xl hover:scale-105 duration-200 hover:text-green-300 h-10 text-white">
                Belépek
              </button>
            </Link>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
