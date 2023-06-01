import React from "react";
import Lottie from "lottie-react";
import amimationData from "../assets/amoba.json";
import {motion} from 'framer-motion'


const LottieAmoba = () => {

  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay: 1, duration:2.5}}
    className="sm:w-72 w-60 sm:h-72 h-60">
      <Lottie
        animationData={amimationData}
      />
    </motion.div>
  );
};

export default LottieAmoba;
