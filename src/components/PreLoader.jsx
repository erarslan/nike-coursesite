import { motion } from "motion/react";
import { slideUp, opacity } from "../cons";
import { useState, useEffect } from "react";

const PreLoader = () => {
  const [index, setIndex] = useState(0);
  const words = ["Merhaba", "Selam", "Hi", "Hello", "Hola", "Bonjour", "Hallo"];

  useEffect(() => {
    if (index === words.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 1000 : 150
    );
    console.log(index);
  }, [index]);

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="w-screen h-screen flex justify-center items-center fixed z-[99] top-0 left-0 text-white bg-[#141516]"
    >
      <motion.p
        variants={opacity}
        initial="initial"
        animate="enter"
        className="text-[42px]"
      >
        {words[index]}
      </motion.p>
    </motion.div>
  );
};

export default PreLoader;
