import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";
import MyButton from "./MyButton";


function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      document.body.classList.remove('hide-overflow');
    } else {
      document.body.classList.add('hide-overflow');
    }
  };


  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1345px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <header id="header">
      <div className="w-100  flex justify-content-between align-center">
        <Link
          className="flex gap-50 h-100 align-center no-decoration text-white"
          to="/"
        >
          <img className="logo-svg" src="logo.jpg" alt="Loading Icon" />
          <span className="logo-name | flex justify-content-center  flex-col h-100">
            <h1 className="mt-50"><span className="text-primary">Ni</span>rmand</h1>
          </span>
        </Link>

        {isMobile ? (
          <div className="flex">
            {/* download btn  */}
            <MyButton className="signup-btn"
              text="SignUp"
              background="transparent"
              boxShadow="none"
              margin="0 1.5rem 0 auto"
              textDecoration="none"
              fontWeight="var(--fw-bolder)"
              fontSize="1.2rem"
              color="var(--clr-primary-100)"
              fontFamily="var(--ff-body)"
              href="/signup"
            />
            {/* hamburger btn  */}
            <button className="hamburger-icon" onClick={handleMenuToggle}>
              <span className={`line ${isMenuOpen ? "line-open" : ""}`}></span>
              <span className={`line ${isMenuOpen ? "line-open" : ""}`}></span>
              <span className={`line ${isMenuOpen ? "line-open" : ""}`}></span>
            </button>
            {/* initail hidden navigation offcanvas for mobile devices */}
            <nav className={`primary-nav-mobile | ${isMenuOpen ? "open" : ""} z-index-1`}>
              <div className="flex flex-col h-100 w-100  align-self-end">
                <button
                  className="hamburger-icon close"
                  onClick={handleMenuToggle}
                >
                  <span
                    className={`line ${isMenuOpen ? "line-open" : ""}`}
                  ></span>
                  <span
                    className={`line ${isMenuOpen ? "line-open" : ""}`}
                  ></span>
                  <span
                    className={`line ${isMenuOpen ? "line-open" : ""}`}
                  ></span>
                </button>
                <ul
                  aria-label="Primary"
                  className="mobile-nav-list | flex justify-content-center align-center flex-col w-100"
                >
                  <li>
                    <Link
                      to="/"
                      className={location.pathname === "/" ? "mobile-nav-anchor active-mobile" : "mobile-nav-anchor"}
                      onClick={handleMenuToggle}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cources"
                      className={
                        location.pathname === "/cources" ? "mobile-nav-anchor active-mobile" : "mobile-nav-anchor"
                      }
                      onClick={handleMenuToggle}
                    >
                      Cources
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/notification"
                      className={location.pathname === "/notification" ? "mobile-nav-anchor active-mobile" : "mobile-nav-anchor"}
                      onClick={handleMenuToggle}
                    >
                      Notification
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      to="/blogs"
                      className={
                        location.pathname === "/blogs" ? "mobile-nav-anchor active-mobile" : "mobile-nav-anchor"
                      }
                      onClick={handleMenuToggle}
                    >
                      Blogs
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      to="/about"
                      className={
                        location.pathname === "/about" ? "mobile-nav-anchor active-mobile" : "mobile-nav-anchor"
                      }
                      onClick={handleMenuToggle}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className={location.pathname === "/contact" ? "mobile-nav-anchor active-mobile" : "mobile-nav-anchor"}
                      onClick={handleMenuToggle}
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        ) : (
          <div className="flex gap-200">
            <nav className="primary-nav | flex align-center z-index-1">
              <ul
                aria-label="Primary"
                className="nav-list | gap-200 flex text-center"
              >
                <li>
                  <Link
                    to="/"
                    className={location.pathname === "/" ? "active" : ""}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cources"
                    className={
                      location.pathname === "/cources" ? "active" : ""
                    }
                  >
                    Cources
                  </Link>
                </li>
                <li>
                  <Link
                    to="/notification"
                    className={location.pathname === "/notification" ? "active" : ""}
                  >
                    Notification
                  </Link>
                </li>
                {/* <li>
                  <Link
                    to="/blogs"
                    className={location.pathname === "/blogs" ? "active" : ""}
                  >
                    blogs
                  </Link>
                </li> */}
                <li>
                  <Link
                    to="/about"
                    className={location.pathname === "/about" ? "active" : ""}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className={location.pathname === "/contact" ? "active" : ""}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
            <MyButton text="SignUp" href="/signup"/>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
