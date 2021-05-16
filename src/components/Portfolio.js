import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const content = [
  {
    title: "",
    image: "/images/image-two.png",
    description: "Amazon clone",
    link: "Https://challenge-ec662.web.app/",
  },
  {
    title: "",
    image: "images/image-one.png",
    description: "Skillgrid learning website",
    link: "http://dev.skillgridtech.com/",
  },
  {
    title: "",
    image: "images/image-three.png",
    description: "Bakery products landing page",
    link: "https://youthful-rosalind-0c1118.netlify.app/",
  },

  {
    title: "",
    image: "images/image-four.png",
    description: "Sako E-commerce",
    link: "https://relaxed-khorana-a33e55.netlify.app/",
  },
];

export default function Portfolio() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div id="portfolio">
      <div className="projects">
        <div className="container-pro">
          <div data-aos="fade-right" className="port-head">
            PORTFOLIO
          </div>
          <div className="project-list">
            {content.map((item, index) => (
              <div key={index}>
                <div className="project">
                  <a target="_blank" rel="noreferrer" href={item.link}>
                    <img
                      className="image-one"
                      data-aos="fade-in"
                      src={item.image}
                      alt=""
                    />
                  </a>
                  <div className="image-one-text">
                    <span>{item.description}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
