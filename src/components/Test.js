import React, { useEffect } from "react";
import "./Test.css";
import { useRef } from "react";

const Test = () => {
  const ham = useRef(null);

  useEffect(() => {
    animationHam();
  }, []);

  const animationHam = () => {
    ham.current.classList.toggle("hell");
  };
  return (
    <div>
      <span ref={ham} id="ham-menu" onClick={animationHam}>
        <span className="ham-row1"></span>
        <span className="ham-row2"></span>
        <span className="ham-row3"></span>
      </span>
    </div>
  );
};

export default Test;
