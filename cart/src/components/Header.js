import React from "react";
import { Link } from "react-router-dom";

const Header = ({ cartCount }) => {
  const headerStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    padding: "1rem 5%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 5,
    backgroundColor: '#603F26#6C4E31',
  };

  const logoStyle = {
    width: "40px",
    color:"#FAF6E3",
    
  };

  const navItemStyle = {
    position: "relative",
    color: "#FAF6E3",
    fontSize: "20px",
    fontWeight: "600",
    lineHeight: "25px",
    letterSpacing: "-0.13px",
    textDecoration: "none",
    marginLeft: "2.5rem",
    transition: "all 0.5s ease",
  };

  const navbarStyle = {
    display: "flex",
    left: "50%",
  };

  return (
    <div>
      <header style={headerStyle}>
        <h1 className="logo" style={logoStyle}>SHOPPE</h1>
        <nav className="navbar" style={navbarStyle}>
          <Link to="/" className="nav-item" style={navItemStyle}>
            CONTACT
          </Link>
          <Link to="/" className="nav-item" style={navItemStyle}>
            ABOUT
          </Link>
          <Link to="/cart" className="nav-item" style={navItemStyle}>
            CART ({cartCount})
          </Link>
          
        </nav>
      </header>
    </div>
  );
};

export default Header;
