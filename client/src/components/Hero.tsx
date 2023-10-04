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
            aria-label="portfolio"
          >
            My Portfolio
            <img src={downArrow} alt="down arrow" className="button-arrow" />
          </a>
        </div>
        <div className="hero-image">
          <img className="hero-image" src={heroImage} alt="hero" />
        </div>
      </div>
      <a href="#portfolio">
        <LuChevronDownCircle className="chevron-down" />
      </a>
    </section>
  );
}

export default Hero;
