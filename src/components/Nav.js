import React, { useState } from "react";

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
                <div>Portfolio</div>
                <div>About</div>
                <div>Contact</div>
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
