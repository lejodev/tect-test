import React from "react";
import "./_Header.scss";
import { Link, BrowserRouter as Router } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h6 className="title">FIFA 21 API</h6>
      <nav className="links">
        <Link to="/players" className="playersLink">
          Players
        </Link>
        <Link to="/teams" className="teamsLink">
          Teams
        </Link>
      </nav>
    </header>
  );
};

export default Header;
