import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <p>
          Initial design by{" "}
          <a href="https://www.figma.com/@imraan_alam" target="_blank">
            Imraan Alam{" "}
          </a>
          | Built by Me
        </p>
      </div>
      <div className="footer-icons">
        <a href="mailto:owenrees@tutanota.com">
          <LuMail />
        </a>
        <a href="https://www.linkedin.com/in/therealowenrees/" target="_blank">
          <LuLinkedin />
        </a>
        <a href="https://github.com/TheRealOwenRees" target="_blank">
          <LuGithub />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
