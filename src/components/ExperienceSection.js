import React from "react";
import "./Experience.css";
import AOS from "aos";
import "aos/dist/aos.css";
import AmazonPC from "../images/Amazon-pc1.png";
import GooglePC from "../images/google-clone-pc.png";
import GooglePhone from "../images/google-clone-phone.png";
import AmazonPhone from "../images/Amazon-phone1.png";

const ExperienceSection = () => {
  return (
    <div className="exp-section">
      <section className="exp-wrapper">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="exp-images-wrapper"
        >
          <div className="amazon-pc-wrapper">
            <img
              className="amazon-pc"
              src={AmazonPC}
              alt="AmazonPC"
              width={450}
            />
            <div>
              <img
                className="amazon-phone"
                src={AmazonPhone}
                alt="AmazonPhone"
                width={150}
              />
            </div>
          </div>
        </div>
        <div className="exp-text-wrapper">
          <h2 data-aos="fade-left" className="exp-text-h1">
            <a href="https://amazon-clone-lemon-mu.vercel.app/" target="_blank">
              Amazon Clone
            </a>
          </h2>
          <p data-aos="fade-right">
            {" "}
            This project is made with React.js, Firebase, GoogleAuth,
            React-Icons. It is uploaded on{" "}
            <span>
              <a
                className="exp-links"
                href="https://github.com/djsookz/amazon-clone"
                target="_blank"
              >
                Git
              </a>{" "}
            </span>{" "}
            and
            <span>
              {" "}
              <a
                className="exp-links"
                href="https://vercel.com/djsookz/amazon-clone"
                target="_blank"
              >
                Vercel.
              </a>{" "}
            </span>{" "}
            As you can see it is responsible as well{" "}
          </p>
        </div>
      </section>
      <hr />
      <section className="exp-wrapper">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="exp-images-wrapper"
        >
          <div className="amazon-pc-wrapper">
            <img
              className="amazon-pc"
              src={GooglePC}
              alt="AmazonPC"
              width={450}
            />
            <div>
              <img
                className="amazon-phone"
                src={GooglePhone}
                alt="AmazonPhone"
                width={150}
              />
            </div>
          </div>
        </div>
        <div className="exp-text-wrapper">
          <h2 data-aos="fade-left" className="exp-text-h1">
            <a href="https://google-clone-sand.vercel.app/" target="_blank">
              Google Clone
            </a>
          </h2>
          <p data-aos="fade-right">
            {" "}
            This project is made with Next.js, TailwindCSS and SSR. Have
            pagination, Google API and it is fully responsible. It is uploaded
            on{" "}
            <span>
              <a
                className="exp-links"
                href="https://github.com/djsookz/google-clone"
                target="_blank"
              >
                Git
              </a>{" "}
            </span>{" "}
            and
            <span>
              {" "}
              <a
                className="exp-links"
                href="https://vercel.com/djsookz/google-clone"
                target="_blank"
              >
                Vercel.
              </a>{" "}
            </span>{" "}
          </p>
        </div>
      </section>
    </div>
  );
};

export default ExperienceSection;
