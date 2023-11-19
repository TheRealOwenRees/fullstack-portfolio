import { LuGithub, LuLinkedin } from "react-icons/lu";
import useNavColour from "../hooks/useNavColour.tsx";
import Hamburger from "./Hamburger.tsx";

function Navbar() {
  useNavColour();

  return (
    <nav className="navbar">
      <div className="logo spin">
        <p>
          <a href="#">OR</a>
        </p>
      </div>
      <ul className="nav-items">
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
      <Hamburger />
    </nav>
  );
}

export default Navbar;
