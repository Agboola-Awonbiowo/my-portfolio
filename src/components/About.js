import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div>
      <div className="profile">
        <div className="container">
          <div data-aos="flip-left" className="about">
            <span>ABOUT ME</span>
          </div>
          <div data-aos="fade-right">
            <p>
              Self-motivated IT professional with 2years experience. I have
              proficiency in HTML, CSS, JavaScript and jQuery. with experience
              in responsive and adaptive design, advanced knowledge of React js.
              and great problem-solving skills, communication skills and
              collaboration skills. My ambition is to be the best at what I do
              and to make sure I impact any organization I work for positively.I
              am passionate about providing solutions that help simplify and
              make people's lives easier and this is how I get motivated.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
