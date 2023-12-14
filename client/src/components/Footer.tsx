import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";

function Footer() {
  return (
    <footer className="footer">
      {/*<div>*/}
      {/*  <p>*/}
      {/*    Initial design by{" "}*/}
      {/*    <a href="https://www.figma.com/@imraan_alam" target="_blank">*/}
      {/*      Imraan Alam{" "}*/}
      {/*    </a>*/}
      {/*    | Icons by <a href="https://icons8.com/">Icons8</a> | Built by Me*/}
      {/*  </p>*/}
      {/*</div>*/}
      <div className="footer-icons">
        <a href="mailto:owenrees@tutanota.com" aria-label="Email">
          <LuMail />
        </a>
        <a
          href="https://www.linkedin.com/in/therealowenrees/"
          target="_blank"
          aria-label="LinkedIn
        "
        >
          <LuLinkedin />
        </a>
        <a
          href="https://github.com/TheRealOwenRees"
          target="_blank"
          aria-label="GitHub"
        >
          <LuGithub />
        </a>
      </div>
      <div>
        <p>
          Icons by <a href="https://icons8.com/">Icons8</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
