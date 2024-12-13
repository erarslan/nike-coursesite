import { navItems } from "../cons";
import Link from "./Link";
import { menuSlide } from "../cons";
import { motion } from "motion/react";
import Curve from "./Curve";

const Menu = () => {
  return (
    <motion.div
      variants={menuSlide}
      animate="enter"
      exit="exit"
      initial="initial"
      className="menu lg:hidden max-sm:w-full"
    >
      <div className="body">
        <div className="nav">
          <div className="header">
            <p>Navigation</p>
          </div>
          {navItems.map((item, index) => (
            <Link key={index} data={{ ...item, index }} />
          ))}
        </div>
        <div className="flex justify-between gap-10 max-lg:gap-4 text-[12px]">
          <a>Awwwards</a>
          <a>Instagram</a>
          <a>Dribble</a>
          <a>LinkedIn</a>
        </div>
      </div>
      <Curve />
    </motion.div>
  );
};

export default Menu;
