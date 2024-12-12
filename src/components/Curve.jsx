import { motion } from "motion/react";

const Curve = () => {
  const initalPath = `M100 0 L100 ${window.innerHeight} Q-70 ${
    window.innerHeight / 2
  } 100 0`;
  const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${
    window.innerHeight / 2
  } 100 0`;

  const pathAnimation = {
    initial: {
      d: initalPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.25, 1, 0.5, 1] },
    },
    exit: {
      d: initalPath,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
    },
  };

  return (
    <svg className="svgCurve">
      <motion.path
        variants={pathAnimation}
        initial="initial"
        animate="enter"
        exit="exit"
      ></motion.path>
    </svg>
  );
};

export default Curve;
