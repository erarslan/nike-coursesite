import { headerLogo } from "../assets/images";
import { navLinks } from "../cons";
import { useState } from "react";
import { hamburger } from "../assets/icons";
import { AnimatePresence } from "motion/react";
import Menu from "./Menu";

const Nav = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <header className="absolute z-20 w-full padding-x py-8">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-montserrat leading-normal text-lg text-slate-gray "
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className="button lg:hidden"
        >
          <div className={`burger ${isActive ? "burger-active" : ""}`}></div>
        </div>
        <AnimatePresence mode="wait">{isActive && <Menu />}</AnimatePresence>
      </nav>
    </header>
  );
};

export default Nav;
