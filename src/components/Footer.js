import { Link } from "react-router-dom";
import "../styles/Footer.css";
import linkedinIcon from "../assets/socialcons/LinkedIn.png"
import twitterIcon from "../assets/socialcons/Twitter.png"
import instagramIcon from "../assets/socialcons/Instagram.png"
import facebookIcon from "../assets/socialcons/Facebook.png"
// importing custom hooks 
import useScrollAnimation from '../hooks/UseScrollAnimation';

function Footer() {
  const elementRef = useScrollAnimation(['fade-up']);
  return (
    <footer ref={elementRef}>
      <div className="footer-div">
        {/* <section className="download-app-sec">
          <h3 className="footer-heading">College Faculty</h3>
          <div className="qr-container | text-center two-col-grid">
            <img src={appQr} alt={appQr} />
            <img src={appQr} alt={appQr} />
          </div>
          <div className="download-icon-links | text-center two-col-grid">
            <a href="/">
              <img src={appstoreImg} alt={appstoreImg} />
            </a>
            <a href="/">
              <img src={playstoreImg} alt={playstoreImg} />
            </a>
          </div>
        </section> */}
         <section className="download-app-sec">
          <div className="flex flex-col align-center h-100 justify-content-evenly">
            <div className="footer-logo-image">
              <img src="logo.jpg" alt="logo.jpg" width="100%" height="100%"/>
            </div>
              <span className="footer-logo-name | flex justify-content-center  flex-col ">
              <h1 className="mt-50 "><span className="text-secondary">Ni</span>rmand</h1>
            </span>
          </div>
        </section>
        <section className="footer-nav-sec">
          <div className="footer-nav-div | block p-50 flex two-col-grid">
              <nav>
                <ul>
                  <li>
                    <Link
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cources"
                    >
                      Cources
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blogs"
                    >
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                    >
                      About
                    </Link>
                  </li>
                
                  <li>
                    <Link
                      to="/contact"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>
              <nav>
                <ul>
                <li>
                    <Link
                      to="/privacy"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  
                <li>
                    <Link
                      to="/terms"
                    >
                      College Terms
                    </Link>
                  </li>
                <li>
                    <Link
                      to="/disclaimer"
                    >
                      Disclaimer
                    </Link>
                  </li>
                  
                </ul>
              </nav>
          </div>
        </section>

        <section className="social-icons-sec">
          <div className="social-icons-div">
            <h3 className="footer-heading text-right">Follow Us</h3>
            <div className="footer-icons-div | mt-200">
              <ul>
                <li>
                  <Link to="/">
                    <img src={linkedinIcon} alt=".." />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <img src={twitterIcon} alt=".." />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <img src={instagramIcon} alt=".." />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <img src={facebookIcon} alt=".." />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
