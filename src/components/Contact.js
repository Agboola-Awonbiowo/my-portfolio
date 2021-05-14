import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div>
      <div className="contact">
        <div className="container">
          <div data-aos="fade-in">
            <span className="contact-ok">OK, LET'S CREATE SOMETHING GREAT</span>
          </div>
          <div className="contact-des" data-aos="fade-left">
            <span>
              If you like my work and have some cool project to work on, just
              send me direct message or contact me through the social sites
              listed below.
            </span>
          </div>
          <div className="get" data-aos="flip-right">
            <span className="get-intouch">GET IN TOUCH</span>
          </div>
          <div className="social-contact" data-aos="fade-right">
            <ul>
              <li>EMAIL</li>
              <li>LINKDLN</li>
              <li>GITHUB</li>
              <li>FACEBOOK</li>
              <li>TWITTER</li>
              <li className="last-media">INSTAGRAM</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
