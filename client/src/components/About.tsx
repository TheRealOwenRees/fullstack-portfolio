import {
  LuFolderClosed,
  LuSquareCode,
  LuHash,
  LuDatabase,
} from "react-icons/lu";
import reactSvg from "../assets/svg/icons8-react.svg";
import tsSvg from "../assets/svg/icons8-typescript.svg";
import pythonSvg from "../assets/svg/icons8-python.svg";
import nextjsSvg from "../assets/svg/icons8-nextjs.svg";
import jsSvg from "../assets/svg/icons8-javascript.svg";
import sassSvg from "../assets/svg/icons8-sass.svg";
import postgresqlSvg from "../assets/svg/icons8-postgresql.svg";
import dockerSvg from "../assets/svg/icons8-docker.svg";
import graphqlSvg from "../assets/svg/icons8-graphql.svg";
import nodeSvg from "../assets/svg/icons8-nodejs.svg";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div>
          <h2 className="section-title"></h2>
          <h3 className="section-subtitle">About Me</h3>
          <p>
            I'm Owen Rees, a full-stack web and application developer. I love to
            contribute to open source projects and build full-stack
            applications.
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
          <div className="tech-icons">
            <img
              src={jsSvg}
              title="JavaScript"
              alt="javascript"
              width="60px"
              height="auto"
            />
            <img
              src={tsSvg}
              title="TypeScript"
              alt="typescript"
              width="60px"
              height="auto"
            />
            <img
              src={nodeSvg}
              title="NodeJS"
              alt="nodejs"
              width="60px"
              height="auto"
            />
            <img
              src={reactSvg}
              title="React"
              alt="react"
              width="60px"
              height="auto"
            />
            <img
              src={nextjsSvg}
              title="NextJS"
              alt="nextjs"
              width="60px"
              height="auto"
            />
          </div>
          <div className="tech-icons">
            <img
              src={pythonSvg}
              title="Python"
              alt="python"
              width="60px"
              height="auto"
            />
            <img
              src={sassSvg}
              title="SASS/SCSS"
              alt="sass"
              width="60px"
              height="auto"
            />
            <img
              src={postgresqlSvg}
              title="PostgreSQL"
              alt="postgresql"
              width="60px"
              height="auto"
            />
            <img
              src={graphqlSvg}
              title="GraphQL"
              alt="graphql"
              width="60px"
              height="auto"
            />
            <img
              src={dockerSvg}
              title="Docker"
              alt="docker"
              width="60px"
              height="auto"
            />
          </div>
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
