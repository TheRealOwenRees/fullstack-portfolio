import { LuGithub, LuLinkedin } from "react-icons/lu";
import { useEffect } from "react";

function Navbar() {
  useEffect(() => {
    // TODO move into its own file / hook
    const navbar = document.querySelector(".navbar");
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          const sectionId = section.id;
          const bgColorClassName = `${sectionId}-bgcolor`;
          if (navbar) {
            navbar.className = `navbar ${bgColorClassName}`;
          }
        }
      });
    });
  }, []);

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
        {/*<li>*/}
        {/*  <a href="#blog">Blog</a>*/}
        {/*</li>*/}
        <li className="icon">
          <a
            className="icon-link"
            href="https://github.com/TheRealOwenRees"
            target="_blank"
          >
            <LuGithub />
          </a>
        </li>
        <li className="icon">
          <a
            className="icon-link"
            href="https://www.linkedin.com/in/therealowenrees/"
            target="_blank"
          >
            <LuLinkedin />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
