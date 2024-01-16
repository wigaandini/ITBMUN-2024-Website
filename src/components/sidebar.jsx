import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";
import Logo from "../assets/logo-black.png";

function Sidebar({ isOpen, toggleNavbar }) {
  const handleSidebarToggle = () => {
    toggleNavbar();
  };

  useEffect(() => {
    function adjustSidebar() {
      const windowWidth = window.innerWidth;

      if (windowWidth >= 1200 && isOpen) {
        toggleNavbar(false);
      }
    }

    adjustSidebar();

    window.addEventListener("resize", adjustSidebar);

    return () => {
      window.removeEventListener("resize", adjustSidebar);
    };
  }, [isOpen, toggleNavbar]);

  return (
    <>
      {isOpen && <div className="Overlay" onClick={handleSidebarToggle} />}

      <div className={`Sidebar ${isOpen ? "open" : ""}`} id="close">
        <div className="Sidebar__header">
          <img src={Logo} alt="ITBMUN Logo" />
          {/* x button */}
          <button className="CloseButton" onClick={handleSidebarToggle}>
            &#10006;
          </button>
        </div>
        <div className="Sidebar__links">
          <Link to="/"> Home </Link>
          <Link to="/about"> About Us </Link>
          <Link to="/councils"> Councils </Link>
          <Link to="/registration"> Registration </Link>
          <Link to="/articles"> Articles </Link>
          <Link to="/sponsors"> Sponsors </Link>
          <Link to="/contact"> Contact Us </Link>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
