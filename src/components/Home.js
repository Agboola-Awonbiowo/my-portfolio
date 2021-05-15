import React, { useEffect } from "react";
import Nav from "./Nav";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div>
      <div className="showcase">
        <img src="image/pexels-luis-gomes-546819.jpg" alt="" />
        <div className="upper">
          <div className="container">
            <Nav />
            <h1 data-aos="fade-right">Hello, i'm Agboola</h1>
            <h2 data-aos="fade-left">
              <p>
                i'm a <span className="dev">Dev</span>eloper
              </p>
            </h2>
            <div data-aos="flip-left" className="botton">
              <button>View my Cv here</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
