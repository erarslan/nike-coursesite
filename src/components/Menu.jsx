import { navItems } from "../cons";
import Link from "./Link";

const Menu = () => {
  return (
    <div className="menu lg:hidden">
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
    </div>
  );
};

export default Menu;
