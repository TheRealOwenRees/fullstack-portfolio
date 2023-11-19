import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu.tsx";

const Hamburger = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const spanRotateClass = (spanNumber: number) => {
    return hamburgerOpen ? `span-${spanNumber}-rotate` : "";
  };

  return (
    <>
      <div
        className="hamburger"
        onClick={() => setHamburgerOpen(!hamburgerOpen)}
      >
        <span className={spanRotateClass(1)}></span>
        <span className={spanRotateClass(2)}></span>
        <span className={spanRotateClass(3)}></span>
      </div>
      <HamburgerMenu
        hamburgerOpen={hamburgerOpen}
        setHamburgerOpen={setHamburgerOpen}
      />
    </>
  );
};

export default Hamburger;
