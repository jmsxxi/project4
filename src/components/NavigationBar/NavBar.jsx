import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./navbar.css";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  console.log(toggleMenu);
  const Menu = () => (
    <>
      <div className="navbar-links">
        <NavLink to="showblogs">Blog</NavLink>
        <NavLink to="aboutus">About Us</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </div>

      <div className="navbar-buttons">
        <Button color="btn">Sign Up</Button>
        <Button color="btn">Login</Button>
      </div>
    </>
  );
  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <div className="navbar-logo">
          <img src={logo} alt="" />
        </div>
        <div className="navbar-menu">
          <Menu />
        </div>

        <div className="navbar-mobile-container">
          {toggleMenu ? (
            <FontAwesomeIcon
              className="menu-icon"
              icon={faXmark}
              size="lg"
              style={{ color: "#0266ff" }}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <FontAwesomeIcon
              className="menu-icon"
              icon={faBars}
              size="lg"
              style={{ color: "#0266ff" }}
              onClick={() => setToggleMenu(true)}
            />
          )}

          {toggleMenu && (
            <div className="navbar-mobile-container-content">
              <div className="navbar-mobile-container-links scale-up-center">
                <Menu />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
