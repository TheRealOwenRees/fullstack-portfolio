import { useEffect } from "react";

const useNavColour = () => {
  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          const sectionId = section.id;
          const bgColorClassName = `${sectionId}-bgcolor`;
          if (navbar) {
            navbar.className = `navbar ${bgColorClassName}`;
          }
        }
      });
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
};

export default useNavColour;
