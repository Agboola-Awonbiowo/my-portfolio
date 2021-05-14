import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const content = [
  {
    title: "",
    image: "/images/image-two.png",
    description: "Amazon clone",
  },
  {
    title: "",
    image: "images/image-one.png",
    description: "Skillgrid learning website",
  },
  {
    title: "",
    image: "images/image-three.png",
    description: "Bakery products landing page",
  },

  {
    title: "",
    image: "images/image-four.png",
    description: "Sako E-commerce",
  },
];

export default function Portfolio() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div>
      <div className="Projects">
        <div className="container-pro">
          <div data-aos="fade-right" className="port-head">
            PORTFOLIO
          </div>
          <div className="project-list" data-aos="fade-in">
            {content.map((item, index) => (
              <div key={index}>
                <div className="project">
                  <img className="image-one" src={item.image} alt="" />
                  <div className="image-one-text">
                    <span>{item.description}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* <div className="project-one">
              <div className="image-one"></div>
              <div className="image-one-text">
                <span>Skillgrid Technologies learning website</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
