import React from "react";

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="footer-inner">
            <div className="made">
              <span>
                {" "}
                <i className="far fa-copyright"></i> 2021{" "}
                <span className="name">AGBOOLA</span>.
              </span>
            </div>
            <div className="social-align">
              <div className="social">
                <div>
                  <span className="twitter">
                    <i className="fab fa-twitter"></i>{" "}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://twitter.com/AwonbiowoAgboo1"
                    >
                      FOLLOW ME ON TWITTER
                    </a>
                  </span>
                </div>
                <div>
                  <span className="link">
                    <i className="fab fa-linkedin"></i>{" "}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.linkedin.com/in/agboawon/"
                    >
                      FOLLOW ME ON LINKEDIN
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
