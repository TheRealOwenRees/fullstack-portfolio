import design from "../assets/images/design.png";
import {
  LuFolderClosed,
  LuSquareCode,
  LuHash,
  LuDatabase,
} from "react-icons/lu";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div>
          <h2 className="section-title"></h2>
          <h3 className="section-subtitle">About Me</h3>
          <p>
            Hi, thanks for stopping by. I'm Owen Rees, a full-stack web and
            application developer. I love to contribute to open source projects
            and build full-stack applications.
          </p>
          <p>
            I specialise in React / NextJS, TypeScript / Javascript, Node.js,
            Python, and MongoDB. I also have a keen interest in Go and C.
          </p>
          <p>
            Get in touch if you are looking for someone to bring your ideas to
            life, or wish to collaborate on a project.
          </p>
        </div>
        <div>
          <h4 className="section-secondary-heading">
            Aligning Business Goals with User Needs
          </h4>
          <img src={design} alt="design" />
        </div>
      </div>

      <div className="expertise-container">
        <div className="expertise-heading">
          <LuFolderClosed />
          <h2 className="section-title expertise-heading-title">
            My Expertise
          </h2>
        </div>
        <div className="expertise">
          <div className="expertise-item">
            <LuSquareCode className="expertise-icon" />
            <h3 className="expertise-title">Frontend Development</h3>
            <p className="expertise-text">
              Vanilla HTML/CSS, React and NextJS frontends, bringing your
              designs to life
            </p>
          </div>
          <div className="expertise-item">
            <LuHash className="expertise-icon" />
            <h3 className="expertise-title">Backend Development</h3>
            <p className="expertise-text">
              RESTful and GraphQL APIs, utilising frameworks in both
              JavaScript/TypeScript and Python
            </p>
          </div>
          <div className="expertise-item">
            <LuDatabase className="expertise-icon" />
            <h3 className="expertise-title">Database Design</h3>
            <p className="expertise-text">
              SQL and NoSQL database design and implementation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
