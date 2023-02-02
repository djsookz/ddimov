import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Header.css";
import Logo from "../images/logo.png";
import CV from "./CV/CV.pdf";
import { Link } from "react-scroll/modules";
import Test from "./Test";

const Header = () => {
  const [header, setHeader] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setHeader(false);
      } else {
        setHeader(true);
      }
    });
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className={header ? "header" : "headerOnScroll"}>
      <div className={header ? "header_wrapper" : "header_wrapperOnScroll"}>
        <Link to="home" spy={true} smooth={true} offset={-100} duration={800}>
          <img className="header_logo" src={Logo} alt="logo" width={70} />
        </Link>
        <div className="header_nav">
          <ul className="header_nav_ul">
            <li>
              <Link
                className="header-link"
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={800}
              >
                About<span>()</span>
              </Link>
            </li>
            <li>
              <Link
                className="header-link"
                to="experience"
                spy={true}
                smooth={true}
                offset={-150}
                duration={1500}
              >
                Projects<span>()</span>
              </Link>
            </li>
            <li>
              <Link
                className="header-link"
                to="Contact"
                spy={true}
                smooth={true}
                offset={-350}
                duration={1500}
              >
                Contact<span>()</span>
              </Link>
            </li>
            <li>
              <a className="resume" href={CV} download>
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
