import { useState } from "react";
import style from "../components/Header.module.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Header() {
  const [dropdown, setDropDown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setDropDown(false);
  };

  return (
    <div className={style.mainCon}>
      {/* Logo */} 
      <Link to="/" onClick={closeMenu}>
        <img src={logo} alt="logo img" />
      </Link>

      {/* Hamburger */}
      <button
        className={`${style.menuButton} ${menuOpen ? style.menuOpen : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation */}
      <ul className={`${style.listItem} ${menuOpen ? style.listOpen : ""}`}>
        <li>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>

        <li>
          <Link to="/about" onClick={closeMenu}>
            About us
          </Link>
        </li>

        <li
          className={style.hoveredLi}
          onMouseEnter={() => setDropDown(true)}
          onMouseLeave={() => setDropDown(false)}
        >
          <span>Capabilities</span>

          {dropdown && (
            <ul className={style.dropDownCss}>
              <li>
                <Link to="/family" onClick={closeMenu}>
                  Family Law
                </Link>
              </li>
              <li>
                <Link to="/mari" onClick={closeMenu}>
                  Maritime Advisory
                </Link>
              </li>
              <li>
                <Link to="/coll" onClick={closeMenu}>
                  Collective Bargaining
                </Link>
              </li>
              <li>
                <Link to="/civil" onClick={closeMenu}>
                  Civil & Property Law
                </Link>
              </li>
              <li>
                <Link to="/criminal" onClick={closeMenu}>
                  Criminal Law Services
                </Link>
              </li>
              <li>
                <Link to="/inter" onClick={closeMenu}>
                  International trade Law
                </Link>
              </li>
              <li>
                <Link to="/corp" onClick={closeMenu}>
                  Corporate & Business Law
                </Link>
              </li>
              <li>
                <Link to="/legal" onClick={closeMenu}>
                  Legal Advisory & Consultation
                </Link>
              </li>
              <li>
                <Link to="/draft" onClick={closeMenu}>
                  Legal Documentation & Drafting
                </Link>
              </li>
              <li>
                <Link to="/labour" onClick={closeMenu}>
                  Labour & Employment Law
                </Link>
              </li>
              <li>
                <Link to="/liaisoning" onClick={closeMenu}>
                  Liaisoning Service
                </Link>
              </li>
              <li>
                <Link to="/tax" onClick={closeMenu}>
                  Taxation & Financial Legal Services
                </Link>
              </li>
              <li>
                <Link to="/intellectual" onClick={closeMenu}>
                  Intellectual Property (IPR) Services
                </Link>
              </li>
              <li>
                <Link to="/nri" onClick={closeMenu}>
                  ⁠⁠NRI Legal Services
                </Link>
              </li>
              <li>
                <Link to="/visa" onClick={closeMenu}>
                  Visa Refusal Appeal Services
                </Link>
              </li>
              <li>
                <Link to="/out" onClick={closeMenu}>
                  International Legal Services & Legal Process Outsourcing
                </Link>
              </li>
              <li>
                <Link to="/pre" onClick={closeMenu}>
                  Pre-Litigation & Dispute Resolution
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li>
          <Link to="/people" onClick={closeMenu}>
            People
          </Link>
        </li>

        <li>
          <Link to="/blogs" onClick={closeMenu}>
            Blogs
          </Link>
        </li>

        <li>
          <Link to="/news" onClick={closeMenu}>
            Legal News 
          </Link>
        </li>

        <li>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
