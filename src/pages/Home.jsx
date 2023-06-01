import React from "react";
import LottieAmoba from "../components/LottieAmoba";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'

const Home = () => {
  return (
    <div className="h-screen w-full">
      <div className="max-w-screen-2xl w-full flex pt-32 items-center flex-col h-screen mx-auto container relative">
        <h1 className="text-5xl sm:text-6xl font-bold drop-shadow-2xl pink_gradient ">
          AMŐBA JÁTÉK
        </h1>
        <motion.h3
        initial={{x:"-100vw"}}
        animate={{x:0}}
        transition={{delay:2}}
        className="font-bold text-sm sm:text-lg drop-shadow-2xl my-5">
          Az életben a játék az egyetlen dolog, ami komoly.
        </motion.h3>
        <LottieAmoba />
        <Link to='/login'>
        <button className="w-32 h-10 text-white rounded-3xl btn sm:absolute sm:top-1 sm:right-10 shadow-xl mt-10 hover:scale-110 duration-200 hover:text-green-300">
          Login
        </button>
        </Link>
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
