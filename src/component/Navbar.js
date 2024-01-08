import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

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
            <span>Logout</span>
          </button>
        </div>
      </div>

  );
};

export default Navbar;
