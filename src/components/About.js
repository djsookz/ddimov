import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";
import Me from "../images/about-me.png";
import { Link } from "react-scroll";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div id="about" className="about">
      <div
        className="about-image-wrapper"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <span className="about-image-border1"></span>
        <span className="about-image-border2"></span>
        <img className="about-image" src={Me} alt="Me" />
        <span className="about-image-border3"></span>
        <span className="about-image-border4"></span>
      </div>

      <div className="about-aboutme">
        <span data-aos="zoom-out-up" className="about-section-open">
          <span className="about-open">{`<`}</span>
          <span className="about-tag">{`about`}</span>
          <span className="about-open">{`>`}</span>
        </span>
        <h1 data-aos="zoom-out-left">About me</h1>
        <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
          I'm a Junior Front End developer from Plovdiv, BG. Currently I am
          looking for a job where I can do what I love most . In my spare time I
          enjoy motorcycling, gaming and building my own projects. My preferred
          tools are React.js, HTML Css and JavaScript. I'm on{" "}
          <a href="https://github.com/djsookz" target="_blank">
            GitHub
          </a>
          ,{" "}
          <a
            href="https://www.linkedin.com/in/dimo-dimov-698837207/"
            target="_blank"
          >
            LinkedIn
          </a>
          ,{" "}
          <a href="https://www.facebook.com/emena.psaxneic/" target="_blank">
            Facebook
          </a>{" "}
          and{" "}
          <a
            href="https://www.youtube.com/channel/UCOfqjs7XGG_ybllpsDIHDpQ"
            target="_blank"
          >
            YouTube
          </a>
          .
        </p>
        <span
          data-aos="zoom-out-down"
          data-aos-anchor-placement="top-bottom"
          className="about-section-close"
        >
          <span className="about-open">{`</`}</span>
          <span className="about-tag">{`about`}</span>
          <span className="about-open">{`>`}</span>
        </span>
      </div>
    </div>
  );
};

export default About;
