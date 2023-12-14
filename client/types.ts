import { Dispatch, SetStateAction } from "react";

export interface ProjectProps {
  thumbnail: string;
  title: string;
  text: string;
  liveButtonText: string;
  url: string;
  github: string;
}

export interface BlogPostProps {
  image: string;
  title: string;
  url: string;
}

export interface HamburgerProps {
  hamburgerOpen: boolean;
  setHamburgerOpen: Dispatch<SetStateAction<boolean>>;
}
