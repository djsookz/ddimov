import React from "react";
import { Link } from "react-scroll";
import "./ScrollToTop.css";
import { useState, useEffect } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const ScrollToTop = () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  return (
    <div>
      {backToTop && (
        <span id="scroll-top">
          <Link to="home" spy={true} smooth={true} offset={0} duration={1200}>
            <BsFillArrowUpCircleFill id="scroll-top-icon" />
          </Link>
        </span>
      )}
    </div>
  );
};

export default ScrollToTop;
