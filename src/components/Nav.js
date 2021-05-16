import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

export default function Nav() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  return (
    <div>
      <header>
        <div className="container">
          <div className="head">
            <div>
              <span>logo</span>
            </div>
            <aside className={sidebarIsOpen ? "open" : ""}>
              <div className="nav">
                <div onClick={() => setSidebarIsOpen(false)}>
                  <Link smooth to="#home">
                    Home
                  </Link>
                </div>
                <div onClick={() => setSidebarIsOpen(false)}>
                  <Link smooth to="#portfolio">
                    Portfolio
                  </Link>
                </div>
                <div onClick={() => setSidebarIsOpen(false)}>
                  <Link smooth to="#about">
                    About
                  </Link>
                </div>
                <div onClick={() => setSidebarIsOpen(false)}>
                  <Link smooth to="#contact">
                    Contact
                  </Link>
                </div>
                <span onClick={() => setSidebarIsOpen(false)} className="close">
                  <i className="fa fa-close"></i>
                </span>
              </div>
            </aside>
            <span onClick={() => setSidebarIsOpen(true)} className="harmburger">
              <i className="fa fa-bars"></i>
            </span>
          </div>
        </div>
      </header>
    </div>
  );
}
