import heroImage from "../assets/images/hero_img.webp";
import downArrow from "../assets/svg/down-arrow.svg";
import { LuChevronDownCircle } from "react-icons/lu";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <div className="hero-intro">
          <h1 className="hero-title-intro">Hi, I'm Owen Rees</h1>
          <h2 className="hero-title">Fullstack Web & App Developer</h2>
          <h3 className="hero-subtitle">
            JavaScript | TypeScript | React | NextJS | NodeJS | Python
          </h3>
          <a
            href="#portfolio"
            className="hero-portfolio-button"
            aria-label="View Portfolio"
          >
            View Portfolio
            <img
              src={downArrow}
              alt="arrow pointing down"
              className="button-arrow"
              aria-hidden={true}
              height="606px"
              width="600px"
            />
          </a>
        </div>
        <div className="hero-image">
          <img
            className="hero-image"
            src={heroImage}
            alt="Owen Rees, Fullstack Web & App Developer"
          />
        </div>
      </div>
      <a href="#portfolio" aria-label="View Portfolio">
        <LuChevronDownCircle
          className="chevron-down"
          alt="chevron pointing down"
        />
      </a>
    </section>
  );
}

export default Hero;
