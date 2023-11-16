import echecsfrance from "../assets/images/portfolio/images/echecsfrance.png";
import plantIDBot from "../assets/images/portfolio/images/plantIDBot.png";
import chessPDF from "../assets/images/portfolio/images/chessPDF.png";
import echecsfranceThumbnail from "../assets/images/portfolio/thumbnails/echecsfrance.webp";
import plantIDBotThumbnail from "../assets/images/portfolio/thumbnails/plantIDBot.webp";
import chessPDFThumbnail from "../assets/images/portfolio/thumbnails/chessPDF.webp";

import Project from "./Project.tsx";

function Featured() {
  return (
    <section className="featured" id="portfolio">
      <div className="featured-header">
        <h2 className="section-title">Portfolio</h2>
        <h3 className="section-subtitle">Featured Projects</h3>
      </div>
      <div className="featured-projects">
        <Project
          image={chessPDF}
          thumbnail={chessPDFThumbnail}
          title={"Chess PDF"}
          text={"A PDF generator for chess games, written in TypeScript"}
          liveButtonText={"Live"}
          url={"https://chess-pdf.vercel.app/"}
          github={"https://github.com/TheRealOwenRees/chess-pdf"}
        />
        <Project
          image={echecsfrance}
          thumbnail={echecsfranceThumbnail}
          title={"Echecs France"}
          text={"A visual representation of FFE chess tournaments in France"}
          liveButtonText={"Live"}
          url={"https://echecsfrance.com"}
          github={"https://github.com/TheRealOwenRees/echecsfrance"}
        />
        <Project
          image={plantIDBot}
          thumbnail={plantIDBotThumbnail}
          title={"Plant ID Bot"}
          text={
            "A Discord bot that identifies plants from images of their organs"
          }
          liveButtonText={"Invite"}
          url={
            "https://discord.com/oauth2/authorize?client_id=948227126094598204&permissions=19520&scope=bot"
          }
          github={"https://github.com/TheRealOwenRees/plantID_discordbot"}
        />
      </div>
    </section>
  );
}

export default Featured;
