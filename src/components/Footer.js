import React from "react";

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="made">
            <span>
              {" "}
              <i class="far fa-copyright"></i> 2021{" "}
              <span class="name">AGBOOLA</span>. MADE IN NIGERIA
            </span>
          </div>
          <div className="social-align">
            <div className="social">
              <div>
                <span className="twitter">
                  <i class="fab fa-twitter"></i>FOLLOW ME ON TWITTER
                </span>
              </div>
              <div>
                <span className="link">
                  <i class="fab fa-linkedin"></i>FOLLOW ME ON LINKEDIN
                </span>
              </div>
            </div>
          </div>
          <div className="tools">
            <p>This site is built with great tools like Vs Code and Figma.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
