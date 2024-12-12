import { slide } from "../cons";
import { motion } from "motion/react";

const Link = ({ data }) => {
  const { title, href, index } = data;

  return (
    <motion.div
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="link"
    >
      <a className="no-underline text-white font-light" href={href}>
        {title}
      </a>
    </motion.div>
  );
};

export default Link;
