import { HamburgerProps } from "../../types.ts";
import { LuGithub, LuLinkedin } from "react-icons/lu";

const HamburgerMenu = ({ hamburgerOpen, setHamburgerOpen }: HamburgerProps) => {
  const hamburgerMenuClass = hamburgerOpen ? "hamburger-menu-open" : "";

  const handleCloseHamburgerMenu = () => {
    setHamburgerOpen(false);
  };

  return (
    <div
      className={`hamburger-menu ${hamburgerMenuClass}`}
      onClick={handleCloseHamburgerMenu}
    >
      <ul className="">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
      </ul>
      <ul className="icons">
        <li className="icon">
          <a
            className="icon-link"
            href="https://github.com/TheRealOwenRees"
            target="_blank"
            aria-label="GitHub"
          >
            <LuGithub />
          </a>
        </li>

        <li className="icon">
          <a
            className="icon-link"
            href="https://www.linkedin.com/in/therealowenrees/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <LuLinkedin />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
