import { headerLogo } from "../assets/images";
import { navLinks } from "../cons";

import { hamburger } from "../assets/icons";
const Nav = () => {
  return (
    <header className="absolute z-10 w-full padding-x py-8">
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
        <div className="lg:hidden">
          <img src={hamburger} alt="Hamburger" width={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
