import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Begining.css";

import Header from "./Header";
import Typewriter from "typewriter-effect";
import About from "./About";
import Experience from "./Experience";
import Test2 from "./Test2";
import Contact from "./Contact";
import ScrollToTop from "./ScrollToTop";
import Education from "./Education";

const hi = "Hi, my name is Dimo Dimov";

const Begining = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const taggStart = "div";
  const taggEnd = "div";
  const symOpen = "<";
  const symClose = ">";
  const symHash = "/";
  return (
    <div id="home">
      <Header />
      <div className="begining_main">
        <div className="begining_typewriter_wraper">
          <span className="begining_typewriter">
            <span className="begining_symbols">{symOpen}</span>
            <span className="begining_tag">{taggStart}</span>
            <span className="begining_symbols">{symClose}</span>

            <Typewriter
              options={{
                loop: true,
                autoStart: true,
                delay: 100,
                deleteSpeed: 30,
                wrapperClassName: "Wrapper",
              }}
              onInit={(typewriter) => {
                typewriter
                  .start()
                  .typeString(
                    `<span style='margin-left:50px;'> </span> <<span style='color: rgb(0, 122, 204);'>h1</span>><span style="color: white;"> Hi, my name is <strong>Dimo Dimov</strong></span>`
                  )
                  .typeString(" <")
                  .typeString("/")
                  .typeString(
                    "<span style='color: rgb(0, 122, 204);'>h1</span>>"
                  )

                  .pauseFor(1300)
                  .typeString("<br />")
                  .typeString(
                    "<span style='margin-left:50px;'> </span><<span style='color: rgb(0, 122, 204);'>p</span>> <span style='color: white;'> I love <strong>motorcycles</strong></span>"
                  )
                  .pauseFor(1500)
                  .deleteChars(11)
                  .typeString(
                    "<span style='color:white;'><strong>Music</strong></span>"
                  )
                  .pauseFor(1500)
                  .deleteChars(5)
                  .typeString(
                    "<span style='color:white;'><strong>GYM</strong></span>"
                  )
                  .typeString(" <")
                  .typeString("/")
                  .typeString(
                    "<span style='color: rgb(0, 122, 204);'>p</span>>"
                  )
                  .pauseFor(1500)
                  .typeString("<br />")
                  .typeString("<span style='margin-left:50px;'>")
                  .typeString(" <")
                  .typeString(
                    `<span style="color: white;"><span style="color: #3ecaad;">ButILoveCodingMore</span></span>`
                  )
                  .typeString(
                    `<span style="color: rgb(85, 187, 255);" > fav =</span>`
                  )
                  .typeString(
                    `<span style='color: rgb(0, 122, 204);' > {</span>`
                  )
                  .typeString(
                    `<span style="color: rgb(85, 187, 255);" > react</span>`
                  )
                  .typeString(
                    `<span style='color: rgb(0, 122, 204);' > }</span>`
                  )
                  .typeString(" /")
                  .typeString(">")
                  .pauseFor(2000)
                  .deleteAll()
                  .start();
              }}
            />

            <span className="begining_symbols">{symOpen}</span>
            <span className="begining_symbols">{symHash}</span>
            <span className="begining_tag">{taggEnd}</span>
            <span className="begining_symbols">{symClose}</span>
          </span>
        </div>
      </div>
      <About />
      <Education />
      <Experience />
      <Contact />
      <ScrollToTop />
    </div>
  );
};

export default Begining;
