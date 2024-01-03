import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";

function Connect() {
  return (
    <section className="connect" id="connect">
      <div>
        <h2 className="section-subtitle">Let's Connect</h2>
        <p>Contact me to discuss your next project</p>
      </div>
      <div className="connect-buttons-container">
        <a
          href="mailto:owenrees@tutanota.com"
          target="_blank"
          className="connect-button button-press"
          aria-label="Email"
        >
          Email
          <LuMail />
        </a>
        <a
          href="https://www.linkedin.com/in/therealowenrees/"
          target="_blank"
          className="connect-button button-press"
          aria-label="LinkedIn"
        >
          LinkedIn
          <LuLinkedin className="connect-icon" />
        </a>
        <a
          href="https://github.com/TheRealOwenRees"
          target="_blank"
          className="connect-button button-press"
          aria-label="GitHub"
        >
          GitHub
          <LuGithub />
        </a>
      </div>
    </section>
  );
}

export default Connect;
