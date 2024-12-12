import { navItems } from "../cons";
import Link from "./Link";
import { menuSlide } from "../cons";
import { motion } from "motion/react";

const Menu = () => {
  return (
    <motion.div
      variants={menuSlide}
      animate="enter"
      exit="exit"
      initial="initial"
      className="menu lg:hidden"
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
      </div>
    </motion.div>
  );
};

export default Menu;
