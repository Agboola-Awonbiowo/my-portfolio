import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div id="home">
      <div className="showcase">
        <img src="image/pexels-luis-gomes-546819.jpg" alt="" />
        <div className="upper">
          <div className="container">
            <h1 data-aos="fade-right">Hello, i'm Agboola</h1>
            <h2 data-aos="fade-left">
              <p>
                i'm a <span className="dev">Dev</span>eloper
              </p>
            </h2>
            <div data-aos="flip-left" className="botton">
              <button>
                <a
                  href="image/Agboola_Awonbiowo_Resume.pdf"
                  download="Agboola_Awonbiowo_Resume.pdf"
                >
                  <i className="fas fa-download"></i> Resume
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
