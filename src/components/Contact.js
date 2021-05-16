import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div id="contact">
      <div className="contact">
        <div className="container">
          <div data-aos="fade-in" className="contact-ok">
            <p>OK, LET'S CREATE SOMETHING GREAT</p>
          </div>
          <div className="contact-des" data-aos="fade-left">
            <p>
              If you like my work and have some cool project to work on, just
              send me direct message or contact me through the social sites
              listed below.
            </p>
          </div>
          <div className="get" data-aos="flip-right">
            <span className="get-intouch">
              <i className="fas fa-paper-plane"></i>GET IN TOUCH
            </span>
          </div>
          <div className="social-contact" data-aos="fade-right">
            <ul>
              <li>EMAIL</li>
              <li>LINKEDIN</li>
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
