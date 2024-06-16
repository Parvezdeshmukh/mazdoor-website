// ScrollToTopButton.js
import React, { useState, useEffect } from "react";
import "../../src/App.css";
import FeatherIcon from "feather-icons-react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 200); // Adjust this threshold as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <a
          className="scroll-to-top"
          href="#page-top"
          onClick={scrollToTop}
        >
          <FeatherIcon className="link-icon" icon="chevron-up" />
        </a>
      )}
    </div>
  );
};

export default ScrollToTopButton;
