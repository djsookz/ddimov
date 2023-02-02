import React, { useState } from "react";
import "./Experience.css";
import AOS from "aos";
import "aos/dist/aos.css";

import ExperienceSection from "./ExperienceSection";

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <div className="experience-wrapper">
        <div data-aos="zoom-out-up" className="experience-section-open">
          <span className="experience-open">{`<`}</span>
          <span className="experience-tag">{`projects`}</span>
          <span className="experience-open">{`>`}</span>
        </div>
        <div className="experience-section">
          <ExperienceSection />
        </div>
        <div data-aos="zoom-out-down" className="experience-section-close">
          <span className="experience-open">{`</`}</span>
          <span className="experience-tag">{`projects`}</span>
          <span className="experience-open">{`>`}</span>
        </div>
      </div>
    </div>
  );
};

export default Experience;
