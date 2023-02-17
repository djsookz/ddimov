import React, { useEffect } from "react";
import "./Education.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import certificate1 from "../Certificate/certificate1.png";
import certificate2 from "../Certificate/certificate1-2.png";

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div id="education">
      <div data-aos="zoom-out-up" className="education-section-open">
        <span className="education-open">{`<`}</span>
        <span className="education-tag">{`education`}</span>
        <span className="education-open">{`>`}</span>
      </div>
      <div className="education-wrapper">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="education-leftSide"
        >
          <PhotoProvider>
            <PhotoView src={certificate1}>
              <img
                className="education-img"
                src={certificate1}
                alt="Certificate1"
              />
            </PhotoView>
            <PhotoView src={certificate2}>
              <img
                className="education-img"
                src={certificate2}
                alt="Certificate1"
              />
            </PhotoView>
          </PhotoProvider>
        </div>
        <div className="education-rightSide">
          <h1 data-aos="zoom-out-left">Swift Academy</h1>
          <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
            This was a Front-End course, which enlcuded HTML, CSS and
            Javascript. Also had a litle bit of jQuery, Ajax and Less. I did
            many excercices there and few small projects like cloning of the
            SpaceX website.
          </p>
        </div>
      </div>
      <div
        data-aos-anchor-placement="center-bottom"
        data-aos="zoom-out-down"
        className="education-section-close"
      >
        <span className="education-open">{`</`}</span>
        <span className="education-tag">{`education`}</span>
        <span className="education-open">{`>`}</span>
      </div>
    </div>
  );
};

export default Education;
