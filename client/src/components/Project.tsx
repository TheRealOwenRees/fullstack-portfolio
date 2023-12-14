import { ProjectProps } from "../../types.ts";
import upRightArrow from "../assets/svg/up-right-arrow.svg";

const Project = ({
  thumbnail,
  title,
  text,
  liveButtonText,
  url,
  github,
}: ProjectProps) => {
  return (
    <div className="project">
      <a href={url} target="_blank">
        <img src={thumbnail} alt={title} width="600px" height="auto" />
      </a>
      <div>
        <h4 className="featured-title">{title}</h4>
        <p className="featured-text">{text}</p>
        <div className="featured-buttons">
          <a
            className="featured-live-button"
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            {liveButtonText}
            <img
              src={upRightArrow}
              alt="up right arrow"
              className="button-arrow"
            />
          </a>
          <a
            className="featured-source-button"
            href={github}
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
  );
};

export default Project;
