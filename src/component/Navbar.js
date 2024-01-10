import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <div className="navbar-area">
        <img width={200} src="/images/logo/logo-main.png" />
        <div className="navbar-search-logout">
          <div className="navbar-search-bar">
            <input type="text" placeholder="search..." />
            <span>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
          </div>
          <button className="navbar-logout-btn">
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
            <Link to="/login" style={{textDecoration:"none", color:"white"}}><span>Logout</span></Link>
          </button>
        </div>
      </div>

  );
};

export default Navbar;
