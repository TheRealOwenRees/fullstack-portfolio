import echecsfrance from "../assets/images/portfolio/images/echecsfrance.png";
import plantIDBot from "../assets/images/portfolio/images/plantIDBot.png";
import echecsfranceThumbnail from "../assets/images/portfolio/thumbnails/echecsfrance.webp";
import plantIDBotThumbnail from "../assets/images/portfolio/thumbnails/plantIDBot.webp";
import upRightArrow from "../assets/svg/up-right-arrow.svg";

function Featured() {
  return (
    <section className="featured" id="portfolio">
      <div className="featured-header">
        <h2 className="section-title">Portfolio</h2>
        <h3 className="section-subtitle">Featured Projects</h3>
      </div>
      <div className="featured-projects">
        <div className="project">
          <a href={echecsfrance} target="_blank">
            <img
              src={echecsfranceThumbnail}
              alt="Echecs France"
              width="600px"
              height="auto"
            />
          </a>
          <div>
            <h4 className="featured-title">Echecs France</h4>
            <p className="featured-text">
              A visual representation of FFE chess tournaments in France
            </p>
            <div className="featured-buttons">
              <a
                className="featured-live-button"
                href="https://echecsfrance.com"
                target="_blank"
                rel="noreferrer"
              >
                Live
                <img
                  src={upRightArrow}
                  alt="up right arrow"
                  className="button-arrow"
                />
              </a>
              <a
                className="featured-source-button"
                href="https://github.com/TheRealOwenRees/echecsfrance"
                target="_blank"
                rel="noreferrer"
              >
                Source
                <img
                  src={upRightArrow}
                  alt="up right arrow"
                  className="button-arrow"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="project">
          <a href={plantIDBot} target="_blank">
            <img
              src={plantIDBotThumbnail}
              alt="Echecs France"
              className="project-image"
              width="600px"
              height="auto"
            />
          </a>
          <div>
            <h4 className="featured-title">Plant ID Bot</h4>
            <p className="featured-text">
              A Discord bot that identifies plants from images of their organs
            </p>
            <div className="featured-buttons">
              <a
                className="featured-live-button"
                href="https://discord.com/oauth2/authorize?client_id=948227126094598204&permissions=19520&scope=bot"
                target="_blank"
                rel="noreferrer"
              >
                Invite
                <img
                  src={upRightArrow}
                  alt="up right arrow"
                  className="button-arrow"
                />
              </a>
              <a
                className="featured-source-button"
                href="https://github.com/TheRealOwenRees/plantID_discordbot"
                target="_blank"
                rel="noreferrer"
              >
                Source
                <img
                  src={upRightArrow}
                  alt="up right arrow"
                  className="button-arrow"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Featured;
