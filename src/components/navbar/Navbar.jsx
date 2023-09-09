import { useContext } from "react";
import "./navbar.css";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { ThemeContext } from "../../utils/ThemeContext";

const Navbar = () => {
  const { theme, handleToggleTheme } = useContext(ThemeContext);

  return (
    <nav>
      <div className="container nav__container">
        <div className="logo">devfinder</div>
        <div className="theme" onClick={handleToggleTheme}>
          {theme === "light" ? "Dark" : "Light"}
          {theme === "light" ? (
            <BsFillMoonFill className="theme-icon" />
          ) : (
            <BsFillSunFill className="theme-icon" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
