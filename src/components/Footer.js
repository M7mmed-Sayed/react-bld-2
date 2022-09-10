import React from "react";
import "../Css/Footer.css";
import * as Icon from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="box">
      <div className="container">
        <div className="row">
          <ul className="column">
            <li>
              <Link
                to="/udemy-business/?locale=en_US&amp;mx_pg=clp-pythonforbeginners&amp;path=%2F&amp;ref=footer"
                target="_blank"
              >
                <span>Udemy Business</span>
              </Link>
            </li>
            <li>
              <Link to="/teaching/?ref=teach_footer">
                <span>Teach on Udemy</span>
              </Link>
            </li>
            <li>
              <Link to="/mobile/" target="_blank" rel="noopener noreferrer">
                <span>Get the app</span>
              </Link>
            </li>
            <li>
              <Link to="https://about.udemy.com/?locale=en-us">
                <span>About us</span>
              </Link>
            </li>
            <li>
              <Link to="https://about.udemy.com/company?locale=en-us#offices">
                <span>Contact us</span>
              </Link>
            </li>
          </ul>
          <ul className="column">
            <li>
              <Link to="https://about.udemy.com/careers?locale=en-us">
                <span>Careers</span>
              </Link>
            </li>
            <li>
              <Link to="https://blog.udemy.com/?ref=footer">
                <span>Blog</span>
              </Link>
            </li>
            <li>
              <Link to="/support/">
                <span>Help and Support</span>
              </Link>
            </li>
            <li>
              <Link to="/affiliate/">
                <span>Affiliate</span>
              </Link>
            </li>
            <li>
              <Link to="https://investors.udemy.com">
                <span>Investors</span>
              </Link>
            </li>
          </ul>
          <ul className="column">
            <li>
              <Link to="/terms/">
                <span>Terms</span>
              </Link>
            </li>
            <li>
              <Link to="/terms/privacy/">
                <span>Privacy policy</span>
              </Link>
            </li>
            <li>
              <Link to="google.com">
                <span>Cookie settings</span>
              </Link>
            </li>
            <li>
              <Link to="/sitemap/">
                <span>Sitemap</span>
              </Link>
            </li>
            <li>
              <Link to="https://about.udemy.com/accessibility-statement?locale=en-us">
                <span>Accessibility statement</span>
              </Link>
            </li>
          </ul>
          <ul className="column langColomn">
            <div className="language-selector-container">
              <button type="button" className="language-btn">
                <Icon.Globe />
                <span>English</span>
              </button>
            </div>
          </ul>
        </div>
      </div>

      <div className="logo-and-copyright">
        <div className="logo-container" data-purpose="logo-container">
          <Link
            to="/udemy-clone-react"
            className="udlite-btn udlite-btn-large udlite-btn-link udlite-heading-md"
          >
            <img
              src="	https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
              alt="Udemy"
              width="91.07142857142857"
              height="34"
            />
          </Link>
        </div>

        <div
          className="copyright-container udlite-text-xs"
          data-purpose="footer-copyright"
        >
          © 2022 Udemy, Inc.
        </div>
      </div>
    </div>
  );
}

export default Footer;
