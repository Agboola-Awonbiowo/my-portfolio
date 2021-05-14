import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div>
      <div className="showcase">
        <div className="upper">
          <div className="container">
            <h1 data-aos="fade-right">Hello, i'm Agboola</h1>
            <h2 data-aos="fade-left">
              <p>
                i'm a <span className="dev">Dev</span>eloper
              </p>
            </h2>
            <div data-aos="flip-left">
              <button>View my Cv here</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
